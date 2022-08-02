import { configureStore } from "@reduxjs/toolkit";

import weatherSlice from "./features/weather/weatherSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    weather: weatherSlice,
  },
});
