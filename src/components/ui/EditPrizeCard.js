import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { selectPrize, startDeletePrize } from "../../actions/editRaffle.action";

export const EditPrizeCard = ({ prize }) => {
  const dispatch = useDispatch();
  const { prizes } = useSelector((state) => state.editRaffle);

  const onClickEdit = () => {
    dispatch(selectPrize(prize));
  };

  const onClickDelete = () => {
    Swal.fire({
      title: `¿Desea eliminar el premio ${prize.title}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, eliminar`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletePrize(prize._id));
      }
    });
  };

  return (
    <div className="col-sm-3 py-2">
      <div className="card">
        <div className="card-body p-2">
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

            {prizes.length > 1  && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={onClickDelete}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
