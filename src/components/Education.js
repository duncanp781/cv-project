import React, { useState } from "react";
import uniqid from "uniqid";
import TextInput from "./TextInput";

const Education = (props) => {
  const [schools, setSchools] = useState({});

  const handleClick = () => {
    setSchools({
      ...schools,
      [uniqid()]: {},
    });
  };

  const saveChild = (id, info) => {
    setSchools({
      ...schools,
      [id]: info,
    });
    props.save("education", schools);
  };

  const remove = (id) => {
    let temp = { ...schools };
    delete temp[id];
    setSchools(temp);
  };

  return (
    <div className="education">
      {Object.keys(schools).map((id) => {
        if (schools[id])
          return <School save={saveChild} key={id} id={id} delete={remove} />;
        return null;
      })}
      <button onClick={handleClick}>Add Education</button>
    </div>
  );
};
const School = (props) => {
  const [school, setSchool] = useState({
    school: "",
    start: "",
    end: "",
    major: "",
    gpa: "",
  });

  const handleChange = (e) => {
    setSchool({
      ...school,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.save(props.id, school);
  };

  const handleRemove = () => {
    props.delete(props.id);
  };

  return (
    <div className="school-container">
      <form onSubmit={handleSubmit}>
        <TextInput name="school" text="School:" change={handleChange} />
        <TextInput name="start" text="Start: " change={handleChange} />
        <TextInput name="end" text="End:" change={handleChange} />
        <TextInput name="major" text="Major:" change={handleChange} />
        <TextInput name="gpa" text="GPA:" change={handleChange} />
        <button type="submit">Save</button>
        <button type="button" onClick={handleRemove}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default Education;
