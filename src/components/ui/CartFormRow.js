import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { editTicketData, startRemoveTicket } from "../../actions/cart.action";

export const CartFormRow = ({ ticket }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(ticket);

  const handleChange = ({ target }) => {
    const newState = {
      ...formData,
      [target.name]: target.value,
    };

    setFormData(newState);

    dispatch(editTicketData(newState));
  };

  const handleDelete = () => {
    Swal.fire({
      icon: "question",
      title: "¿Confirma la eliminación del ticket?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `SI,Eliminar`,
      cancelButtonText: "NO",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startRemoveTicket(ticket));
      }
    });
  };

  return (
    <tr>
      <td>{formData.raffleId.title}</td>
      <td>{formData.code}</td>

      <td>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name"
          className="form-control"
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          className="form-control"
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          id="phoneNumber"
          className="form-control"
        />
      </td>

      <td>
        <button
          className="btn btn-danger"
          data-toggle="tooltip"
          data-placement="top"
          title="Tooltip on top"
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};
