/**
 * Select — styled dropdown component.
 * Props: name, title, value, handle, options (array of {value, label}), error, optional
 */
const Select = ({ name, title, value, handle, options, error, optional }) => {
  const hasError = !!error;

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {title}
        {optional && <span className="optional-badge">optional</span>}
      </label>
      <select
        className={`form-select${hasError ? ' has-error' : ''}`}
        id={name}
        name={name}
        value={value}
        onChange={handle}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
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

export default Select;
