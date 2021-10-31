export const buyTicketsValidator = (data = []) => {
  let messages = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === "") {
      messages.push(`Ticket ${data[i].code}: Debe ingresar el nombre`);
    }

    if (data[i].email === "" || data[i].phoneNumber === "") {
      messages.push(
        `Ticket ${data[i].code}: Debe ingresar al menos un dato de contacto`
      );
    }

    if (
      data[i].email !== "" &&
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        data[i].email
      )
    ) {
      messages.push(`Ticket ${data[i].code}: Debe ingresar un email válido`);
    }
  }

  return {
    status: messages.length === 0,
    messages,
  };
};
