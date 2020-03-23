import React, { Component } from "react";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="box-layout__content">
        <div className="box-layout__content--table">
          <table>
            <tbody id="plateau"></tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Body;
