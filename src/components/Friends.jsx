import React from "react";

function Friends() {
  var picStyle = {
    height: '50',
    width: '50',
  }
  var friendsStyling = {
    margin: '5',
    marginBottom: '10',
  }
  var buttonStyling = {
    backgroundColor: 'blue',
    color: '#FFF',
    borderStyle: 'none',
    marginLeft: '20',
    paddingLeft: '20',
    paddingRight: '20',
  }


  return (
  <div className="row" style={friendsStyling}>
    <div className="col-md-2">
      <img style={picStyle} src={require("./img/profile_icon.jpg")} />
    </div>
    <div className="col-md-9">
      <h5>Donec eu orci et</h5>
      <button style={buttonStyling}>Button</button>
    </div>
  </div>

  );
}


export default Friends;
