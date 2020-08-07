import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DayList from "./DayList";
import DayDetails from "./DayDetails";

class Routes extends Component {
  render() {
    const getDay = (props) => {
      let name = props.match.params.name;
      let currentDay = this.props.days.find(
        (day) => day.name.toLowerCase() === name.toLowerCase()
      );
      return <DayDetails {...props} day={currentDay} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/days"
          render={() => <DayList days={this.props.days} />}
        />
        <Route exact path="/days/:name" render={getDay} />
        <Redirect to="/days" />
      </Switch>
    );
  }
}
export default Routes;
