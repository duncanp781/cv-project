import React, { useState } from "react";
import General from "./components/General";
import Display from "./components/Display";
import Education from "./components/Education";
import "./styles/app.css";
import Work from "./components/Work";

const App = function (props) {
  const [state, setState] = useState({
    general: {},
    education: {},
    work: {},
  });

  const save = (name, obj) => {
    if (obj !== state[name]) {
      setState({
        ...state,
        [name]: obj,
      });
    }
  };
  return (
    <div className="app">
      <header>CV Application</header>
      <div className="container">
        <div className="fields">
          <div className="section">
            <span className="title">General: </span>
            <General save={save} />
          </div>
          <div className="section">
            <span className="title">Education: </span>
            <Education save={save} />
          </div>
          <div className="section">
            <span className="title">Work: </span>
            <Work save={save} />
          </div>
        </div>
        <div className="preview">
          <Display
            general={state.general}
            education={state.education}
            work={state.work}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
