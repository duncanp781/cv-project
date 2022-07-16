import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = (e) => {
    this.setState({
      [uniqid()]: {},
    });
  };

  save = (id, info) => {
    this.setState(
      {
        [id]: info,
      },
      () => this.props.save("education", this.state)
    );
  };

  delete = (id) => {
    this.setState({[id] : undefined}, () => this.props.save("education", this.state));
  }

  render() {
    return (
      <div className="education">
        {Object.keys(this.state).map((id) => {
          if (this.state[id]) return <School save={this.save} key={id} id={id} delete = {this.delete}/>;
          return;
        })}
        <button onClick={this.handleClick}>Add Education</button>
      </div>
    );
  }
}

class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "",
      start: "",
      end: "",
      major: "",
      gpa: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.save(this.props.id, this.state);
  };

  handleDelete = () => {
    this.props.delete(this.props.id)
  }

  render() {
    return (
      <div className="school">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor = 'school'>
            <span>School:</span>
            <input
              type="text"
              id="school"
              onChange={this.handleChange}
              value={this.state.school}
            />
          </label>
          <label htmlFor = 'start'>
            <span>Start:</span>
            <input
              type="text"
              id="start"
              onChange={this.handleChange}
              value={this.state.start}
            />
          </label>
          <label htmlFor = 'end'>
            <span>End:</span>
            <input
              type="text"
              id="end"
              onChange={this.handleChange}
              value={this.state.end}
            />
          </label>
          <label htmlFor = 'major'>
            <span>Major:</span>
            <input
              type="text"
              id="major"
              onChange={this.handleChange}
              value={this.state.major}
            />
          </label>
          <label htmlFor = 'gpa'>
            <span>GPA: </span>
            <input
              type="text"
              id="gpa"
              onChange={this.handleChange}
              value={this.state.gpa}
            />
          </label>
          <button type="submit">Save</button>
          <button type = "button" onClick = {this.handleDelete}>Delete</button>
        </form>
      </div>
    );
  }
}

export default Education;
