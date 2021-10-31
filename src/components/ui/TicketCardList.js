import React from "react";
import { useSelector } from "react-redux";
import { TicketCard } from "./TicketCard";

export const TicketCardList = ({ source }) => {
  const { tickets } = useSelector((state) =>
    source === "Raffle.js" ? state.viewRaffle : state.viewRaffleList
  );

  return (
    <>
      <h3>Tickets:</h3>
      <div className="row">
        {tickets.map((ticket) => (
          <TicketCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
};
