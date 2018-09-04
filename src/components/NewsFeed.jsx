import React from "react";
import Post from "./Post";

function NewsFeed(){
  var squareStyle = {
    height: '50',
    width: '50',
  }
  var inputStyle = {
    border: '1px solid blue',
  }
  var formStyle = {
    backgroundColor: 'blue',
  }
  var bottomBorder = {
    borderBottom: '1px solid gray',
  }
  return (
    <div>
      <form style ={formStyle}>
        <img style={squareStyle} src={require("./img/square.png")} />
        <input style={inputStyle} placeholder="What's happening?"></input>
      </form>
      <div style={bottomBorder}>
        <Post
          backgroundColor='Purple'/>
      </div>
      <div style={bottomBorder}>
        <Post
          backgroundColor='Red'/>
      </div>
      <div style={bottomBorder}>
        <Post
          backgroundColor='Yellow'/>
      </div>
      <div style={bottomBorder}>
        <Post
          backgroundColor='Green'/>
      </div>
      <div>
        <Post
          backgroundColor='Blue'/>
      </div>
    </div>
  );
}

export default NewsFeed;
