import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DayDetails.css";

class DayDetails extends Component {
  render() {
    let { day } = this.props;
    return (
      <div className="DogDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-5">
          <div className="DogDetails-card card">
            <img className="card-img-top" src={day.src} alt={day.name} />
            <div className="card-body">
              <h2 className="card-title">{day.name}</h2>
              <h4 className="card-subtitle text-muted">{day.title}</h4>
            </div>
            <ul className="list-group list-group-flush">
              {day.facts.map((fact, i) => (
                <li className="list-group-item" key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/days" className="btn btn-info">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DayDetails;
