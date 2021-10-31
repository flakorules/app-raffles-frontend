import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startAddTickets } from "../../actions/editRaffle.action";
import { formatValidationMessages } from "../../helpers/validation.helper";
import { addTicketsValidator } from "../../validators/createRaffle.validator";

export const AddTicketsSimpleRaffle = () => {
  const [formData, setFormData] = useState({
    ticketsPerList: 0,
  });

  const dispatch = useDispatch();

  const onQuantityChange = ({ target }) => {
    setFormData({
      ticketsPerList: target.value,
    });
  };

  const onClickButton = () => {
    const validation = addTicketsValidator(formData);

    if (!validation.status) {
      Swal.fire({
        icon: "error",
        title: "Errores de validación al agregar tickets:",
        html: formatValidationMessages(validation.messages),
        confirmButtonText: "Aceptar",
      });

      return;
    }

    Swal.fire({
      title: `¿Desea agregar los tickets?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, agregar`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startAddTickets(formData));
        setFormData({
          ticketsPerList: 0,
        });
      }
    });
  };

  return (
    <>
      <h2>Agregar Tickets:</h2>
      <div className="form-row">
        <div className="form-group col-md-4">
          <input
            name="quantity"
            value={formData.ticketsPerList}
            onChange={onQuantityChange}
            type="number"
            className="form-control"
            id="quantity"
            placeholder="Cantidad"
          />
        </div>
        <div className="form-group col-md-4">
          <button
            type="button"
            className="btn btn-success my-auto"
            onClick={onClickButton}
          >
            <FontAwesomeIcon icon={faPlus} className="fa-lg mr-2" />
          </button>
        </div>
      </div>
    </>
  );
};
