import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { ShoppingCartNavBar } from "./ShoppingCartNavBar";
import { UserProfileNavBar } from "./UserProfileNavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  //const uid = "tereso";
  //const uid = null;
  const { uid } = useSelector((state) => state.auth);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand" activeClassName="active">
            Raffles
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/contact" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>

            <div className="d-flex flex-row justify-content-end">
              <ShoppingCartNavBar />
              <UserProfileNavBar />
            </div>
            {!uid && (
              <div className="justify-content-end">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink to="/login" className="text-light">
                      <FontAwesomeIcon icon={faSignInAlt} className="fa-2x" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
