import React from "react";

function Post() {
  var picStyle = {
    height: '50',
    width: '50',
  }
  return (
  <div className="row">
    <div className="col-md-2">
      <img style={picStyle} src={require("./img/profile_icon.jpg")} />
    </div>
    <div className="col-md-10">
      <h5>Lorem ipsum</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  </div>

  );
}


export default Post;
