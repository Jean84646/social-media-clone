import React from "react";

function NavRight() {
  var navRightStyles = {
    float: 'right',
    color: 'grey',
    fontSize: '1.25em',
  }
  var textField = {
    borderColor: 'blue',
    borderRadius: '25',
    borderWidth: 'thin',
    padding: '5',
    margin: '7',
    marginLeft: '30'
  }
  return (
    <div style={navRightStyles}>
      <form>
        <input style={textField} placeholder='Search'></input>
        <input style={textField} placeholder="Tweet"></input>
      </form>
    </div>
  );
}

export default NavRight;
