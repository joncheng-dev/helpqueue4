import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ formVisible: !prevState.formVisible }));
  };

  render() {
    let pageVisible = null;
    let buttonText = null;

    if (this.state.formVisible) {
      pageVisible = <NewTicketForm />;
      buttonText = "Back to Ticket List";
    } else {
      pageVisible = <TicketList />;
      buttonText = "Submit New Help Ticket";
    }

    return (
      <React.Fragment>
        {pageVisible}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
