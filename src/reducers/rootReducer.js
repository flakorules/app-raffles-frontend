import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { createRaffleReducer } from "./createRaffleReducer";
import { editRaffleReducer } from "./editRaffleReducer";
import { myRafflesReducer } from "./myRafflesReducer";

import { viewRaffleReducer } from "./viewRaffleReducer";
import { viewRaffleListReducer } from "./viewRaffleListReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  auth: authReducer,

  createRaffle: createRaffleReducer,
  myRaffles: myRafflesReducer,
  editRaffle: editRaffleReducer,
  viewRaffle: viewRaffleReducer,
  viewRaffleList: viewRaffleListReducer,
  cart: cartReducer,
});
