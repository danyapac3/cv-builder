import "../styles/preview.css";

function PersonalDataSection({ personalData }) {
  const {
    firstName,
    lastName,
    city,
    country,
    phoneNumber,
    email,
    jobTarget,
    dateOfBirth,
  } = personalData;

  const fullname = (firstName + " " + lastName).trim();
  const location = [city, country].filter((str) => !!str).join(", ");
  const [yearOfBirth, monthOfBirth, dayOfBirth] = dateOfBirth.split("-");

  return (
    <div>
      <div className="preview__section">
        {!!fullname && <h2 className="preview__section-header">{fullname}</h2>}
        {!!jobTarget && <div className="preview__job-target">{jobTarget}</div>}
        {!!location && <div className="preview__location">{location}</div>}
        {!!dateOfBirth && (
          <div className="preview__date-of-birth">
            {dayOfBirth}/{monthOfBirth}/{yearOfBirth}
          </div>
        )}
      </div>
      <div className="preview__contacts">
        {!!phoneNumber && (
          <div className="preview__phone-number">{phoneNumber}</div>
        )}
        {!!email && <div className="preview__email">{email}</div>}
      </div>
    </div>
  );
}

function EmploymentHistorySection({ jobs }) {
  return (
    <section className="preview__section">
      <h2 className="preview__section-header">Employment History</h2>
    </section>
  );
}

function Preview({ data }) {
  return (
    <div className="preview">
      <PersonalDataSection personalData={data.personal} />
      {data.employment.length > 0 && (
        <EmploymentHistorySection jobs={data.employment} />
      )}
    </div>
  );
}

export default Preview;
