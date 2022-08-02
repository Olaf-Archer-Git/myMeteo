import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeatherAPI = createAsyncThunk(
  "weather/getWeatherAPI",
  async (url) => {
    try {
      const response = await axios.get(url).then((res) => res.data);
      return response;
    } catch (error) {
      console.log("weatherSlice/getWeatherApi", error);
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: { search: [] },
  extraReducers: {
    [getWeatherAPI.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getWeatherAPI.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.search = action.payload;
    },
    [getWeatherAPI.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default weatherSlice.reducer;
