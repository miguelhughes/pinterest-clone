import React from "react";
import PropTypes from "prop-types";
import { Author } from "./Author";
import Avatar from "react-avatar";
import { Stats } from "./Stats";

const Header = ({ user }) => {
  return (
    <div className="header">
      <Avatar name={user.name} round={true} size="48" />
      <Author name={user.name} />
      <Stats stats={user.stats} selected="boards" />
    </div>
  );
};
Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};
export default Header;
