import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  startAddPrize,
  startUpdatePrize,
} from "../../actions/editRaffle.action";

import { initPrize } from "../../common/defaultData";
import { formatValidationMessages } from "../../helpers/validation.helper";
import { prizeFormValidator } from "../../validators/createRaffle.validator";

export const EditPrizeForm = () => {
  const [formData, setFormData] = useState(initPrize);
  const { selectedPrize } = useSelector((state) => state.editRaffle);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("efecto", selectedPrize);
    if (selectedPrize) {
      setFormData(selectedPrize);
    } else {
      setFormData(initPrize);
    }
  }, [selectedPrize]);

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSavePrize = () => {
    const validation = prizeFormValidator(formData);    

    if (!validation.status) {
      Swal.fire({
        icon: "error",
        title: "Errores de validación en el formulario de Premios:",
        html: formatValidationMessages(validation.messages),
        confirmButtonText: "Aceptar",
      });

      return;
    }

    Swal.fire({
      title: `¿Desea guardar el premio?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, agregar`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (formData._id) {
          dispatch(startUpdatePrize(formData));
        } else {
          dispatch(startAddPrize(formData));
        }
      }
    });
  };

  return (
    <div className="form-row">
      <div className="form-group col-md-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onClick={handleSavePrize}
        >
          <FontAwesomeIcon icon={faPlus} className="fa-lg mr-2" />

          {formData._id ? "Modificar" : "Agregar"}
        </button>
      </div>
    </div>
  );
};
