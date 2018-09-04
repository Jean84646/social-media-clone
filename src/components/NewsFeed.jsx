import React from "react";
import Posts from "./Posts";

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

  return (
    <div>
      <form style ={formStyle}>
        <img style={squareStyle} src={require("./img/square.png")} />
        <input style={inputStyle} placeholder="What's happening?"></input>
      </form>
      <Posts/>
    </div>
  );
}

export default NewsFeed;
