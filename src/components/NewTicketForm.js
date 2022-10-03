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
      <h3>Fill out the form to add a help ticket.</h3>
      <form onSubmit={handleNewTicketSubmit}>
        <p>Names:</p>
        <input type="text" name="names" placeholder="Name(s)" required />
        <p>Location:</p>
        <input type="text" name="location" placeholder="Location" required />
        <p>Issue:</p>
        <textarea name="issue" placeholder="Describe the problem" required />
        <br />
        <br />
        <button type="submit">Submit Ticket</button>
      </form>
      <br />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
