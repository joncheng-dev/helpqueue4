import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <h3>{props.names}</h3>
      <h3>{props.location}</h3>
      <h3>{props.issue}</h3>
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
