import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <h2>{props.names}</h2>
      <h3>{props.location}</h3>
      <h3>
        <em>{props.issue}</em>
      </h3>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
};

export default Ticket;
