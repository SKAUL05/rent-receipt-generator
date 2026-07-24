import React, { useState, useEffect, useCallback } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Select from '../components/Select';
import GenerateDocument from '../components/GenerateDocument';

/* ── Constants ──────────────────────────────────────────── */
const LS_KEY = 'rrg_form_data';

const CURRENCY_OPTIONS = [
  { value: 'INR', label: '₹ INR — Indian Rupee' },
  { value: 'USD', label: '$ USD — US Dollar' },
  { value: 'EUR', label: '€ EUR — Euro' },
  { value: 'GBP', label: '£ GBP — British Pound' },
  { value: 'AED', label: 'AED — UAE Dirham' },
];

const PAYMENT_OPTIONS = [
  { value: 'Cash',          label: '💵 Cash' },
  { value: 'Cheque',        label: '🏦 Cheque' },
  { value: 'UPI',           label: '📱 UPI' },
  { value: 'Bank Transfer', label: '🔁 Bank Transfer' },
  { value: 'NEFT/IMPS',    label: '📤 NEFT / IMPS' },
];

const EMPTY_FORM = {
  name:                '',
  rent:                '',
  owner:               '',
  pan:                 '',
  address:             '',
  startDate:           '',
  endDate:             '',
  currency:            'INR',
  paymentMode:         'Cash',
  receiptStartNumber:  '1',
};

/* ── PAN validation (Indian format: ABCDE1234F) ─────────── */
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

/* ── Count months between two dates ────────────────────── */
function countMonths(startDate, endDate) {
  if (!startDate || !endDate) return 0;
  const s = new Date(startDate);
  const e = new Date(endDate);
  if (s > e) return 0;
  return (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1;
}

/* ══════════════════════════════════════════════════════════
   FormContainer
   ══════════════════════════════════════════════════════════ */
const FormContainer = ({ onFormChange }) => {
  /* ── State ── */
  const [form, setForm] = useState(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      return saved ? { ...EMPTY_FORM, ...JSON.parse(saved) } : EMPTY_FORM;
    } catch {
      return EMPTY_FORM;
    }
  });

  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);

  /* ── Persist to localStorage on every change ── */
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(form));
  }, [form]);

  /* ── Notify parent for live preview ── */
  useEffect(() => {
    const monthCount = countMonths(form.startDate, form.endDate);
    if (
      form.name && form.owner && form.rent &&
      form.address && form.startDate && form.endDate &&
      monthCount > 0
    ) {
      onFormChange({ ...form });
    } else {
      onFormChange(null);
    }
  }, [form, onFormChange]);

  /* ── Generic field handler ── */
  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    /* Clear error for this field once user starts typing */
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  /* ── Validation ── */
  const validateForm = (data) => {
    const e = {};

    if (!data.name.trim()) {
      e.name = 'Tenant name is required';
    }

    if (!data.owner.trim()) {
      e.owner = "Landlord's name is required";
    }

    /* Bug fix: was && instead of ||; zero or empty rent are both invalid */
    if (!data.rent || Number(data.rent) < 1) {
      e.rent = 'Monthly rent must be at least ₹1';
    }

    if (!data.startDate) {
      e.startDate = 'Rent start date is required';
    }

    if (!data.endDate) {
      e.endDate = 'Rent end date is required';
    }

    if (data.startDate && data.endDate) {
      const s = new Date(data.startDate);
      const en = new Date(data.endDate);
      if (s > en) {
        e.startDate = 'Start date cannot be after end date';
      }
    }

    if (!data.address.trim()) {
      e.address = 'Property address is required';
    }

    /* PAN — optional but must match format if provided */
    if (data.pan && !PAN_REGEX.test(data.pan.trim().toUpperCase())) {
      e.pan = 'PAN must be in ABCDE1234F format';
    }

    const startNum = parseInt(data.receiptStartNumber, 10);
    if (isNaN(startNum) || startNum < 1) {
      e.receiptStartNumber = 'Must be a positive number';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ── Submit — generate & download PDF ── */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    setLoading(true);
    try {
      const doc  = <GenerateDocument {...form} />;
      const asPdf = pdf([]);
      asPdf.updateContainer(doc);
      const blob = await asPdf.toBlob();

      /* Bug fix: replace ALL spaces, not just the first */
      const filename = form.name.trim().replace(/\s+/g, '_').toLowerCase() + '_rent_receipts.pdf';
      saveAs(blob, filename);

      /* Reset after successful download */
      setForm(EMPTY_FORM);
      setErrors({});
      localStorage.removeItem(LS_KEY);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setLoading(false);
    }
  };

  /* ── Clear form ── */
  const handleClearForm = (e) => {
    e.preventDefault();
    setForm(EMPTY_FORM);
    setErrors({});
    localStorage.removeItem(LS_KEY);
  };

  /* ── Derived data ── */
  const monthCount = countMonths(form.startDate, form.endDate);

  /* ── Render ── */
  return (
    <div className="glass-card fade-in-up">
      <h2 className="card-title">Receipt Details</h2>

      <form onSubmit={handleFormSubmit} noValidate>
        <div className="form-section">

          {/* ── Tenant & Rent ── */}
          <div className="form-row">
            <Input
              inputtype="text"
              name="name"
              title="Tenant Full Name"
              value={form.name}
              placeholder="e.g. Rahul Sharma"
              handle={handleInput}
              error={errors.name}
            />
            <Input
              inputtype="number"
              name="rent"
              title="Monthly Rent (₹)"
              value={form.rent}
              placeholder="e.g. 15000"
              handle={handleInput}
              error={errors.rent}
            />
          </div>

          {/* ── Landlord ── */}
          <div className="form-row">
            <Input
              inputtype="text"
              name="owner"
              title="Landlord Name"
              value={form.owner}
              placeholder="e.g. Priya Mehta"
              handle={handleInput}
              error={errors.owner}
            />
            <Input
              inputtype="text"
              name="pan"
              title="Landlord PAN"
              value={form.pan}
              placeholder="e.g. ABCDE1234F"
              handle={(e) => {
                e.target.value = e.target.value.toUpperCase();
                handleInput(e);
              }}
              error={errors.pan}
              optional
            />
          </div>

          {/* ── Payment details ── */}
          <div className="form-row">
            <Select
              name="currency"
              title="Currency"
              value={form.currency}
              handle={handleInput}
              options={CURRENCY_OPTIONS}
            />
            <Select
              name="paymentMode"
              title="Payment Mode"
              value={form.paymentMode}
              handle={handleInput}
              options={PAYMENT_OPTIONS}
            />
          </div>

          {/* ── Address ── */}
          <TextArea
            name="address"
            title="Rental Property Address"
            value={form.address}
            handle={handleInput}
            placeholder="Full address of the rented property"
            rows={2}
            error={errors.address}
          />

          <div className="form-divider" />

          {/* ── Date range & receipt number ── */}
          <div className="form-row">
            <Input
              inputtype="date"
              name="startDate"
              title="Rent Start Date"
              value={form.startDate}
              placeholder=""
              handle={handleInput}
              error={errors.startDate}
            />
            <Input
              inputtype="date"
              name="endDate"
              title="Rent End Date"
              value={form.endDate}
              placeholder=""
              handle={handleInput}
              error={errors.endDate}
            />
          </div>

          <Input
            inputtype="number"
            name="receiptStartNumber"
            title="Receipt Start Number"
            value={form.receiptStartNumber}
            placeholder="e.g. 1 (or 13 if continuing a contract)"
            handle={handleInput}
            error={errors.receiptStartNumber}
          />

          {/* ── Month count badge ── */}
          {monthCount > 0 && (
            <div className="receipt-count-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
              </svg>
              {monthCount} receipt{monthCount !== 1 ? 's' : ''} will be generated
            </div>
          )}

          {/* ── Actions ── */}
          <div className="btn-row">
            <Button
              id="generate-pdf-btn"
              title="Generate PDF"
              type="primary"
              loading={loading}
            />
            <Button
              id="clear-form-btn"
              title="Clear Form"
              type="secondary"
              action={handleClearForm}
            />
          </div>

        </div>
      </form>
    </div>
  );
};

export default FormContainer;