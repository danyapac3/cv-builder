import "./styles/App.css";

import PersonalInfoForm from "./components/personal-info-form";
import EmploymentHistoryForm from "./components/employment-history-form";

import { useState } from "react";

const formComponents = [PersonalInfoForm, EmploymentHistoryForm];

function App() {
  const [formIndex, setFormIndex] = useState(0);

  const handlePrevForm = () => setFormIndex(formIndex - 1);
  const handleNextForm = () => setFormIndex(formIndex + 1);

  if (formComponents.length === 0) {
    return <div className="form-container"></div>;
  }

  const CurrentForm = formComponents[formIndex];

  return (
    <div className="form-container">
      <CurrentForm />
      <button
        disabled={formIndex <= 0}
        className="prev-form-button"
        onClick={handlePrevForm}
      >
        Back
      </button>
      <button
        disabled={formIndex >= formComponents.length - 1}
        className="next-form-button"
        onClick={handleNextForm}
      >
        Next
      </button>
    </div>
  );
}

export default App;
