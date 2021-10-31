const baseUrl = process.env.REACT_APP_RAFFLES_API;

export const createRaffleService = async (raffleData, prizes) => {
  const response = await fetch(`${baseUrl}/raffles/new`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-token": localStorage.getItem("token") || "",
    },
    body: JSON.stringify({ ...raffleData, prizes: prizes }),
  });

  const data = await response.json();

  return data;
};

export const loginService = async (formData) => {
  console.log("loginService", baseUrl);
  const response = await fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
};

export const getMyRaffles = async (userName) => {
  const response = await fetch(`${baseUrl}/raffles/owner/${userName}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  return await response.json();
};

export const getRaffleDataService = async (alias) => {
  const response = await fetch(`${baseUrl}/raffles/${alias}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  return await response.json();
};

export const getListByAliasAndListNumberService = async (alias, listNumber) => {
  const response = await fetch(
    `${baseUrl}/raffleLists/${alias}/list/${listNumber}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  return await response.json();
};

export const getTicketsFromRaffleListService = async (alias, listNumber) => {
  const response = await fetch(
    `${baseUrl}/tickets/${alias}/list/${listNumber}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  return await response.json();
};

export const getTicketsFromRaffleService = async (alias) => {
  const response = await fetch(`${baseUrl}/tickets/${alias}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  return await response.json();
};

export const getRaffleListsService = async (alias) => {
  const response = await fetch(`${baseUrl}/raffleLists/${alias}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  return await response.json();
};

export const getPrizesService = async (alias) => {
  const response = await fetch(`${baseUrl}/prizes/${alias}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  return await response.json();
};

export const deletePrizeService = async (prizeId) => {
  const response = await fetch(`${baseUrl}/prizes/delete/${prizeId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "x-token": localStorage.getItem("token") || "",
    },
  });
  return await response.json();
};

export const addPrizeService = async (raffleId, prize) => {
  const response = await fetch(`${baseUrl}/prizes/new/${raffleId}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-token": localStorage.getItem("token") || "",
    },
    body: JSON.stringify(prize),
  });
  return await response.json();
};

export const updatePrizeService = async (prize) => {
  const response = await fetch(`${baseUrl}/prizes/update/${prize._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "x-token": localStorage.getItem("token") || "",
    },
    body: JSON.stringify(prize),
  });
  return await response.json();
};

export const updateRaffleDataService = async (id, raffleData) => {
  const response = await fetch(`${baseUrl}/raffles/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "x-token": localStorage.getItem("token") || "",
    },
    body: JSON.stringify(raffleData),
  });

  return await response.json();
};

export const assignListToUserService = async (raffleListId, user) => {
  const response = await fetch(
    `${baseUrl}/raffleLists/assign/${raffleListId}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "x-token": localStorage.getItem("token") || "",
      },
      body: JSON.stringify(user),
    }
  );

  return await response.json();
};

export const addListsToRaffleService = async (raffleId, formData) => {
  console.log(formData);

  const response = await fetch(
    `${baseUrl}/raffles/colaborative/addLists/${raffleId}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "x-token": localStorage.getItem("token") || "",
      },
      body: JSON.stringify(formData),
    }
  );

  return await response.json();
};

export const addTicketsToRaffleService = async (raffleId, formData) => {
  const response = await fetch(
    `${baseUrl}/raffles/simple/addTickets/${raffleId}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "x-token": localStorage.getItem("token") || "",
      },
      body: JSON.stringify(formData),
    }
  );

  return await response.json();
};

export const bookTicketService = async (ticket) => {
  console.log(localStorage.getItem("token"));

  const response = await fetch(`${baseUrl}/tickets/book/${ticket._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "x-token": localStorage.getItem("token") || "",
    },
  });

  return await response.json();
};

export const unbookTicketService = async (ticket) => {
  console.log(localStorage.getItem("token"));

  const response = await fetch(`${baseUrl}/tickets/unbook/${ticket._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "x-token": localStorage.getItem("token") || "",
    },
  });

  return await response.json();
};

