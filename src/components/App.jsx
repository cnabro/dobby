import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  static fetchData() {
    return "api data";
  }

  constructor(props) {
    super(props);
    let { data } = props;
    const initialData =
      typeof window !== "undefined" && window.INITIAL_STATE
        ? window.INITIAL_STATE
        : null;

    if (!data) {
      data = initialData || null;
    }

    this.state = { data };
  }

  componentWillMount() {
    const { data } = this.props;

    if (!data) {
      this.setState({ data: App.fetchData() });
    }
  }

  render() {
    const { data } = this.state;

    return <div className="App">{data}</div>;
  }
}
App.defaultProps = {
  data: ""
};

App.propTypes = {
  data: PropTypes.string
};

export default App;
