import { types } from "../types/types";

const initialState = {
  tickets: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cartAddTicket:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };

    case types.cartRemoveTicket:
      return {
        ...state,
        tickets: state.tickets.filter((t) => t._id !== action.payload._id),
      };

    case types.cartEditTicketData:
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
