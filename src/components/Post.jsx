import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";

function Post(props) {
  var picStyle = {
    height: '50',
    width: '50',
  }
  return (
  <div className="row">
    <div className="col-md-2">
      <Icon
        backgroundColor={props.backgroundColor}/>
    </div>
    <div className="col-md-10">
      <h5>Lorem ipsum</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  </div>

  );
}

Post.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Post;
