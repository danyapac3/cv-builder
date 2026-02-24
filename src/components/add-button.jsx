import "../styles/add-button.css";

function AddButton({ children, onClick = () => {} }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="add-button"
    >
      <svg
        className="add-button__plus-icon"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="#666666"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.5 8.5H16V9.5H9.5V16H8.5V9.5H2V8.5H8.5V2H9.5V8.5Z" />
      </svg>

      {children}
    </button>
  );
}

export default AddButton;
