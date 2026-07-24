/**
 * Button — premium styled button with loading state.
 * Props: title, action, type ('primary' | 'secondary'), loading, disabled, id
 */
const Button = ({ title, action, type, loading, disabled, id }) => {
  return (
    <button
      id={id}
      className={type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary'}
      onClick={action}
      disabled={loading || disabled}
      type={type === 'primary' ? 'submit' : 'button'}
    >
      {loading ? (
        <>
          <span className="btn-spinner" aria-hidden="true" />
          Generating PDF…
        </>
      ) : (
        <>
          {type === 'primary' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          )}
          {type === 'secondary' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 .49-3.84"/>
            </svg>
          )}
          {title}
        </>
      )}
    </button>
  );
};

export default Button;
