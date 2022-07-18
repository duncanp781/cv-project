import React, { Component } from "react";
import General from "./components/General";
import Display from "./components/Display";
import Education from "./components/Education";
import "./styles/app.css";
import Work from "./components/Work";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {},
      education: {},
      work: {},
    };
  }

  save = (name, obj) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });
    this.setState({
      [name]: obj,
    });
  };

  render() {
    return (
      <div class="app">
        <header>CV Application</header>
        <div className="container">
        
          <div className="fields">
            <div class="section">
              <span className="title">General: </span>
              <General save={this.save} />
            </div>
            <div class="section">
              <span className="title">Education: </span>
              <Education save={this.save} />
            </div>
            <div class="section">
              <span className="title">Work: </span>
              <Work save={this.save} />
            </div>
          </div>
          <div className="preview">
            <Display
              general={this.state.general}
              education={this.state.education}
              work={this.state.work}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
