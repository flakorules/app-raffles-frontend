import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth.action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faColumns, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const UserProfileNavBar = () => {
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      {uid && (
        <>
          <ul className="navbar-nav mr-auto navbar-dark bg-dark">
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faColumns} className="fa-2x" />
              </NavLink>
            </li>

            <li className="nav-item">
              <button
                className="btn m-2 my-sm-0 text-light"
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="fa-2x" />
              </button>
            </li>
          </ul>
        </>
      )}
    </>
  );
};
