import "../styles/preview.css";

function Preview({ data }) {
  const fullname = (data.firstName + " " + data.lastName).trim();
  const location = [data.city, data.country].filter((str) => !!str).join(", ");
  const [yearOfBirth, monthOfBirth, dayOfBirth] = data.dateOfBirth.split("-");
  return (
    <div className="preview">
      <div className="preview__personal-info">
        {!!fullname && <h1 className="preview__fullname">{fullname}</h1>}
        {!!data.jobTarget && (
          <div className="preview__job-target">{data.jobTarget}</div>
        )}
        {!!location && <div className="preview__location">{location}</div>}
      </div>
      <div className="preview__contacts">
        {!!data.phoneNumber && (
          <div className="preview__phone-number">{data.phoneNumber}</div>
        )}
        {!!data.email && <div className="preview__email">{data.email}</div>}
      </div>
    </div>
  );
}

export default Preview;
