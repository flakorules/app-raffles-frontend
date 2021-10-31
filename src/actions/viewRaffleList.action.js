import {
  getListByAliasAndListNumberService,
  getPrizesService,
  getRaffleDataService,
  getTicketsFromRaffleListService,
} from "../services/rafflesApi.service";
import { types } from "../types/types";

export const startGetRaffleData = (alias) => {
  return async (dispatch) => {
    const data = await getRaffleDataService(alias);

    if (data.ok) {
      dispatch(getRaffleData(data.raffle));
    } else {
      dispatch(getRaffleData(null));
    }
  };
};

export const startGetRaffleListData = (alias, listNumber) => {
  return async (dispatch) => {
    const data = await getListByAliasAndListNumberService(alias, listNumber);

    if (data.ok) {
      dispatch(getRaffleListData(data.raffleList));
    } else {
      dispatch(getRaffleListData({}));
    }
  };
};

export const startGetTicketsByList = (alias, listNumber) => {
  return async (dispatch) => {
    const data = await getTicketsFromRaffleListService(alias, listNumber);

    console.log("startGetTicketsByList", data);

    if (data.ok) {
      dispatch(getTicketsByList(data.tickets));
    } else {
      dispatch(getTicketsByList([]));
    }
  };
};

export const startGetPrizes = (alias) => {
  return async (dispatch) => {
    const data = await getPrizesService(alias);

    if (data.ok) {
      dispatch(getPrizes(data.prizes));
    } else {
      dispatch(getPrizes(null));
    }
  };
};

const getRaffleData = (raffleData) => ({
  type: types.viewRaffleListGetData,
  payload: raffleData,
});

const getRaffleListData = (raffleList) => ({
  type: types.viewRaffleListGetRaffeListData,
  payload: raffleList,
});

const getPrizes = (prizes) => ({
  type: types.viewRaffleListGetPrizes,
  payload: prizes,
});

const getTicketsByList = (tickets) => ({
  type: types.viewRaffleListGetTickets,
  payload: tickets,
});
