import React from "react";
import Plateau from "./Plateau";
const Body = () => {
  return (
    <div className="box-layout__body-content">
      <div className="box-layout__content--table">
        <table>
          <tbody id="plateau">
            <Plateau />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Body;
