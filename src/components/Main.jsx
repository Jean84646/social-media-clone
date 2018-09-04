import React from "react";
import Profile from "./Profile";
import ProfilePic from "./ProfilePic";
import About from "./About";
import NewsFeed from "./NewsFeed";
import FriendList from "./FriendList";

function Main(){
  var borders = {
    border: '1px solid grey',
  }
  var container = {
    margin: '25',
  }
  return (
    <div style={container}>
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
        <div className="col-md-6">
          <div style={borders}>
            <NewsFeed/>
          </div>
        </div>
        <div className="col-md-3">
          <div style={borders}>
            <FriendList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
