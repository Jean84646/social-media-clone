import React from "react";

function ProfilePic(){
  var picStyle = {
    height: '50',
    width: '50',
  }
  var boxBorder = {
    position: 'absolute',
    top: '85',
    left: '30',
  }
  return (
    <div style={boxBorder}>
      <img style={picStyle} src={require("./img/profile_icon.jpg")} />
    </div>
  );
}

export default ProfilePic;
