import "./styles/app.css";

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
    <div className="app">
      <div className="app__form-container">
        <CurrentForm />
        <div className="app__form-controls">
          <button
            className="app__prev-form-button"
            disabled={formIndex <= 0}
            onClick={handlePrevForm}
          >
            Back
          </button>
          <button
            disabled={formIndex >= formComponents.length - 1}
            className="app__next-form-button"
            onClick={handleNextForm}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
