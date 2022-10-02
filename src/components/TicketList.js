import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const mainTicketList = [
    {
      names: "Bart and Lisa",
      location: "Springfield, PA",
      issue: "Fireworks stuck on the roof!",
    },
    {
      names: "Abe Simpson",
      location: "Simpson residence",
      issue: "Cat ran away!",
    },
    {
      names: "Patty and Selma",
      location: "Moe's Tavern",
      issue: "New no smoking law",
    },
  ];

  return (
    <React.Fragment>
      {mainTicketList.map((ticket, index) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} key={index} />
      ))}
      ;
    </React.Fragment>
  );
}

export default TicketList;
