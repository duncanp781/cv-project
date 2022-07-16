import React, { Component } from "react";
import uniqid from "uniqid";

class Display extends Component {
  render() {
    let { general, education } = this.props;
    return (
      <div className="display-container">
        <HeadDisplay general={general} />
        <EducationDisplay education={education} />
      </div>
    );
  }
}

class HeadDisplay extends Component {
  render() {
    let { general } = this.props;
    return (
      <div className="head">
        <div id="head-first">
          <span id="display-name">
            {general.first_name} {general.last_name}
          </span>
        </div>

        <div id="head-second">
          <span id="display-email"> {general.email} </span>
          <span id="display-tel">{general.tel}</span>
        </div>
      </div>
    );
  }
}

class EducationDisplay extends Component {
  render() {
    let { education } = this.props;
    return (
      <div className="display-education">
        <div className = 'display-title'>Education: </div>
        {Object.keys(education).map((entry) => {
          return <SchoolDisplay key={uniqid()} school={education[entry]} />;
        })}
      </div>
    );
  }
}

class SchoolDisplay extends Component {
  render() {
    let { school } = this.props;
    return (
      <div className="display-school">
        <div className="display-school-first">
          <span className="display-school-name">{school.school}</span>
          <span className="display-school-time">
            {school.start} {school.start ? '-': ''} {school.end ? school.end : "Present"}
          </span>
        </div>
        <div className = 'display-school-second'>
          <span className = 'tab'>{school.major}{school.major && school.gpa? ', ': ''}{school.gpa? 'GPA: ' : ''}{school.gpa}</span>
        </div>
      </div>
    );
  }
}

export default Display;
