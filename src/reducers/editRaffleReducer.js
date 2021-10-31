import { types } from "../types/types";

const initialState = {
  raffleData: {},
  prizes: [],
  selectedPrize: {},
  raffleLists: [],
};

export const editRaffleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.editRaffleGetData:
      return {
        ...state,
        raffleData: action.payload,
      };

    case types.editRaffleSelectPrize:
      return {
        ...state,
        selectedPrize: action.payload,
      };

    case types.editRaffleGetPrizes:
      return {
        ...state,
        prizes: action.payload,
      };

    case types.editRaffleDeletePrize:
      return {
        ...state,
        prizes: state.prizes.filter((p) => p._id !== action.payload),
      };

    case types.editRaffleAddPrize:
      return {
        ...state,
        selectedPrize: {},
        prizes: [...state.prizes, action.payload],
      };

    case types.editRaffleUpdatePrize:
      return {
        ...state,
        selectedPrize: {},
        prizes: state.prizes.map((p) =>
          p._id === action.payload._id ? action.payload : p
        ),
      };

    case types.editRaffleGetRaffleLists:
      return {
        ...state,
        raffleLists: action.payload,
      };

    case types.editRaffleAssignList:
      return {
        ...state,
        raffleLists: state.raffleLists.map((rl) =>
          rl._id === action.payload._id ? action.payload : rl
        ),
      };

    case types.editRaffleAddLists:
      return {
        ...state,
        raffleLists: state.raffleLists.concat(action.payload),
      };

    case types.editRaffleAddTickets:
      return {
        ...state,
        raffleData: action.payload,
      };

    case types.editRaffleUpdateListQuantity:
      return {
        ...state,
        raffleData: {
          ...state.raffleData,
          listQuantity: action.payload,
        },
      };

    case types.editRaffleCleanData:
      return initialState;

    default:
      return state;
  }
};
