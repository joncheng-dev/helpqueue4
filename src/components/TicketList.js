import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  return (
    <React.Fragment>
      <Ticket names="Bart and Lisa" location="Springfield, PA" issue="Fireworks don't work." />
      <Ticket names="Abe Simpson" location="Simpson residence" issue="Cat ran out the house." />
    </React.Fragment>
  );
}

export default TicketList;
