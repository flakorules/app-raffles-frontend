import React from "react";
import { useSelector } from "react-redux";

import { RaffleListsAdminRow } from "./RaffleListsAdminRow";

export const RaffleListsAdmin = () => {
  const { raffleLists } = useSelector((state) => state.editRaffle);

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Número de Lista</th>
          <th scope="col">Estado</th>
          <th scope="col">Asignada a:</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {raffleLists.map((list) => (
          <RaffleListsAdminRow key={list._id} list={list} />
        ))}
      </tbody>
    </table>
  );
};
