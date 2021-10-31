import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import {
  addPrize,
  cleanPrize,
  editPrize,
} from "../../actions/createRaffle.action";
import { initPrize } from "../../common/defaultData";
import { formatValidationMessages } from "../../helpers/validation.helper";
import { prizeFormValidator } from "../../validators/createRaffle.validator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus} from "@fortawesome/free-solid-svg-icons";

export const PrizeForm = () => {
  const dispatch = useDispatch();
  const { activePrize } = useSelector((state) => state.createRaffle);

  const [formData, setFormData] = useState(initPrize);

  useEffect(() => {
    if (activePrize) {
      setFormData(activePrize);
    } else {
      setFormData(initPrize);
    }
  }, [activePrize, setFormData]);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const onHandleAddPrize = (e) => {
    e.preventDefault();

    const validation = prizeFormValidator(formData);

    if (validation.status) {
      if (activePrize) {
        dispatch(
          editPrize({
            tempId: activePrize.tempId,
            ...formData,
          })
        );
      } else {
        dispatch(addPrize({ ...formData, tempId: uuidv4() }));
      }

      dispatch(cleanPrize());
      setFormData(initPrize);
    } else {
      Swal.fire({
        icon: "error",
        title: "Errores de validación en el formulario de Premios:",
        html: formatValidationMessages(validation.messages),
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <h2>Premios</h2>

      <div className="form-row">
        <div className="form-group col-md-4">
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
        <div className="form-group col-md-4">
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="title"
            placeholder="Descripción"
          />
        </div>
        <div className="form-group col-md-4">
          <button
            type="button"
            className="btn btn-success my-auto"
            onClick={onHandleAddPrize}
          >
            <FontAwesomeIcon icon={faPlus} className="fa-lg mr-2" />
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
