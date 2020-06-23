import React from "react";
import PropTypes from "prop-types";
export const Author = ({ name }) => {
  return <div className="author">{name}</div>;
};
Author.propTypes = {
  name: PropTypes.string.isRequired,
};
