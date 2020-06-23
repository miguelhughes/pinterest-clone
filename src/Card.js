import React from "react";
import PropTypes from "prop-types";
import "./List.css";

export const Card = ({ card }) => {
  return (
    <div className="card">
      <Header text={card.name} />
      <AddButton />
    </div>
  );
};

const Header = ({ text }) => {
  return (
    <div className="header">
      <CardListName text={text} />
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const CardListName = ({ text }) => (
  <span className="card-name">{text}</span>
);

const AddButton = () => <div className="add-button">Add a card...</div>;
