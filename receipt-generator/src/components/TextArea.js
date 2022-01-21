const TextArea = props => (
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control form-control-sm"
        name={props.name}
        rows={props.rows}
        cols={props.cols}
        value={props.value}
        onChange={props.handle}
        placeholder={props.placeholder}
      />
    </div>
  );
  
  export default TextArea;
  