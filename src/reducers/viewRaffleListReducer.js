import { types } from "../types/types";

const initialState = {
  raffleData: {},
  prizes: [],
  tickets: [],
  raffleListData: {},
};

export const viewRaffleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.viewRaffleListGetRaffeListData: {
      return {
        ...state,
        raffleListData: action.payload,
      };
    }

    case types.viewRaffleListGetData:
      return {
        ...state,
        raffleData: action.payload,
      };

    case types.viewRaffleListGetPrizes:
      return {
        ...state,
        prizes: action.payload,
      };

    case types.viewRaffleListGetTickets:
      return {
        ...state,
        tickets: action.payload,
      };

    case types.viewRaffleListBookTicket:
      return {
        ...state,
        tickets: state.tickets.map((t) =>
          t._id === action.payload._id ? action.payload : t
        ),
      };

    default:
      return state;
  }
};
