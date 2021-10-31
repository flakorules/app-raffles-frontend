import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const UserMenuNavBar = () => {
  const { uid,userName } = useSelector((state) => state.auth);
  return (
    <>
      {uid && (
        <div className="container mt-2 d-flex flex-row justify-content-center">
          <p className="my-auto pr-4 font-weight-bold">Bienvenido {userName}</p>
          <div
            className="btn-toolbar justify-content-center"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <NavLink to="/raffle/create" className="btn btn-success">
                Crear Rifa
              </NavLink>
            </div>

            <div className="btn-group" role="group" aria-label="Basic example">
              <NavLink to="/myRaffles" className="btn btn-secondary">
                Mis Rifas
              </NavLink>

              <NavLink to="/raffles/collaborations" className="btn btn-secondary">
                Mis Colaboraciones
              </NavLink>

              <NavLink to="/raffles/participations" className="btn btn-secondary">
                Mis Participacioes
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
