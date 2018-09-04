import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";

function Friends(props) {
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
      <Icon
        backgroundColor={props.backgroundColor}/>
    </div>
    <div className="col-md-9">
      <h5>Donec eu orci et</h5>
      <button style={buttonStyling}>Button</button>
    </div>
  </div>

  );
}

Friends.propTypes = {
  backgroundColor: PropTypes.string,
}
export default Friends;
