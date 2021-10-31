import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react/cjs/react.development";
import Swal from "sweetalert2";
import {
  cleanRaffleData,
  startSaveRaffleData,
} from "../../actions/editRaffle.action";
import { initRafle } from "../../common/defaultData";
import { formatValidationMessages } from "../../helpers/validation.helper";

import { editRaffleValidator } from "../../validators/editRaffle.validator";

export const EditRaffleForm = () => {
  const dispatch = useDispatch();
  const { raffleData } = useSelector((state) => state.editRaffle);
  const [formData, setFormData] = useState(raffleData);

  useEffect(() => {
    if (raffleData) {
      setFormData(raffleData);
    } else {
      setFormData(initRafle);
    }
  }, [raffleData]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(cleanRaffleData());
  //   };
  // }, [dispatch]);

  const handleChange = ({ target }) => {
    const newState = {
      ...formData,
      [target.name]: target.value,
    };

    setFormData(newState);
  };

  const onHandleDrawDateChange = (date) => {
    const newState = {
      ...formData,
      drawDate: date,
    };
    setFormData(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = editRaffleValidator(formData);
    if (validation.status) {
      dispatch(startSaveRaffleData(formData));
    } else {
      Swal.fire({
        icon: "error",
        title: "Errores de validación en el formulario:",
        html: formatValidationMessages(validation.messages),
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="title" className="font-weight-bold">
              Título
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="title"
              placeholder="Título"
            />
          </div>
          <div className="form-group col-md-8">
            <label htmlFor="inputPassword4" className="font-weight-bold">
              Descripción
            </label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="description"
              placeholder="Descripción"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="alias" className="font-weight-bold">
              Alias
            </label>
            <input
              name="alias"
              defaultValue={formData.alias}
              type="text"
              readOnly={true}
              className="form-control"
              id="alias"
              placeholder="alias"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="type" className="font-weight-bold">
              Tipo
            </label>

            <input
              name="type"
              defaultValue={formData.type}
              type="text"
              readOnly={true}
              className="form-control"
              id="type"
              placeholder="type"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="drawDate" className="font-weight-bold">
              Fecha del Sorteo
            </label>
            <br />
            <DatePicker
              name="title"
              selected={
                formData.drawDate === undefined || formData.drawDate === null
                  ? Date.now()
                  : new Date(formData.drawDate)
              }
              id="drawDate"
              className="form-control"
              placeholder="Fecha del Sorteo"
              onChange={(date) => onHandleDrawDateChange(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div className="form-row">
          {formData.type === "colaborative" && (
            <div className="form-group col-md-4">
              <label htmlFor="listQuantity" className="font-weight-bold">
                Número de Listas
              </label>
              <input
                readOnly={true}
                name="listQuantity"
                defaultValue={formData.listQuantity}
                type="number"
                className="form-control"
                id="listQuantity"
                placeholder="Número de Listas"
              />
            </div>
          )}

          {(formData.type === "colaborative" || formData.type === "simple") && (
            <div className="form-group col-md-4">
              <label htmlFor="ticketsPerList" className="font-weight-bold">
                Tickets por Lista
              </label>
              <input
                readOnly={true}
                name="ticketsPerList"
                defaultValue={formData.ticketsPerList}
                type="number"
                className="form-control"
                id="ticketsPerList"
                placeholder="Tickets por Lista"
              />
            </div>
          )}

          <div className="form-group col-md-4">
            <label htmlFor="pricePerTicket" className="font-weight-bold">
              Valor por Ticket
            </label>
            <input
              readOnly={true}
              name="pricePerTicket"
              defaultValue={formData.pricePerTicket}
              type="text"
              className="form-control"
              id="pricePerTicket"
              placeholder="Valor por Ticket"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Modificar Datos de la Rifa
        </button>
      </form>
    </>
  );
};
