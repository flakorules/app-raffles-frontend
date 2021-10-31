import React from "react";
import { useSelector } from "react-redux";
import { AddListsColaborativeRaffle } from "./AddListsColaborativeRaffle";
import { AddTicketsSimpleRaffle } from "./AddTicketsSimpleRaffle";

export const OtherActionsForm = () => {
  const { raffleData } = useSelector((state) => state.editRaffle);
  return (
    <>
      {raffleData.type === "colaborative" && <AddListsColaborativeRaffle />}
      {raffleData.type === "simple" && <AddTicketsSimpleRaffle />}
    </>
  );
};
