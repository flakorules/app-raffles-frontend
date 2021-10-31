import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deletePrize, selectPrize } from "../../actions/createRaffle.action";
import Swal from "sweetalert2";

export const PrizeCard = ({ prize }) => {
  const dispatch = useDispatch();

  

  const onClickEdit = (e) => {
    e.preventDefault();
    dispatch(selectPrize(prize));
  };

  const onClickDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "question",
      title: "¿Confirma la eliminación del premio?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePrize(prize));
        Swal.fire("Saved!", "", "success");
      }
    });
  };

  return (
    <div className="col-sm-3 py-2 rounded">
      <div className="card">
        <div className="card-body  p-2">
          <h5 className="card-title">{prize.title}</h5>
          <p className="card-text display-display-4">{prize.description}</p>

          <div className="flex-row justify-content-center">
            <button
              type="button"
              className="btn btn-success mr-1"
              onClick={onClickEdit}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onClickDelete}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
