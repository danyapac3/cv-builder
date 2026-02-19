import "../styles/personal-info-form.css";

import InputGroup from "./input-group";

export default function PersonalInfoForm() {
  return (
    <form className="personal-info-form cv-form">
      <h1 className="cv-form__title">Personal Information</h1>
      <InputGroup name="firstName" label="First Name" />
      <InputGroup name="lastName" label="Last Name" />
      <InputGroup name="email" type="email" label="Email" />
      <InputGroup name="phoneNumber" type="tel" label="Phone Number" />
      <InputGroup name="jobTarget" label="Job Target" />
      <InputGroup name="dateOfBirth" type="date" label="Date Of Birth" />
      <InputGroup name="country" label="Country" />
      <InputGroup name="city" label="City" />
    </form>
  );
}
