import React, { Component } from "react";
import General from "./components/General";
import Display from "./components/Display";
import "./styles/app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {},
    };
  }

  save = (name, obj) => {
    this.setState({
      [name]: obj,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="fields">
          <span id="general-title">General: </span>
          <div class="general">
            <General save={this.save} className="general" />
          </div>
        </div>
        <div className="preview">
          <Display general={this.state.general} />
        </div>
      </div>
    );
  }
}

export default App;
