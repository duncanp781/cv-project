import React, { Component } from "react";


class Display extends Component{

  render() {
    let {general} = this.props;
    return (<div className = 'display-container'>
      <div>
        <span id = 'name'> {general.first_name} {general.last_name}</span>
      </div>
    </div>)
  }
}

export default Display