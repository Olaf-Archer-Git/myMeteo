import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser, checkIsAuth } from "../../store/features/auth/authSlice.js";
import exit from "../../assets/exit.svg";

import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status);
      //start searching from home page
      if (isAuth) navigate("/");
    }
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }));
    } catch (error) {
      console.log("components/login, handlesubmit", error);
    }
  };
  return (
    <div className="login" onClick={() => navigate("/")}>
      <div className="login__wrap" onClick={(e) => e.stopPropagation()}>
        <div className="login__content">
          <h2 className="login__title">
            log in to <span>my</span>meteo
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="login__input"
              type="text"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="login__input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className="login__btn" onClick={handleSubmit}>
            log in
          </div>

          <div className="login__text">
            don&apos;t have an account?
            <Link to="/signup" className="login__link">
              sign up
            </Link>
          </div>
        </div>
        <div className="login__container">
          <img
            className="login__button"
            src={exit}
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
