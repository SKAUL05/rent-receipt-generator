import { Text, View, StyleSheet } from '@react-pdf/renderer';

/* Currency symbol mapping */
const CURRENCY_SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
  AED: 'AED ',
};

const styles = StyleSheet.create({
  receiptContainer: {
    margin: '24pt 36pt',
    padding: '20pt 24pt',
    borderWidth: 1.5,
    borderColor: '#4f46e5',
    borderStyle: 'solid',
    borderRadius: 6,
    marginBottom: 20,
  },

  /* Header row */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderBottomStyle: 'solid',
  },
  receiptTitle: {
    fontSize: 15,
    fontFamily: 'Helvetica-Bold',
    color: '#4f46e5',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  receiptMeta: {
    alignItems: 'flex-end',
  },
  receiptNumber: {
    fontSize: 9,
    color: '#64748b',
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  receiptMonth: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    marginTop: 2,
  },

  /* Body */
  bodyText: {
    fontSize: 10.5,
    color: '#334155',
    lineHeight: 1.65,
    marginTop: 10,
    marginBottom: 14,
  },
  highlight: {
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
  },

  /* Amount box */
  amountBox: {
    backgroundColor: '#f0f4ff',
    borderWidth: 1,
    borderColor: '#c7d2fe',
    borderStyle: 'solid',
    borderRadius: 4,
    padding: '8pt 14pt',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountLabel: {
    fontSize: 9,
    color: '#64748b',
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  amountValue: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: '#4f46e5',
  },
  paymentMode: {
    fontSize: 9,
    color: '#64748b',
    fontFamily: 'Helvetica',
    marginTop: 2,
  },

  /* Signature area */
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 18,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    borderTopStyle: 'solid',
  },
  signatureBlock: {
    width: '48%',
  },
  signatureLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#94a3b8',
    borderBottomStyle: 'solid',
    marginBottom: 4,
    height: 24,
  },
  signatureLabel: {
    fontSize: 8.5,
    color: '#64748b',
    letterSpacing: 0.5,
  },
  signatureName: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    marginBottom: 2,
  },
  panText: {
    fontSize: 8.5,
    color: '#64748b',
  },

  /* Received stamp area */
  receivedStamp: {
    width: '40%',
    alignItems: 'center',
  },
  stampBox: {
    borderWidth: 1.5,
    borderColor: '#22c55e',
    borderStyle: 'dashed',
    borderRadius: 4,
    padding: '6pt 10pt',
    alignItems: 'center',
  },
  stampText: {
    fontSize: 9,
    color: '#16a34a',
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  stampSub: {
    fontSize: 8,
    color: '#64748b',
    marginTop: 2,
  },

});

const GenerateTable = ({ table }) => {
  const dateStart = new Date(table.startDate);
  const dateEnd   = new Date(table.endDate);
  const currency  = table.currency || 'INR';
  const currSymbol = CURRENCY_SYMBOLS[currency] || currency + ' ';
  const startNum  = parseInt(table.receiptStartNumber, 10) || 1;
  const payMode   = table.paymentMode || 'Cash';

  /* Build array of month labels */
  const months = [];
  const loop = new Date(dateStart);
  while (loop <= dateEnd) {
    months.push(
      loop.toLocaleString('default', { month: 'long' }) + ' ' + loop.getFullYear()
    );
    loop.setMonth(loop.getMonth() + 1);
  }

  const receipts = months.map((month, index) => {
    const receiptNum = startNum + index;
    const paddedNum  = String(receiptNum).padStart(3, '0');

    return (
      <View style={styles.receiptContainer} key={receiptNum} wrap={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.receiptTitle}>Rent Receipt</Text>
          <View style={styles.receiptMeta}>
            <Text style={styles.receiptNumber}>Receipt No. #{paddedNum}</Text>
            <Text style={styles.receiptMonth}>{month}</Text>
          </View>
        </View>

        {/* Body */}
        <Text style={styles.bodyText}>
          Received with thanks from{' '}
          <Text style={styles.highlight}>{table.name}</Text>
          {', '}
          the sum of{' '}
          <Text style={styles.highlight}>{currSymbol}{Number(table.rent).toLocaleString('en-IN')}</Text>
          {' '}towards the rent of property located at{' '}
          <Text style={styles.highlight}>{table.address}</Text>
          {' '}for the period of{' '}
          <Text style={styles.highlight}>{month}</Text>.
        </Text>

        {/* Amount box */}
        <View style={styles.amountBox}>
          <View>
            <Text style={styles.amountLabel}>Amount Paid</Text>
            <Text style={styles.paymentMode}>via {payMode}</Text>
          </View>
          <Text style={styles.amountValue}>
            {currSymbol}{Number(table.rent).toLocaleString('en-IN')}
          </Text>
        </View>

        {/* Signature row */}
        <View style={styles.signatureRow}>
          <View style={styles.signatureBlock}>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureName}>{table.owner}</Text>
            <Text style={styles.signatureLabel}>Landlord Signature</Text>
            {table.pan ? (
              <Text style={styles.panText}>PAN: {table.pan.toUpperCase()}</Text>
            ) : null}
          </View>

          <View style={styles.receivedStamp}>
            <View style={styles.stampBox}>
              <Text style={styles.stampText}>✓ Received</Text>
              <Text style={styles.stampSub}>{month}</Text>
            </View>
          </View>
        </View>

      </View>
    );
  });

  return receipts;
};

export default GenerateTable;