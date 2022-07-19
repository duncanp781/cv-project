import React, { useState } from "react";
import TextInput from "./TextInput";

const General = (props) => {
  const [general, setGeneral] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
  });

  const handleChange = (e) => {
    setGeneral({
      ...general,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.save("general", general);
  };

  return (
    <div className="general">
      <form onSubmit={handleSubmit}>
        <TextInput name="firstName" text="First Name:" change={handleChange} />
        <TextInput name="lastName" text="Last Name:" change={handleChange} />
        <label>
          <span>Email:</span>
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          <span>Phone Number:</span>
          <input type="tel" name="tel" onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default General;
