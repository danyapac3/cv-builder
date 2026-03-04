import "../styles/input-group.css";

function InputGroup({
  name,
  value,
  handleChange = () => {},
  label,
  type = "text",
}) {
  if (type === "textarea") {
    return (
      <div className="input-group">
        <label htmlFor={name}>{label}</label>
        <textarea
          onChange={(e) => handleChange(name, e.target.value)}
          id={name}
          rows="3"
          value={value}
        ></textarea>
      </div>
    );
  }

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={(e) => handleChange(name, e.target.value)}
        type={type}
        id={name}
        value={value}
      />
    </div>
  );
}

export default InputGroup;
