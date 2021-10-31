import React from "react";
import { useSelector } from "react-redux";
import { ViewPrizeCard } from "./ViewPrizeCard";

export const ViewPrizeCardList = ({ source }) => {
  const { prizes } = useSelector((state) =>
    source === "Raffle.js" ? state.viewRaffle : state.viewRaffleList
  );

  return (
    <>
      <h3>Premios:</h3>
      <div className="row">
        {prizes.map((prize) => (
          <ViewPrizeCard key={prize._id} prize={prize} />
        ))}
      </div>
    </>
  );
};
