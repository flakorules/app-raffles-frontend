import React from "react";

export const ViewPrizeCard = ({ prize }) => {
  return (
    <div className="col-3 py-2">
      <div className="card">
        <div className="card-body p-2">
          <h5 className="card-title">{prize.title}</h5>
          <p className="card-text display-display-4">{prize.description}</p>
        </div>
      </div>
    </div>
  );
};
