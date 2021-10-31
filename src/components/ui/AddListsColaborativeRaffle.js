import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startAddLists } from "../../actions/editRaffle.action";
import { formatValidationMessages } from "../../helpers/validation.helper";
import { addListValidator } from "../../validators/createRaffle.validator";

export const AddListsColaborativeRaffle = () => {
  const [formData, setFormData] = useState({
    listQuantity: 0,
  });

  const dispatch = useDispatch();

  const onQuantityChange = ({ target }) => {
    setFormData({
      listQuantity: target.value,
    });
  };

  const onClickButton = () => {
    const validation = addListValidator(formData);

    if (!validation.status) {
      Swal.fire({
        icon: "error",
        title: "Errores de validación al agregar listas:",
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
        dispatch(startAddLists(formData));
        setFormData({
          listQuantity: 0,
        });
      }
    });
  };

  return (
    <>
      <h2>Agregar listas:</h2>
      <div className="form-row">
        <div className="form-group col-md-4">
          <input
            name="quantity"
            value={formData.listQuantity}
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
