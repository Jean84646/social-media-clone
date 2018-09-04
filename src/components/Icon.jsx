import React from "react";
import PropTypes from "prop-types";

function Icon(props){

  var picStyle = {
    height: '40',
    width: '40',
    marginTop: '5',
  }
  var boxBorder = {
    height: '50',
    width: '50',
    backgroundColor: props.backgroundColor,
    textAlign: 'center',
  }

  return (
    <div style={boxBorder}>
      <img style={picStyle} src={require("./img/profileIcon.png")} />
    </div>
  );
}

Icon.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Icon;
