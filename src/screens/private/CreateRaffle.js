import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

import "react-datepicker/dist/react-datepicker.css";
import { PrizeCardList } from "../../components/ui/PrizeCardList";
import { PrizeForm } from "../../components/ui/PrizeForm";
import { initRafle } from "../../common/defaultData";
import { createRaffleValidator } from "../../validators/createRaffle.validator";
import { formatValidationMessages } from "../../helpers/validation.helper";
import {
  cleanAll,
  setRaffleData,
  startCreateRaffle,
} from "../../actions/createRaffle.action";
import { useHistory } from "react-router";

export const CreateRaffle = () => {
  const [formData, setFormData] = useState(initRafle);
  const { prizeList, flagSaved } = useSelector((state) => state.createRaffle);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = ({ target }) => {
    const newState = {
      ...formData,
      [target.name]: target.value,
    };

    setFormData(newState);
    dispatch(setRaffleData(newState));
  };

  const handleTypeChange = ({ target }) => {
    console.log("type", target.value);
    const newState = {
      ...formData,
      listQuantity: target.value === "simple" ? "1" : "0",
      [target.name]: target.value,
    };

    setFormData(newState);
    dispatch(setRaffleData(newState));
  };

  const onHandleDrawDateChange = (date) => {
    const newState = {
      ...formData,
      drawDate: date,
    };
    setFormData(newState);
    dispatch(setRaffleData(newState));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const validation = createRaffleValidator(formData, prizeList);
    if (validation.status) {
      dispatch(startCreateRaffle());

      if (flagSaved) {
        dispatch(cleanAll());
        history.push("/");
      }
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
      <h1>Crear Rifa</h1>
      <form onSubmit={onHandleSubmit}>
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
              value={formData.alias}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="alias"
              placeholder="alias"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="type" className="font-weight-bold">
              Tipo
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleTypeChange}
              id="type"
              className="form-control"
            >
              <option>Seleccionar Tipo</option>
              <option value="simple">Simple</option>
              <option value="colaborative">Colaborativa</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="drawDate" className="font-weight-bold">
              Fecha del Sorteo
            </label>
            <br />
            <DatePicker
              name="title"
              selected={formData.drawDate}
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
                name="listQuantity"
                value={formData.listQuantity}
                onChange={handleChange}
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
                name="ticketsPerList"
                value={formData.ticketsPerList}
                onChange={handleChange}
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
              name="pricePerTicket"
              value={formData.pricePerTicket}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="pricePerTicket"
              placeholder="Valor por Ticket"
            />
          </div>
        </div>

        <div className="col-12 bg-light">
          <PrizeForm />
          <PrizeCardList prizeList={prizeList} />
        </div>

        <button type="submit" className="btn btn-primary">
          Crear Rifa
        </button>
      </form>
    </>
  );
};
