import InputGroup from "./input-group";
import { useState } from "react";

import "../styles/cv-form.css";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  jobTarget: "",
  dateOfBirth: "",
  country: "",
  city: "",
};

export default function PersonalInfoForm() {
  const [formData, setData] = useState(initialData);

  const handleChange = (name, value) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="cv-form">
      <h1 className="cv-form__title">Personal Information</h1>
      <InputGroup
        name="firstName"
        label="First Name"
        value={formData.firstName}
        handleChange={handleChange}
      />
      <InputGroup
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        handleChange={handleChange}
      />
      <InputGroup
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        handleChange={handleChange}
      />
      <InputGroup
        name="phoneNumber"
        type="tel"
        label="Phone Number"
        value={formData.phoneNumber}
        handleChange={handleChange}
      />
      <InputGroup
        name="jobTarget"
        label="Job Target"
        value={formData.jobTarget}
        handleChange={handleChange}
      />
      <InputGroup
        name="dateOfBirth"
        type="date"
        label="Date Of Birth"
        value={formData.dateOfBirth}
        handleChange={handleChange}
      />
      <InputGroup
        name="country"
        label="Country"
        value={formData.country}
        handleChange={handleChange}
      />
      <InputGroup
        name="city"
        label="City"
        value={formData.city}
        handleChange={handleChange}
      />
    </form>
  );
}
