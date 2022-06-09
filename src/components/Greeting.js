import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getGreeting } from "../features/greeting/greetingSlice";

class Greeting extends React.Component {
  componentDidMount() {
    this.props.fetchGreeting();
  }

  render () {
    return (
      <React.Fragment>
        <Link to="/">Index</Link>
        <h1>Greeting: {this.props.greeting.message ? this.props.greeting.message : this.props.greeting.status }</h1>
        <div></div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGreeting: () => { dispatch(getGreeting()) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
