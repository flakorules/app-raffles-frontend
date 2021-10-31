import { types } from "../types/types";
import {
  deletePrizeService,
  getPrizesService,
  getRaffleDataService,
  updatePrizeService,
  updateRaffleDataService,
  addPrizeService,
  getRaffleListsService,
  assignListToUserService,
  addListsToRaffleService,
  addTicketsToRaffleService,
} from "../services/rafflesApi.service";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { formatValidationMessagesFromApi } from "../helpers/validation.helper";

export const startGetRaffleData = (alias) => {
  return async (dispatch) => {
    const data = await getRaffleDataService(alias);

    if (data.ok) {
      dispatch(getRaffleData(data.raffle));
    } else {
      dispatch(getRaffleData({}));

      Swal.fire({
        icon: "error",
        title: "Errores al crear la Rifa:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const startSaveRaffleData = (raffleData) => {
  return async (dispatch) => {
    const { _id, title, description, drawDate } = raffleData;

    const data = await updateRaffleDataService(_id, {
      title,
      description,
      drawDate: format(new Date(drawDate), "yyyy-MM-dd"),
    });

    if (data.ok) {
      Swal.fire({
        icon: "success",
        text: "Los datos de la Rifa han sido actualizados con éxito",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "Errores al actualizar los datos de la Rifa",
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const startGetPrizes = (alias) => {
  return async (dispatch) => {
    const data = await getPrizesService(alias);

    if (data.ok) {
      dispatch(getPrizes(data.prizes));
    } else {
      dispatch(getPrizes([]));
    }
  };
};

export const startDeletePrize = (prizeId) => {
  return async (dispatch) => {
    const data = await deletePrizeService(prizeId);

    if (data.ok) {
      dispatch(deletePrize(prizeId));

      Swal.fire({
        icon: "success",
        text: "El premio ha sido eliminado con éxito",
        confirmButtonText: "Aceptar",
      });
    } else {
      dispatch(deletePrize(null));

      Swal.fire({
        icon: "error",
        title: "Errores al eliminar el premio:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const startAddPrize = (prize) => {
  return async (dispatch, getState) => {
    
    const { raffleData } = getState().editRaffle;

    const data = await addPrizeService(raffleData._id, prize);

    if (data.ok) {
      dispatch(addPrize(data.prize));

      Swal.fire({
        icon: "success",
        text: "El premio ha sido agregado con éxito",
        confirmButtonText: "Aceptar",
      });
    } else {
      dispatch(deletePrize(null));

      Swal.fire({
        icon: "error",
        title: "Errores al agregar el premio:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const startUpdatePrize = (prize) => {
  return async (dispatch) => {
    const data = await updatePrizeService(prize);

    if (data.ok) {
      dispatch(updatePrize(prize));
      Swal.fire({
        icon: "success",
        text: "El premio ha sido modificado con éxito",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Errores al eliminar el premio:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const startAssignRaffleList = (raffleListId, user) => {
  return async (dispatch) => {
    const data = await assignListToUserService(raffleListId, user);

    if (data.ok) {
      dispatch(assignRaffleList(data.raffleList));
      Swal.fire({
        icon: "success",
        text: "La lista ha sido asignada exitosamente",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Errores al asignar la lista:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const startGetRaffleLists = (alias) => {
  return async (dispatch) => {
    const data = await getRaffleListsService(alias);

    if (data.ok) {
      dispatch(getRaffleLists(data.rafleLists));
    } else {
      dispatch(getRaffleLists([]));
    }
  };
};

export const startAddLists = (formData) => {
  return async (dispatch, getState) => {
    const { raffleData } = getState().editRaffle;

    const data = await addListsToRaffleService(raffleData._id, formData);

    if (data.ok) {
      dispatch(addLists(data.raffleLists));
      dispatch(updateListQuantity(data.raffle.listQuantity));

      Swal.fire({
        icon: "success",
        text: "Se han añadido correctamente las listas",
        confirmButtonText: "Aceptar",
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Errores al agregar Listas:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const startAddTickets = (formData)=>{

  return async (dispatch, getState) => {
    const { raffleData } = getState().editRaffle;

    const data = await addTicketsToRaffleService(raffleData._id, formData);

    if (data.ok) {      

      dispatch(addTickets(data.raffle));

      Swal.fire({
        icon: "success",
        text: "Se han añadido correctamente los tickets",
        confirmButtonText: "Aceptar",
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Errores al agregar los tickets:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };

}

export const selectPrize = (prize) => ({
  type: types.editRaffleSelectPrize,
  payload: prize,
});

export const assignRaffleList = (raffleList) => ({
  type: types.editRaffleAssignList,
  payload: raffleList,
});

export const deletePrize = (prizeId) => ({
  type: types.editRaffleDeletePrize,
  payload: prizeId,
});

const getRaffleData = (raffleData) => ({
  type: types.editRaffleGetData,
  payload: raffleData,
});

const getPrizes = (prizes) => ({
  type: types.editRaffleGetPrizes,
  payload: prizes,
});

const updatePrize = (prize) => ({
  type: types.editRaffleUpdatePrize,
  payload: prize,
});

const addPrize = (prize) => ({
  type: types.editRaffleAddPrize,
  payload: prize,
});

const getRaffleLists = (raffleLists) => ({
  type: types.editRaffleGetRaffleLists,
  payload: raffleLists,
});

const addLists = (raffleLists) => ({
  type: types.editRaffleAddLists,
  payload: raffleLists,
});

const addTickets = (raffleData) => ({
  type: types.editRaffleAddTickets,
  payload: raffleData,
});

const updateListQuantity = (listQuantity) => ({
  type: types.editRaffleUpdateListQuantity,
  payload: listQuantity,
});

export const cleanRaffleData = () => ({
  type: types.editRaffleCleanData,
});
