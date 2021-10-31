import Swal from "sweetalert2";
import { formatValidationMessagesFromApi } from "../helpers/validation.helper";
import {
  bookTicketService,
  unbookTicketService,
} from "../services/rafflesApi.service";
import { types } from "../types/types";

export const startAddTicket = (ticket) => {
  return async (dispatch) => {
    const data = await bookTicketService(ticket);

    if (data.ok) {
      dispatch(addTicket(data.ticket));

      if (data.ticket.raffleId.type === "simple") {
        dispatch(bookTicketSimpleRaffle(data.ticket));
      } else if (data.ticket.raffleId.type === "colaborative") {
        dispatch(bookTicketColaborativeRaffle(data.ticket));
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Errores agregar el ticket al carro:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const startRemoveTicket = (ticket) => {
  return async (dispatch) => {
    const data = await unbookTicketService(ticket);

    if (data.ok) {
      dispatch(removeTicket(data.ticket));
    } else {
      Swal.fire({
        icon: "error",
        title: "Errores agregar el remover el ticket del carro:",
        html: formatValidationMessagesFromApi(data.errors),
        confirmButtonText: "Aceptar",
      });
    }
  };
};

const bookTicketSimpleRaffle = (ticket) => ({
  type: types.viewRaffleBookTicket,
  payload: ticket,
});

const bookTicketColaborativeRaffle = (ticket) => ({
  type: types.viewRaffleListBookTicket,
  payload: ticket,
});

export const addTicket = (ticket) => ({
  type: types.cartAddTicket,
  payload: ticket,
});

export const removeTicket = (ticket) => ({
  type: types.cartRemoveTicket,
  payload: ticket,
});

export const editTicketData = (ticket) => ({
  type: types.cartEditTicketData,
  payload: ticket,
});