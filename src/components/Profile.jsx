import React from "react";

function Profile(){
  var blueBackground = {
    backgroundColor: 'blue',
    height: '115'
  }
  var profileName = {
    marginLeft: '90'
  }
  var profileButtons = {
    padding: '10',
    listStyleType: 'none',
    display: 'inline-block',
    fontSize: '11'
  }
  return (
    <div>
      <div style={blueBackground}></div>
      <div>
        <div className="row" style={profileName}>
          <h5>Kellie A. Corrigan</h5>
        </div>
        <div className="row">
          <ul>
            <li style={profileButtons}>TWEETS</li>
            <li style={profileButtons}>FOLLOWING</li>
            <li style={profileButtons}>FOLLOWERS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
