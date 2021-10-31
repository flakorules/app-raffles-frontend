import Swal from "sweetalert2";

import { loginService } from "../services/rafflesApi.service";
import { types } from "../types/types";

export const startLogin = (formData) => {
  return async (dispatch) => {
    const data = await loginService(formData);
    if (data.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: data.uid,
          userName: data.userName,
        })
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Error de autenticación:",
        html: `<p class="text-danger font-weight-bold">${data.msg}</p>`,
        confirmButtonText: "Aceptar",
      });
    }
  };
};

export const login = (data) => ({
  type: types.authLogin,
  payload: data,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();

    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });
