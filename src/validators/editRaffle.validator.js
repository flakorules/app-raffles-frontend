export const editRaffleValidator = (formData) => {
  let messages = [];
  if (formData.title === "") {
    messages.push("Debe ingresar Título");
  }
  if (formData.description === "") {
    messages.push("Debe ingresar Descripción");
  }

  if (formData.drawDate === "" || formData.drawDate === null) {
    messages.push("Debe ingresar Fecha del Sorteo");
  }

  if (formData.drawDate < Date.now()) {
    messages.push("Fecha del Sorteo debe ser mayor a la actual");
  }

  if (formData.drawDate < Date.now()) {
    messages.push("Fecha del Sorteo debe ser mayor a la actual");
  }

  return {
    status: messages.length === 0,
    messages,
  };
};
