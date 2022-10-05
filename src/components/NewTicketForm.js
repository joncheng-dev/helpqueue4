import React from "react";
import ReusableForm from "./ReusableForm";
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
      <ReusableForm formSubmissionHandler={handleNewTicketSubmit} buttonText="Help." />
      <br />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
