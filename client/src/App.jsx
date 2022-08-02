import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NextDay from "./pages/nextday/NextDay";
import Week from "./pages/week/Week";
import Error from "./pages/error/Error";
import Map from "./pages/map/Map";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { checkUser } from "./store/features/auth/authSlice";
import { getWeatherAPI } from "./store/features/weather/weatherSlice";
import { VC_URL, VC_KEY } from "./constants/api";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = () => {
  const [location, setLocation] = useState("Kyiv");
  const data = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const getWeatherData = (url) => {
    dispatch(getWeatherAPI(url));
  };

  useEffect(() => {
    getWeatherData(VC_URL + location + VC_KEY);
  }, [location]);

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  return (
    <main className="App">
      <Header />

      {data.search ? (
        <Routes>
          <Route
            path="/"
            element={<Home data={data.search} setLocation={setLocation} />}
          />
          <Route path="/next" element={<NextDay data={data} />} />
          <Route path="/week" element={<Week data={data} />} />
          <Route path="/map" element={<Map />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      ) : (
        <Error />
      )}
      <ToastContainer position="bottom-right" />
      <Footer />
    </main>
  );
};

export default App;
