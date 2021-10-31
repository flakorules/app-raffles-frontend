import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { formatValidationMessages } from "../../helpers/validation.helper";
import { buyTicketsValidator } from "../../validators/cart.validator";
import { CartFormRow } from "./CartFormRow";

export const CartForm = () => {
  const { tickets } = useSelector((state) => state.cart);

  const handleBuy = (params) => {
    const validation = buyTicketsValidator(tickets);

    if (validation.status) {
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
      {tickets.length > 0 ? (
        <>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <CartFormRow key={ticket._id} ticket={ticket} />
              ))}
            </tbody>
          </table>

          <button type="submit" className="btn btn-primary" onClick={handleBuy}>
            Comprar Tickets
          </button>
        </>
      ) : (
        <div class="alert alert-warning" role="alert">
          Carro de compras vacío
        </div>
      )}
    </>
  );
};
