/**
 * TextArea — styled textarea with validation feedback.
 * Props: name, title, value, placeholder, handle, rows, error
 */
const TextArea = ({ name, title, value, placeholder, handle, rows, error }) => {
  const hasError = !!error;

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{title}</label>
      <textarea
        className={`form-textarea${hasError ? ' has-error' : ''}`}
        id={name}
        name={name}
        rows={rows || 3}
        value={value}
        onChange={handle}
        placeholder={placeholder}
      />
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

export default TextArea;