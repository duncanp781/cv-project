import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Responsibilities from "./Responsibilities";
import TextInput from "./TextInput";

const Work = (props) => {
  let { save } = props;
  const [jobs, setJobs] = useState({});

  const handleClick = () => {
    setJobs({
      ...jobs,
      [uniqid()]: {},
    });
  };

  const remove = (id) => {
    let temp = { ...jobs };
    delete temp[id];
    setJobs(temp);
  };

  const saveChild = (id, info) => {
    setJobs({
      ...jobs,
      [id]: info,
    });
  };

  useEffect(() => {
    save("work", jobs);
  }, [save, jobs]);

  return (
    <div className="work">
      {Object.keys(jobs).map((id) => {
        if (jobs[id])
          return <Job save={saveChild} key={id} id={id} remove={remove} />;
        return null;
      })}
      <button onClick={handleClick}>Add Job</button>
    </div>
  );
};

const Job = (props) => {
  let { remove, id, save } = props;
  const [state, setState] = useState({
    company: "",
    title: "",
    start: "",
    end: "",
    responsibilities: {},
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const saveChild = (info) => {
    if (state.responsibilities !== info) {
      setState({
        ...state,
        responsibilities: info,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save(id, state);
  };

  return (
    <div className="job">
      <form onSubmit={handleSubmit}>
        <TextInput name="company" text="Company:" change={handleChange} />
        <TextInput name="start" text="Start:" change={handleChange} />
        <TextInput name="end" text="End:" change={handleChange} />
        <TextInput name="job-title" text="Title:" change={handleChange} />
        <label htmlFor="responsibilities">
          <span>Responsibilities: </span>
          <Responsibilities save={saveChild} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={() => remove(id)}>
          Delete
        </button>
      </form>
    </div>
  );
};



export default Work;
