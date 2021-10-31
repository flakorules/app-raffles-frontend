import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { startAddTicket } from "../../actions/cart.action";

export const TicketCard = ({ ticket }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { raffleListData } = useSelector((state) => state.viewRaffleList);
  const { uid } = useSelector((state) => state.auth);

  const handleClick = () => {
    if (uid) {
      dispatch(startAddTicket(ticket));
      return;
    }

    Swal.fire({
      title: `Para comprar su(s) ticket(s) debes estár logeado`,
      text: "¿Desea ir al login?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, ir al login`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/login");
      }
    });
  };

  return (
    <div className="col-3 py-2">
      <div className="card">
        <div className="card-body p-2">
          <h5 className="card-title">
            {raffleListData.listNumber
              ? `Lista ${raffleListData.listNumber} - Ticket: ${ticket.sequenceNumber}`
              : `Ticket: ${ticket.sequenceNumber}`}
          </h5>
          <p className="card-text">
            {ticket.status === 1 && "Disponible"}
            {ticket.status === 2 && "Reservado"}
            {ticket.status === 3 && "Vendido"}
          </p>
        </div>
        <div className="card-footer d-flex display-item justify-content-center">
          {ticket.status === 1 && (
            <button className="btn btn-success" onClick={handleClick}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
