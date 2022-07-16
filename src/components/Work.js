import React, { Component } from "react";
import uniqid from "uniqid";
import Responsibilities from "./Responsibilities";

class Work extends Component {
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
      () => this.props.save("work", this.state)
    );
  };

  delete = (id) => {
    this.setState({ [id]: undefined }, () =>
      this.props.save("work", this.state)
    );
  };

  render() {
    return (
      <div className="work">
        {Object.keys(this.state).map((id) => {
          if (this.state[id])
            return (
              <Job save={this.save} key={id} id={id} delete={this.delete} />
            );
          return;
        })}
        <button onClick={this.handleClick}>Add Job</button>
      </div>
    );
  }
}

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      title: "",
      start: "",
      end: "",
      responsibilities: {},
    };
  }

  save = (id, info) => {
    this.setState(
      {
        [id]: info,
      },
      () => this.props.save("responsibilities", this.state)
    );
  };

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
    this.props.delete(this.props.id);
  };

  render() {
    return (
      <div className="job">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="company">
            <span>Company:</span>
            <input
              type="text"
              id="company"
              onChange={this.handleChange}
              value={this.state.company}
            />
          </label>
          <label htmlFor="start">
            <span>Start:</span>
            <input
              type="text"
              id="start"
              onChange={this.handleChange}
              value={this.state.start}
            />
          </label>
          <label htmlFor="end">
            <span>End:</span>
            <input
              type="text"
              id="end"
              onChange={this.handleChange}
              value={this.state.end}
            />
          </label>
          <label htmlFor="title">
            <span>Title: </span>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </label>
          <label htmlFor="responsibilities">
            <span>Responsibilities: </span>
            <Responsibilities save={this.save} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}


export default Work;
