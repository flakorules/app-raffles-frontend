import { getPrizesService, getRaffleDataService, getRaffleListsService, getTicketsFromRaffleService } from "../services/rafflesApi.service";
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

export const startGetTickets = (alias) => {
  return async (dispatch) => {
    const data = await getTicketsFromRaffleService(alias);

    if (data.ok) {
      dispatch(getTickets(data.tickets));
    } else {
      dispatch(getTickets([]));
    }
  };
};

export const startGeRaffleLists = (alias) => {
  return async (dispatch) => {
    const data = await getRaffleListsService(alias);
    
    if (data.ok) {
      dispatch(getRaffleLists(data.rafleLists));
    } else {
      dispatch(getRaffleLists(null));
    }
  };
};

const getRaffleData = (raffleData) => ({
  type: types.viewRaffleGetMainData,
  payload: raffleData,
});

const getPrizes = (prizes) => ({
  type: types.viewRaffleGetPrizes,
  payload: prizes,
});

const getTickets = (tickets) => ({
  type: types.viewRaffleGetTickets,
  payload: tickets,
});

const getRaffleLists = (raffleLists) => ({
  type: types.viewRaffleGetRaffleLists,
  payload: raffleLists,
});

export const cleanData = () => ({
  type: types.viewRaffleCleanData, 
});
