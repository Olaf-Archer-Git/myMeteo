import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, checkIsAuth } from "../../store/features/auth/authSlice";
import { toast } from "react-toastify";
import exit from "../../assets/exit.svg";

import "./SignUp.scss";

const SignUp = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setPassword("");
      setUsername("");
    } catch (error) {
      console.log("components/signUp, handleSubmit", error);
    }
  };
  return (
    <div className="signUp" onClick={() => navigate("/")}>
      <div className="signUp__wrap" onClick={(e) => e.stopPropagation()}>
        <div className="signUp__container">
          <img
            className="signUp__button"
            src={exit}
            onClick={() => navigate("/")}
          />
        </div>

        <div className="signUp__content">
          <h2 className="signUp__title">
            sign up to my<span>meteo</span>
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="signUp__input"
              type="text"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="signUp__input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className="signUp__btn" onClick={handleSubmit}>
            create account
          </div>
          <div className="signUp__text">
            already a member?
            <Link to="/login" className="signup__link">
              log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
