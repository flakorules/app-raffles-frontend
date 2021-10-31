import React from "react";
import { useSelector } from "react-redux";
import { ViewRaffleListCard } from "./ViewRaffleListCard";

export const ViewRaffleList = () => {
  const { raffleLists } = useSelector((state) => state.viewRaffle);

  return (
    <>
      <h3>Listas</h3>
      <div className="row">
        {raffleLists.map((raffleList) => (
          <ViewRaffleListCard key={raffleList._id} raffleList={raffleList} />
        ))}
        
      </div>
    </>
  );
};
