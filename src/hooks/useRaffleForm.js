import { useState } from "react";

export const useRaffleForm = (
  initialRaffleData = {},
  initialPrizeData = {},
  initialPrizesList = []
) => {
  const [raffleData, setRaffleData] = useState(initialRaffleData);
  const [prizeData, setPrizeData] = useState(initialPrizeData);
  const [prizesList, setPrizesList] = useState(initialPrizesList)

  const handleRaffleDataChange = ({ target }) => {
    setRaffleData({
      ...raffleData,
      [target.name]: target.value,
    });
  };

  const handlePrizeDataChange = ({ target }) => {
    setPrizeData({
      ...prizeData,
      [target.name]: target.value,
    });
  };

  const addPrize =()=>{
    setPrizesList([...prizesList, prizeData]);
    setPrizeData(initialPrizeData);
  }

  return [
    raffleData,
    setRaffleData,
    handleRaffleDataChange,
    prizeData,
    handlePrizeDataChange,
    addPrize,
    prizesList
  ];
};
