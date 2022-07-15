import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      title: "",
      email: "",
      tel: "",
      saved_state: {
        first_name: "",
        last_name: "",
        title: "",
        email: "",
        tel: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      saved_state: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        title: this.state.title,
        email: this.state.email,
        tel: this.state.tel,
      },
      first_name: "",
      last_name: "",
      title: "",
      email: "",
      tel: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              id="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              id="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </label>
          <button type = 'submit'>Save</button>
        </form>
      </div>
    );
  }
}

export default General;
