import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import { intitlialisePlateau } from "../../actions/plateau.actions";

class App extends Component {
  constructor(props) {
    super(props);
    const { maxX, maxY } = props.parameters;
    props.dispatch(intitlialisePlateau(maxX, maxY));
  }
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <Header />
          <Body />
          <Footer />
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
