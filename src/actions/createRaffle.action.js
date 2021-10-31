import { types } from "../types/types";
import { createRaffleService } from "../services/rafflesApi.service";
import Swal from "sweetalert2";
import { formatValidationMessagesFromApi } from "../helpers/validation.helper";


export const startCreateRaffle = () => {
  return async (dispatch, getState) => {
    const { raffleData, prizeList } = getState().createRaffle;
    
    const data = await createRaffleService(raffleData, prizeList);

    dispatch(setFlagSaved(data.ok));

    if (data.ok) {            
      Swal.fire({
        icon: "success",
        text: "La Rifa ha sido creada con éxito",
        confirmButtonText: "Aceptar",
      });
      
    } else {
      
      Swal.fire({
        icon: "error",
        title: "Errores al crear la Rifa:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const setRaffleData = (raffleData) => ({
  type: types.raffleFormSetRaffleData,
  payload: raffleData,
});

export const setFlagSaved = (flag) => ({
  type: types.raffleFormSetFlagSaved,
  payload: flag,
});

export const addPrize = (prize) => ({
  type: types.raffleFormAddPrize,
  payload: prize,
});

export const editPrize = (prize) => ({
  type: types.raffleFormEditPrize,
  payload: prize,
});

export const selectPrize = (prize) => ({
  type: types.raffleFormSelectPrize,
  payload: prize,
});

export const cleanPrize = () => ({
  type: types.raffleFormCleanSelectedPrize,
});

export const deletePrize = (prize) => ({
  type: types.raffleFormDeletePrize,
  payload: prize,
});

export const cleanAll = () => ({
  type: types.raffleFormCleanAll,
});
