import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEdit, faDice } from "@fortawesome/free-solid-svg-icons";
import { startMyRafflesGetAll } from "../../actions/myRaffles.action";
import { NavLink } from "react-router-dom";

export const MyRaffles = () => {
  const dispatch = useDispatch();

  const myRaffles = useSelector((state) => state.myRaffles);

  useEffect(() => {
    dispatch(startMyRafflesGetAll());
  }, [dispatch]);

  return (
    <>
      <h1>Mis Rifas</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Alias</th>
            <th scope="col">Tipo</th>
            <th scope="col">Fecha del Sorteo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {myRaffles.map((raffle) => (
            <tr key={raffle._id}>
              <td>{raffle.title}</td>
              <td>{raffle.alias}</td>
              <td>{raffle.type}</td>
              <td>{format(new Date(raffle.drawDate), "yyyy-MM-dd")}</td>
              <td>
                <NavLink
                  to={`/raffle/${raffle.alias}`}
                  className="btn btn-primary mx-2"
                >
                  <FontAwesomeIcon icon={faEye} />
                </NavLink>
                <NavLink
                  to={`/raffle/edit/${raffle.alias}`}
                  className="btn btn-primary mx-2"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </NavLink>
                <NavLink to="/" className="btn btn-primary mx-2">
                  <FontAwesomeIcon icon={faDice} />
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
