import React from "react"
import { Link } from "react-router-dom";
class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Link to="/greeting">Greeting</Link>
        <h1>Index</h1>
      </React.Fragment>
    );
  }
}

export default Index
