export const createLoginFormValidator = (formData = {}) => {
  let messages = [];

  if (formData.userName === "") {
    messages.push("Debe ingresar Nombre de Usuario");
  }
  if (formData.password === "") {
    messages.push("Debe ingresar Password");
  }

  return {
    status: messages.length === 0,
    messages,
  };


};
