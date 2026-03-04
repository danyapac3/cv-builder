import "./styles/app.css";

import ProgressTracker from "./components/progress-tracker";
import Preview from "./components/preview";

// forms
import PersonalInfoForm from "./components/forms/personal-info";
import EmploymentHistoryForm from "./components/forms/employment-history";
import EducationsForm from "./components/forms/educations";
import SkillsForm from "./components/forms/skills";
import LanguagesForm from "./components/forms/languages";
import ProfileSummaryForm from "./components/forms/profile-summary";

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
    description: "",
  },
];

const initEducations = [
  {
    id: 0,
    schoolName: "",
    degree: "",
    startDate: null,
    endDate: null,
  },
];

const initSkills = [
  {
    id: 0,
    skill: "",
    proficiency: 5,
  },
];

const initLanguages = [
  {
    id: 0,
    language: "",
    proficiency: 6,
  },
];

const initProfileSummary = "";

function App() {
  const [formIndex, setFormIndex] = useState(0);
  const [personalData, setPersonalData] = useState(initPersonalData);
  const [employmentHistoryData, setEmploymentHistoryData] = useState(
    initEmploymentHistory,
  );
  const [educations, setEducations] = useState(initEducations);
  const [skills, setSkills] = useState(initSkills);
  const [languages, setLanguages] = useState(initLanguages);
  const [profileSummary, setProfileSummary] = useState(initProfileSummary);

  const forms = [
    {
      component: PersonalInfoForm,
      data: personalData,
      updater: setPersonalData,
    },
    {
      component: EmploymentHistoryForm,
      data: employmentHistoryData,
      updater: setEmploymentHistoryData,
    },
    {
      component: EducationsForm,
      data: educations,
      updater: setEducations,
    },
    {
      component: SkillsForm,
      data: skills,
      updater: setSkills,
    },
    {
      component: LanguagesForm,
      data: languages,
      updater: setLanguages,
    },
    {
      component: ProfileSummaryForm,
      data: profileSummary,
      updater: setProfileSummary,
    },
  ];

  const data = {
    personal: personalData,
    employment: employmentHistoryData,
  };

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
        <Preview data={data} />
      </div>
    </div>
  );
}

export default App;
