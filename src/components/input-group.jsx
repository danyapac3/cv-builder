import "../styles/input-group.css";

function InputGroup({ name, onChange = () => {}, label, type = "text" }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label} :</label>
      <input onChange={onChange} type={type} id={name} name={name}></input>
    </div>
  );
}

export default InputGroup;
