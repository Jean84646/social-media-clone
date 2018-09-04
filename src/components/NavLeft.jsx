import React from "react";

function NavLeft(){
  var navLeftStyles = {
    color: 'grey',
    fontSize: '1.25em',
    border: 'solid',
    borderWidth: 'thin',
    padding: '10',
    listStyleType: 'none',
    display: 'inline-block'
  }
  return (
    <div>
      <ul>
        <li style={navLeftStyles}>Home</li>
        <li style={navLeftStyles}>Notifications</li>
        <li style={navLeftStyles}>Messages</li>
      </ul>
    </div>
  );
}

export default NavLeft;
