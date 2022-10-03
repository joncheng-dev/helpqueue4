import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTicketList: [],
      selectedTicket: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket !== null) {
      this.setState({
        formVisible: false,
        selectedTicket: null,
      });
    } else {
      this.setState((prevState) => ({ formVisible: !prevState.formVisible }));
    }
  };

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter((ticket) => ticket.id === id)[0];
    this.setState({ selectedTicket: selectedTicket });
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

    if (this.state.selectedTicket !== null) {
      pageVisible = <TicketDetail ticket={this.state.selectedTicket} />;
      buttonText = "Back to Ticket List";
    } else if (this.state.formVisible) {
      pageVisible = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Back to Ticket List";
    } else {
      pageVisible = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
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
