import { types } from "../types/types";

const initialState = {
  raffleData: null,
  activePrize: null,
  prizeList: [],
  flagSaved: null,
};

export const createRaffleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.raffleFormSetRaffleData:
      return {
        ...state,
        raffleData: action.payload,
      };

    case types.raffleFormSetFlagSaved:
      return {
        ...state,
        flagSaved: action.payload,
      };

    case types.raffleFormAddPrize:
      return {
        ...state,
        activePrize: {},
        prizeList: [...state.prizeList, action.payload],
      };

    case types.raffleFormSelectPrize:
      return {
        ...state,
        activePrize: action.payload,
      };

    case types.raffleFormCleanSelectedPrize:
      return {
        ...state,
        activePrize: null,
      };

    case types.raffleFormEditPrize:
      return {
        ...state,
        prizeList: state.prizeList.map((p) =>
          p.tempId === action.payload.tempId ? action.payload : p
        ),
      };

    case types.raffleFormDeletePrize:
      return {
        ...state,
        prizeList: state.prizeList.filter(
          (p) => p.tempId !== action.payload.tempId
        ),
      };

    case types.raffleFormCleanAll:
      return initialState;

    default:
      return state;
  }
};
