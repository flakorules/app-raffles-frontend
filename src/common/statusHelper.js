/*
  1. available
  2. assigned
  3. done
   */

export const raffleStatusHelper = (id) => {
  switch (id) {
    case 1:
      return "disponible";

    case 2:
      return "asignada";

    case 3:
      return "completada";

    default:
      return "";
  }
};
