import React from "react";
import uniqid from "uniqid";

const Display = function (props) {
  let { general, education, work } = props;
  return (
    <div className="display-container">
      <HeadDisplay general={general} />
      <EducationDisplay education={education} />
      <WorkDisplay work={work} />
    </div>
  );
};

const HeadDisplay = function(props) {
    let { general } = props;
    return (
      <div className="head">
        <div id="head-first">
          <span id="display-name">
            {general.firstName} {general.lastName}
          </span>
        </div>

        <div id="head-second">
          <span id="display-email"> {general.email} </span>
          <span id="display-tel">{general.tel}</span>
        </div>
      </div>
    );
  }


const EducationDisplay = function(props){
   
    let { education } = props;

    return (
      <div className="display-education">
        {Object.keys(education).length !== 0 && (
          <div className="display-title">{"Education: "}</div>
        )}
        {Object.keys(education).map((entry) => {
          return <SchoolDisplay key={uniqid()} school={education[entry]} />;
        })}
      </div>
    );
  }


const SchoolDisplay = function(props){
    let { school } = props;
    return (
      <div className="display-school">
        <div className="display-school-first">
          <span className="display-school-name">{school.school}</span>
          <span className="display-school-time">
            {school.start} {school.start ? "-" : ""}{" "}
            {school.end ? school.end : "Present"}
          </span>
        </div>
        <div className="display-school-second">
          <span className="tab">
            {school.major}
            {school.major && school.gpa ? ", " : ""}
            {school.gpa ? "GPA: " : ""}
            {school.gpa}
          </span>
        </div>
      </div>
    );
  }


const WorkDisplay = function(props) {
 
    let { work } = props;
    return (
      <div className="display-work">
        {Object.keys(work).length !== 0 && (
          <div className="display-title">{"Work Experience: "}</div>
        )}
        {Object.keys(work).map((entry) => {
          return <JobDisplay key={uniqid()} job={work[entry]} />;
        })}
      </div>
    );
  
}

const JobDisplay = function(props) {
    let { job } = props; 
    
    return (
      <div className="display-job">
        <div className="display-job-first">
          <span className="display-job-left">
            <span className="display-job-company">{job.company}</span>
            <span className="display-job-title"> {job.title}</span>
          </span>
        </div>
        <div className="display-job-second">
          <span className="display-job-time">
            {job.start} {job.start ? "-" : ""} {job.end ? job.end : "Present"}
          </span>
          {job.responsibilities &&
            Object.keys(job.responsibilities).length !== 0 && (
              <ul>
                {Object.keys(job.responsibilities).map((entry) => {
                  return <li key={uniqid()}>{job.responsibilities[entry]}</li>;
                })}
              </ul>
            )}
        </div>
      </div>
    );
  }


export default Display;
