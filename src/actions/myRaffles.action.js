import { getMyRaffles } from "../services/rafflesApi.service";
import { types } from "../types/types";

export const startMyRafflesGetAll = () => {
  return async (dispatch, getState) => {
    const { userName } = getState().auth;
    const { raffles } = await getMyRaffles(userName);

    dispatch(myRaflessGetAll(raffles));
  };
};

export const myRaflessGetAll = (raffles) => ({
  type: types.myRafflesGetAll,
  payload: raffles,
});
