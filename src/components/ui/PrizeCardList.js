import React from "react";
import { PrizeCard } from "./PrizeCard";





export const PrizeCardList = ({ prizeList }) => {
  
  return (
    <div className="row">
      {prizeList.map((prize) => (
        <PrizeCard key={prize.tempId} prize={prize} />
      ))}
    </div>
  );
};
