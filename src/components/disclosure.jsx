import "../styles/disclosure.css";
function Disclosure({ title, children }) {
  return (
    <details className="disclosure">
      <summary className="disclosure__title">{title}</summary>
      {children}
    </details>
  );
}

export default Disclosure;
