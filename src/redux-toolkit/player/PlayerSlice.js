import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  player: [],
  isLoading: false,
  errorMessage: "",
};

// action for api call
export const allPlayer = createAsyncThunk(
  "player/allPlayer",
  async (_,{ rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if(response.status === 200){
          return response.data;
      }
    } catch (error) {
      if (error) {
        return rejectWithValue(error);
      }
    }
  }
);

// here define slice
const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(allPlayer.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(allPlayer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.player = action.payload;
      })
      .addCase(allPlayer.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default playerSlice.reducer;
