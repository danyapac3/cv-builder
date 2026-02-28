import "../styles/preview.css";

function Preview({ data }) {
  const {
    firstName,
    lastName,
    city,
    country,
    phoneNumber,
    email,
    jobTarget,
    dateOfBirth,
  } = data.personal;

  const fullname = (firstName + " " + lastName).trim();
  const location = [city, country].filter((str) => !!str).join(", ");
  const [yearOfBirth, monthOfBirth, dayOfBirth] = dateOfBirth.split("-");

  return (
    <div className="preview">
      <div className="preview__personal-info">
        {!!fullname && <h1 className="preview__fullname">{fullname}</h1>}
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
      <div className="preview__employment-history">
        {data.employment.map((job) => {
          <div className="preview__job"></div>;
        })}
      </div>
    </div>
  );
}

export default Preview;
