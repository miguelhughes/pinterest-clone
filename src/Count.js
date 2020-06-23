import React from "react";
import PropTypes from "prop-types";

function Count({ count }) {
  let unit = "";
  if (count > Math.pow(10, 6)) {
    count = count / Math.pow(10, 6);
    unit = "M";
  } else if (count > 1000) {
    count /= 1000;
    unit = "k";
  }
  if (unit) {
    count = Math.floor(count * 10) / 10;
  }

  if (count > 0) {
    return (
      <span className="count">
        {count}
        {unit}
      </span>
    );
  } else {
    return null;
  }
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Count;
