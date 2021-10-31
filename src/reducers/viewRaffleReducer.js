import { types } from "../types/types";

const initialState = {
  raffleData: {},
  prizes: [],
  raffleLists: [],
  tickets: [],
};

export const viewRaffleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.viewRaffleGetMainData:
      return {
        ...state,
        raffleData: action.payload,
      };

    case types.viewRaffleGetPrizes:
      return {
        ...state,
        prizes: action.payload,
      };

    case types.viewRaffleGetRaffleLists:
      return {
        ...state,
        raffleLists: action.payload,
      };

    case types.viewRaffleGetTickets:
      return {
        ...state,
        tickets: action.payload,
      };

    case types.viewRaffleBookTicket:
      return {
        ...state,
        tickets: state.tickets.map((t) =>
          t._id === action.payload._id ? action.payload : t
        ),
      };

    case types.viewRaffleCleanData:
      return initialState;

    default:
      return state;
  }
};
