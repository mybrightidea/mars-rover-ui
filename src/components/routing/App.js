import React, { Component } from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const App = () => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
