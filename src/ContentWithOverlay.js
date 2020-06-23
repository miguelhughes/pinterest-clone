import React from "react";
import PropTypes from "prop-types";
export const ContentWithOverlay = ({ mainContent, overlayedContent }) => {
  return (
    <div className="content-with-overlay">
      {mainContent}
      <Overlay>{overlayedContent}</Overlay>
    </div>
  );
};
ContentWithOverlay.propTypes = {
  mainContent: PropTypes.element,
  overlayedContent: PropTypes.element,
};
const Overlay = ({ children }) => (
  <div className="overlay-bottom-left">{children}</div>
);
