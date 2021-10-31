import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../../hooks/useForm";
import { loginFormData } from "../../common/defaultData";
import { createLoginFormValidator } from "../../validators/login.validator";
import Swal from "sweetalert2";
import { formatValidationMessages } from "../../helpers/validation.helper";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../actions/auth.action";
import { useHistory } from "react-router";

export const Login = () => {
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (uid || uid !== "") {
      history.push("/dashboard");
    }
  }, [uid, history]);

  const [values, handleInputChange] = useForm(loginFormData);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const validation = createLoginFormValidator(values);

    if (validation.status) {
      dispatch(startLogin(values));
    } else {
      Swal.fire({
        icon: "error",
        title: "Errores de validación en el formulario:",
        html: formatValidationMessages(validation.messages),
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-4">
        <div className="card">
          <div className="card-body">
            {false && (
              <a href="." className="float-right btn btn-outline-primary">
                Sign up
              </a>
            )}

            <h4 className="card-title mb-4 mt-1">Ingresar a la Aplicación</h4>
            <form onSubmit={onHandleSubmit}>
              <div className="form-group">
                <label>Nombre de Usuario</label>
                <input
                  name="userName"
                  value={values.userName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Nombre de Usuario"
                  type="text"
                />
              </div>
              <div className="form-group">
                {false && (
                  <a className="float-right" href=".">
                    Forgot?
                  </a>
                )}
                <label>Password</label>
                <input
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
              </div>
              {false && (
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      {" "}
                      <input type="checkbox" /> Save password{" "}
                    </label>
                  </div>
                </div>
              )}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  <FontAwesomeIcon icon={faSignInAlt} className="fa-lg  mr-2" />
                  Login{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
