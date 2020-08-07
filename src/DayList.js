import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DayList.css";

class DayList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center mt-3 mb-5">
          30 Days to a Better Dog!
        </h1>
        <div className="row">
          {this.props.days.map((d) => (
            <div className="Dog col-lg-4 text-center" key={d.name}>
              <img src={d.src} alt={d.name} />
              <h3 className="mt-3">
                <Link className="underline" to={`/days/${d.name}`}>
                  {d.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default DayList;
