import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p>Names:</p>
        <input type="text" name="names" placeholder="Name(s)" required />
        <p>Location:</p>
        <input type="text" name="location" placeholder="Location" required />
        <p>Issue:</p>
        <textarea name="issue" placeholder="Describe the problem" required />
        <br />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
