import React from "react";
import PropTypes from "prop-types";
import { Author } from "./Author";
import Count from "./Count";
import { ContentWithOverlay } from "./ContentWithOverlay";
import "@fortawesome/fontawesome-free/css/all.min.css"; //this is not the best way to use font awesome. there's a react component now, but using this way for similarity with the tutorial.


export const Board = ({ board, author }) => {
  return (
    <div className="board">
      <BoardName text={board.name} />
      <Author name={author} />
      <MainImage url={board.images[0]} pinCount={board.pinCount} />
      {board.images.splice(1).map((url) => (
        <PinImage key={url} url={url} />
      ))}
      <FollowButton />
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    pinCount: PropTypes.number.isRequired,
  }).isRequired,
  author: PropTypes.string.isRequired,
};

const MainImage = ({ url, pinCount }) => {
  const main = <PinImage url={url} isMain={true} />;
  const count = (
    <>
      <i className="fa fa-thumbtack"></i>
      &nbsp;
      <Count count={pinCount} />
    </>
  );
  return <ContentWithOverlay mainContent={main} overlayedContent={count} />;
};

const PinImage = ({ url, isMain }) => {
  return <img src={url} className={isMain && "main"} alt="" />;
};

PinImage.propTypes = {
  url: PropTypes.string.isRequired,
  isMain: PropTypes.bool,
};
const BoardName = ({ text }) => <span className="board-name">{text}</span>;

const FollowButton = () => <div className="follow-button">follow</div>;
