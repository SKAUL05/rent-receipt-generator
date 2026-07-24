/**
 * Input — styled text/number/date input with validation feedback.
 * Props: inputtype, name, title, value, placeholder, handle, error, optional
 */
const Input = ({ inputtype, name, title, value, placeholder, handle, error, optional }) => {
  const hasValue = value !== '' && value !== undefined && value !== null;
  const hasError = !!error;
  const hasSuccess = hasValue && !hasError;

  const inputClass = [
    'form-input',
    hasError   ? 'has-error'   : '',
    hasSuccess ? 'has-success' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {title}
        {optional && <span className="optional-badge">optional</span>}
      </label>
      <div className="input-wrapper">
        <input
          className={inputClass}
          id={name}
          name={name}
          type={inputtype}
          value={value}
          onChange={handle}
          placeholder={placeholder}
          autoComplete="off"
        />
        {hasError && (
          <span className="input-icon error" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </span>
        )}
        {hasSuccess && !hasError && (
          <span className="input-icon success" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
        )}
      </div>
      {hasError && (
        <p className="field-message error" role="alert">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;