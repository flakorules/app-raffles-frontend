export const createRaffleValidator = (formData, prizes) => {
  let messages = [];
  if (formData.title === "") {
    messages.push("Debe ingresar Título");
  }
  if (formData.description === "") {
    messages.push("Debe ingresar Descripción");
  }
  if (formData.alias === "") {
    messages.push("Debe ingresar Título");
  }
  if (formData.type === "") {
    messages.push("Debe ingresar Tipo");
  }

  if (formData.drawDate === "" || formData.drawDate === null) {
    messages.push("Debe ingresar Fecha del Sorteo");
  }

  if (formData.drawDate < Date.now()) {
    messages.push("Fecha del Sorteo debe ser mayor a la actual");
  }

  if (formData.type === "colaborative" && formData.listQuantity === 0) {
    messages.push("Debe ingresar Número de Listas");
  }

  if (formData.ticketsPerList === 0) {
    messages.push("Debe ingresar Tickets por Lista");
  }

  if (formData.pricePerTicket === 0) {
    messages.push("Debe ingresar Valor por Ticket");
  }

  if (prizes.length === 0) {
    messages.push("Debe ingresar los Premios");
  }
  return {
    status: messages.length === 0,
    messages,
  };
};

export const prizeFormValidator = (prize) => {
  let messages = [];
  if (!prize.title) {
    messages.push("Debe ingresar Título");
  }
  if (!prize.description) {
    messages.push("Debe ingresar Descripción");
  }
  return {
    status: messages.length === 0,
    messages,
  };
};

export const addListValidator = (formData) => {
  let messages = [];
  if (formData.listQuantity < 1) {
    messages.push("La cantidad a ingresar debe ser al menos 1");
  }

  return {
    status: messages.length === 0,
    messages,
  };
};

export const addTicketsValidator = (formData) => {
  let messages = [];
  if (formData.ticketsPerList < 1) {
    messages.push("La cantidad a ingresar debe ser al menos 1");
  }

  return {
    status: messages.length === 0,
    messages,
  };
};
