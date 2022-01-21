const Input = props => {
    //console.log(props.value);
    return (
      <div className="form-group align-items-center">
        <label htmlFor={props.name} className="form-label-sm">
          {props.title}
        </label>
        <input
          className="form-control form-control-sm"
          id={props.name}
          name={props.name}
          type={props.inputtype}
          value={props.value}
          onChange={props.handle}
          placeholder={props.placeholder} 
          {...props}
        />
      </div>
    );
  };
  
  export default Input;
  