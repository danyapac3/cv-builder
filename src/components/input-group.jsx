import "../styles/input-group.css";

function InputGroup({
  name,
  value,
  handleChange = () => {},
  label,
  type = "text",
}) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label} :</label>
      <input
        onChange={(e) => handleChange(name, e.target.value)}
        type={type}
        id={name}
        name={name}
        value={value}
      />
    </div>
  );
}

export default InputGroup;
