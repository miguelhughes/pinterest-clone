import React from "react";
import PropTypes from "prop-types";
import { Board } from "./Board";
import "./board.css";

const BoardList = ({ boards, author }) => {
  return (
    <div className="board-list">
      {boards.map((b) => (
        <Board key={b.id} board={b} author={author} />
      ))}
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  author: PropTypes.string.isRequired,
};
export default BoardList;
