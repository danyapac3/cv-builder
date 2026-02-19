import "./styles/App.css";
import PersonalInfoForm from "./components/personal-info-form";
import { useState } from "react";

function App() {
  const [formNumber, setFormNumber] = useState(0);

  const handlePrevForm = () => setFormNumber(formNumber - 1);
  const handleNextForm = () => setFormNumber(formNumber + 1);

  return (
    <>
      <div className="form-container">
        <PersonalInfoForm />
        <button className="prev-form-button" onClick={handlePrevForm}>
          Back
        </button>
        <button className="next-form-button" onClick={handleNextForm}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
