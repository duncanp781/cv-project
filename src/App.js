import React, { Component } from "react";
import General from "./components/General";
import Display from "./components/Display";
import Education from "./components/Education";
import "./styles/app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {},
      education: {},
    };
  }

  save = (name, obj) => {
    Object.keys(obj).forEach(key => {
        if (obj[key] === undefined) {
          delete obj[key]
        }
         
    });
    this.setState({
      [name]: obj} );
  };

  render() {
    return (
      <div className="container">
        <div className="fields">
          <span className = 'title'>General: </span>
          <General save={this.save}  />
          <span className = 'title'>Education: </span>
          <Education save = {this.save}/>
        </div>
        <div className="preview">
          <Display general={this.state.general} education = {this.state.education} />
        </div>
      </div>
    );
  }
}

export default App;
