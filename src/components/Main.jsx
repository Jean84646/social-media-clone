import React from "react";
import Profile from "./Profile";
import ProfilePic from "./ProfilePic";
import About from "./About";
import NewsFeed from "./NewsFeed";
import Friends from "./Friends";

function Main(){
  var borders = {
    border: '1px solid grey',
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div style={borders}>
            <Profile/>
            <ProfilePic/>
          </div>
          <div style={borders}>
            <About/>
          </div>
        </div>
        <div className="col-md-6" style={borders}>
          <NewsFeed/>
        </div>
        <div className="col-md-3" style={borders}>
          <Friends/>
        </div>
      </div>
    </div>
  );
}

export default Main;
