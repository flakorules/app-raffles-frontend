import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const ViewRaffleListCard = ({ raffleList }) => {
  const { raffleData } = useSelector((state) => state.viewRaffle);

  return (
    <div className="col-2">
      <div className="card mb-2">
        <div className="card-body p-2">
          <h5 className="card-title d-flex display-item justify-content-center">
            Nro: {raffleList.listNumber}
          </h5>
          <div className="d-flex display-item justify-content-center">
            <NavLink
              className="btn btn-success text-light"
              to={`/raffle/${raffleData.alias}/list/${raffleList.listNumber}`}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
