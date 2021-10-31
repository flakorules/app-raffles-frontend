import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanData,
  startGeRaffleLists,
  startGetPrizes,
  startGetRaffleData,
  startGetTickets,
} from "../../actions/viewRaffle.action";
import { RaffleMainData } from "../../components/ui/RaffleMainData";
import { TicketCardList } from "../../components/ui/TicketCardList";
import { ViewPrizeCardList } from "../../components/ui/ViewPrizeCardList";
import { ViewRaffleList } from "../../components/ui/ViewRaffleList";

export const Raffle = (props) => {
  const dispatch = useDispatch();
  const alias = props.match.params.alias;
  const { raffleData } = useSelector((state) => state.viewRaffle);

  useEffect(() => {
    dispatch(startGetRaffleData(alias));
    dispatch(startGetPrizes(alias));
  }, [alias, dispatch]);

  useEffect(() => {
    if (raffleData.type === "colaborative") {
      dispatch(startGeRaffleLists(alias));
    } else if (raffleData.type === "simple") {
      dispatch(startGetTickets(alias));
    }
  }, [raffleData.type]);

  useEffect(() => {
    return () => {
      dispatch(cleanData());
    };
  }, []);

  return (
    <>
      {raffleData ? (
        <>
          <RaffleMainData source="Raffle.js" />
          <ViewPrizeCardList source="Raffle.js" />
          {raffleData.type === "colaborative" && <ViewRaffleList />}
          {raffleData.type === "simple" && (
            <TicketCardList source="Raffle.js" />
          )}
        </>
      ) : (
        <div class="alert alert-warning" role="alert">
          Esta rifa no existe
        </div>
      )}
    </>
  );
};
