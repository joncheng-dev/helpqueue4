import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewTicketForm(props) {
  function handleNewTicketSubmit(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h3>This is a form.</h3>
      <form onSubmit={handleNewTicketSubmit}>
        <input type="text" name="names" placeholder="Name(s)" />
        <input type="text" name="location" placeholder="Location" />
        <textarea name="issue" placeholder="Describe the problem" />
        <button type="submit">Submit Ticket</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
