import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function NavBar(){
  // var bottomBorder = (
  //   borderBottom: '1px solid grey'
  // )
  return (
    <div className="row">
      <div className="col-md-6">
        <NavLeft/>
      </div>
      <div className="col-md-6">
        <NavRight/>
      </div>
    </div>
  );
}

export default NavBar;
