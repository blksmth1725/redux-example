import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
import { logout } from "../redux/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="login-out-button-container">
        <button
          className="login-button"
          onClick={() => {
            dispatch(
              login({
                name: "Christian",
                age: 31,
                email: "csheen@watchsytems.com",
              })
            );
          }}
        >
          Login
        </button>

        <button
          className="logout-button"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Login;
