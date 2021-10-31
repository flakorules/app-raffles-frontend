import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

export const RaffleMainData = ({ source, listNumber }) => {
  const { raffleData } = useSelector((state) =>
    source === "Raffle.js" ? state.viewRaffle : state.viewRaffleList
  );

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="d-flex justify-content-center">{raffleData.title}</h2>
          {listNumber && (
            <h2 className="d-flex justify-content-center">Lista N°: {listNumber}</h2>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h3 className="d-flex justify-content-center">
            {/* Sorteo: {format(new Date(raffleData.drawDate), "dd-MM-yyyy")} */}
          </h3>
        </div>
        <div className="col-6">
          <h3 className="d-flex justify-content-center">
            Valor: ${raffleData.pricePerTicket}
          </h3>
        </div>
      </div>
      <p>{raffleData.description}</p>
    </>
  );
};
