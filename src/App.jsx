import "./styles/app.css";

import PersonalInfoForm from "./components/personal-info-form";
import EmploymentHistoryForm from "./components/employment-history-form";
import ProgressTracker from "./components/progress-tracker";
import Preview from "./components/preview";

import { useState } from "react";

const initPersonalData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  jobTarget: "",
  dateOfBirth: "",
  country: "",
  city: "",
};

const initEmploymentHistory = [
  {
    id: 0,
    jobTitle: "",
    employer: "",
    startDate: "",
    endDate: "",
  },
];

function App() {
  const [formIndex, setFormIndex] = useState(0);
  const [personalData, setPersonalData] = useState(initPersonalData);
  const [employmentHistory, setEmploymentHistory] = useState(
    initEmploymentHistory,
  );

  const forms = [
    {
      component: PersonalInfoForm,
      data: personalData,
      updater: setPersonalData,
    },
    {
      component: EmploymentHistoryForm,
      data: employmentHistory,
      updater: setEmploymentHistory,
    },
  ];

  const handlePrevForm = () => setFormIndex(formIndex - 1);
  const handleNextForm = () => setFormIndex(formIndex + 1);

  const currentForm = forms[formIndex];
  const CurrentFormComponent = currentForm.component;

  return (
    <div className="app">
      <div className="app__form-container">
        <CurrentFormComponent
          data={currentForm.data}
          updater={currentForm.updater}
        />
        <div className="app__form-controls">
          <ProgressTracker
            numberOfPages={forms.length}
            currentPage={formIndex}
          />
          <button
            className="app__prev-form-button"
            disabled={formIndex <= 0}
            onClick={handlePrevForm}
          >
            Back
          </button>
          <button
            disabled={formIndex >= forms.length - 1}
            className="app__next-form-button"
            onClick={handleNextForm}
          >
            Next
          </button>
        </div>
      </div>
      <div className="app__preview-container">
        <Preview data={personalData} />
      </div>
    </div>
  );
}

export default App;
