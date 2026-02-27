import "../styles/input-group.css";
import InputGroup from "./input-group";
import Disclosure from "./disclosure";
import AddButton from "./add-button";

const createJob = (() => {
  let count = 0;

  return () => ({
    id: String(count++),
    jobTitle: "",
    employer: "",
    startDate: "",
    endDate: "",
  });
})();

function EmploymentHistoryForm({ data: jobs, updater: setJobs }) {
  const updateJob = (id, propertyName, value) => {
    setJobs(
      jobs.map((job) => {
        if (job.id !== id) {
          return job;
        }

        return { ...job, [propertyName]: value };
      }),
    );
  };

  const handleAddNewJob = () => {
    setJobs([...jobs, createJob()]);
  };

  const handleRemoveJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <form className="cv-form">
      <h1 className="cv-form__title">Employment History</h1>
      {jobs.map((job) => {
        return (
          <Disclosure
            key={job.id}
            title="Front End Developer"
            onRemove={() => handleRemoveJob(job.id)}
          >
            <div className="cv-form__content-grid">
              <InputGroup
                name="jobTitle"
                label="Job Title"
                value={job.jobTitle}
                handleChange={(name, value) => updateJob(job.id, name, value)}
              />
              <InputGroup
                name="employer"
                label="Employer"
                value={job.employer}
                handleChange={(name, value) => updateJob(job.id, name, value)}
              />
              <InputGroup
                name="startDate"
                label="Start Date"
                value={job.startDate}
                type="date"
                handleChange={(name, value) => updateJob(job.id, name, value)}
              />
              <InputGroup
                name="endDate"
                label="End Date"
                value={job.endDate}
                type="date"
                handleChange={(name, value) => updateJob(job.id, name, value)}
              />
            </div>
          </Disclosure>
        );
      })}
      <AddButton onClick={handleAddNewJob}>Add new employment</AddButton>
    </form>
  );
}

export default EmploymentHistoryForm;
