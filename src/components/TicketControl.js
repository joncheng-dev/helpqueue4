import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTicketList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ formVisible: !prevState.formVisible }));
  };

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      formVisible: false,
      mainTicketList: newMainTicketList,
    });
  };

  render() {
    let pageVisible = null;
    let buttonText = null;

    if (this.state.formVisible) {
      pageVisible = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Back to Ticket List";
    } else {
      pageVisible = <TicketList ticketList={this.state.mainTicketList} />;
      buttonText = "Add New Help Ticket";
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
