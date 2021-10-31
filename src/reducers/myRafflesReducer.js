import { types } from "../types/types";

const initialState = [];

export const myRafflesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.myRafflesGetAll:
      return action.payload;

    default:
      return state;
  }
};
