import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const ShoppingCartNavBar = () => {
  const { tickets } = useSelector((state) => state.cart);

  return (
    <>
      {tickets.length > 0 && (
        <ul className="navbar-nav mr-auto navbar-dark bg-dark my-auto">
          <li className="nav-item">
            {/* <a className="text-light text-decoration-none" href=".">
              <FontAwesomeIcon icon={faShoppingCart} className="fa-2x" />
              <span className="pl-2 pr-5">{tickets.length} tickets</span>
            </a> */}

            <NavLink
              to="/cart"
              className="text-light text-decoration-none"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="fa-2x" />
              <span className="pl-2 pr-5">{tickets.length} tickets</span>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};
