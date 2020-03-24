import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import { intitlialisePlateau } from "../../actions/plateau.actions";
import { setParameters } from "../../actions/parameters.actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateParameters({});
  }

  updateParameters = parameter => {
    this.props.dispatch(
      setParameters({ ...this.props.parameters, ...parameter })
    );
  };

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <Header updateParameters={this.updateParameters} />
          <Body />
          <Footer updateParameters={this.updateParameters} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parameters: state.parameters,
  plateau: state.plateau
});

export default connect(mapStateToProps)(App);
