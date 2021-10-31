import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  startGetPrizes,
  startGetRaffleData,
  startGetRaffleListData,
  startGetTicketsByList,
} from "../../actions/viewRaffleList.action";
import { RaffleMainData } from "../../components/ui/RaffleMainData";
import { TicketCardList } from "../../components/ui/TicketCardList";
import { ViewPrizeCardList } from "../../components/ui/ViewPrizeCardList";

export const RaffleList = (props) => {
  const { alias, listNumber } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetRaffleData(alias));
    dispatch(startGetRaffleListData(alias, listNumber));
    dispatch(startGetPrizes(alias));
    dispatch(startGetTicketsByList(alias, listNumber));
  }, [alias, dispatch, listNumber]);

  return (
    <>
      <RaffleMainData source="RaffleList.js" listNumber={listNumber} />
      <ViewPrizeCardList source="RaffleList.js" />
      <TicketCardList source="RaffleList.js" />
    </>
  );
};
