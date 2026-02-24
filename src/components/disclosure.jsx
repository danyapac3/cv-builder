import "../styles/disclosure.css";
function Disclosure({ title, children, onRemove = () => {} }) {
  return (
    <details className="disclosure">
      <summary className="disclosure__header">
        <div className="disclosure__title">{title}</div>

        <button
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
          className="disclosure__remove-button"
        >
          <svg
            className="disclosure__remove-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 15H12.5V6H13.5V16H4.5V6H5.5V15ZM14.5 5H3.5V4H14.5V5ZM11.5 3H6.5V2H11.5V3Z"
              fill="#E34848"
            />
          </svg>
        </button>

        <svg
          className="disclosure__unfold-icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
        >
          <path d="M1.92871 12.1821L9 5.11084L16.0713 12.1821L15.3643 12.8892L9 6.5249L2.63574 12.8892L1.92871 12.1821Z" />
        </svg>
      </summary>
      {children}
    </details>
  );
}

export default Disclosure;
