import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanRaffleData,
  startGetPrizes,
  startGetRaffleData,
  startGetRaffleLists,
} from "../../actions/editRaffle.action";
import { EditPrizesForm } from "../../components/ui/EditPrizesForm";
import { EditRaffleForm } from "../../components/ui/EditRaffleForm";
import { OtherActionsForm } from "../../components/ui/OtherActionsForm";
import { RaffleListsAdmin } from "../../components/ui/RaffleListsAdmin";

export const EditRaffle = (props) => {
  const { alias } = props.match.params;

  const { raffleData } = useSelector((state) => state.editRaffle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetRaffleData(alias));
    
    dispatch(startGetPrizes(alias));
    if (raffleData.type === "colaborative") {
      dispatch(startGetRaffleLists(alias));
    }
    
  }, [alias, raffleData.type, dispatch]);

  useEffect(() => {
    return () => {
     dispatch(cleanRaffleData());
    };
  }, []);

  return (
    <>
      <h1>Modificar Rifa</h1>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="mainData-tab"
            data-toggle="tab"
            href="#mainData"
            role="tab"
            aria-controls="mainData"
            aria-selected="true"
          >
            Datos Principales
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Modificar Premios
          </a>
        </li>

        {raffleData.type === "colaborative" && (
          <li className="nav-item">
            <a
              className="nav-link"
              id="raffleLists-tab"
              data-toggle="tab"
              href="#raffleLists"
              role="tab"
              aria-controls="raffleLists"
              aria-selected="false"
            >
              Listas
            </a>
          </li>
        )}

        <li className="nav-item">
          <a
            className="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Otras Acciones
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active m-5"
          id="mainData"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <EditRaffleForm />
        </div>
        <div
          className="tab-pane fade  m-5"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <EditPrizesForm />
        </div>

        {raffleData.type === "colaborative" && (
          <div
            className="tab-pane fade  m-5"
            id="raffleLists"
            role="tabpanel"
            aria-labelledby="raffleLists-tab"
          >
            <RaffleListsAdmin />
          </div>
        )}

        <div
          className="tab-pane fade  m-5"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <OtherActionsForm />
        </div>
      </div>
    </>
  );
};
