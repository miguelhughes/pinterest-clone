import React from "react";
import PropTypes from "prop-types";
import Count from "./Count";

export function Stats({ stats, selected }) {
  let items = [];

  for (const key in stats) {
    let className = selected === key ? "selected" : "";
    items.push(
      <li key={key} className={className}>
        <Stat name={key} count={stats[key]} />
      </li>
    );
  }
  return <ul className="stats">{items}</ul>;
}
Stats.propTypes = {
  stats: PropTypes.object,
  selected: PropTypes.string,
};
const Stat = ({ name, count }) => {
  return (
    <>
      <Count count={count} />
      <span>{name}</span>
    </>
  );
};
Stat.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
