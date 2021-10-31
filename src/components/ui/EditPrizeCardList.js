import React from "react";
import { EditPrizeCard } from "./EditPrizeCard";
import { useSelector } from "react-redux";

export const EditPrizeCardList = () => {
  const { prizes } = useSelector((state) => state.editRaffle);

  return (
    <div className="row">
      {prizes.map((prize) => (
        <EditPrizeCard key={prize._id} prize={prize} />
      ))}
    </div>
  );
};
