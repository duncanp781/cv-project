import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const Responsibilities = (props) => {
  let propsave = props.save;
  const [responsibilities, setResponsibilities] = useState({});

  const handleAdd = () => {
    setResponsibilities({
      ...responsibilities,
      [uniqid()]: {},
    });
  };

  const remove = (id) => {
    let temp = { ...responsibilities };
    delete temp[id];
    setResponsibilities(temp);
  };

  const handleChange = (text, id) => {
    setResponsibilities({
      ...responsibilities,
      [id]: text,
    });
  };

  useEffect(() => {
    propsave(responsibilities);
  }, [propsave, responsibilities]);

  return (
    <div className="responsibilities">
      {Object.keys(responsibilities).map((id) => {
        if (responsibilities[id] !== undefined) {
          return (
            <div className="responsibility" key={id}>
              <input
                type="text"
                onChange={(e) => handleChange(e.target.value, id)}
              />
              <button type="button" onClick={() => remove(id)}>
                Delete
              </button>
            </div>
          );
        }
        return null;
      })}
      <button type="button" onClick={handleAdd}>
        Add Responsibility
      </button>
    </div>
  );
};

export default Responsibilities;

