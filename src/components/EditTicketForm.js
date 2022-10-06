import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  return (
    <React.Fragment>
      <ReusableForm buttonText="Update Ticket" />
    </React.Fragment>
  );
}

// formSubmissionHandler={ }

EditTicketForm.propTypes = {};

export default EditTicketForm;
