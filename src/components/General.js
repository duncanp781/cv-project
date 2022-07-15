import React, { Component } from "react";


class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      tel: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.save('general', this.state);

  };

  render() {
    return (
      <div>
        
        <form onSubmit = {this.handleSubmit}>
          <label>
            <span>First Name:</span>
            <input
              type="text"
              id="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </label>
          <label>
            <span>Last Name:</span>
            <input
              type="text"
              id="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="text"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <label>
            <span>Phone Number:</span>
            <input
              type="tel"
              id="tel"
              onChange={this.handleChange}
              value={this.state.tel}
            />
          </label>
          <button type = 'submit'>Save</button>
        </form>
      </div>
    );
  }
}

export default General;
