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
    <section className="preview-section">
      {!!fullname && <h2 className="preview-section__heading">{fullname}</h2>}
      {!!jobTarget && (
        <div className="preview-section__bold-text">{jobTarget}</div>
      )}

      <div className="preview-section__row">
        {!!location && <div>{location}</div>}
        {!!dateOfBirth && (
          <div>
            {dayOfBirth}/{monthOfBirth}/{yearOfBirth}
          </div>
        )}
      </div>

      <div className="preview-section__row">
        {!!phoneNumber && <div>{phoneNumber}</div>}
        {!!email && <div>{email}</div>}
      </div>
    </section>
  );
}

function EmploymentHistorySection({ jobs }) {
  return (
    <section className="preview__section">
      <h2 className="preview__section-heading">Employment History</h2>
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
