import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startAssignRaffleList } from "../../actions/editRaffle.action";
import { raffleStatusHelper } from "../../common/statusHelper";

export const RaffleListsAdminRow = ({ list }) => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const handleAssign = () => {   
    Swal.fire({
      title: `¿Desea asignar la lista ${list.listNumber} a ${userName} ?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, asignar`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startAssignRaffleList(list._id, { userName }));
      }
    });
  };

  const handChange = ({ target }) => {
    setUserName(target.value);
  };

  return (
    <tr>
      <td>{list.listNumber}</td>
      <td>{raffleStatusHelper(list.status)}</td>
      <td>
        {list.userId && list.userId.userName}

        {list.status === 1 && (
          <input
            name="userName"
            value={userName}
            onChange={handChange}
            type="text"
            className="form-control"
            id="userName"
            placeholder="Usuario"
          />
        )}
      </td>
      <td>
        {list.status === 1 && (
          <button
            className="btn btn-outline-success"
            data-toggle="tooltip"
            data-placement="top"
            title="Tooltip on top"
            onClick={handleAssign}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        )}
      </td>
    </tr>
  );
};
