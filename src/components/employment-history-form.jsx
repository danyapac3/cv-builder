import InputGroup from "./input-group";

function EmploymentHistoryForm() {
  return (
    <form className="cv-form">
      <h1 className="cv-form__title">Personal Information</h1>
      <InputGroup
        name="jobTitle"
        label="Job Title"
        value=""
        handleChange={() => {}}
      />
      <InputGroup
        name="employer"
        label="Employer"
        value=""
        handleChange={() => {}}
      />
      <InputGroup
        name="startDate"
        label="Start Date"
        value=""
        type="date"
        handleChange={() => {}}
      />
      <InputGroup
        name="endDate"
        label="End Date"
        value=""
        type="date"
        handleChange={() => {}}
      />
    </form>
  );
}

export default EmploymentHistoryForm;
