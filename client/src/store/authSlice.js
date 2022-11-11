import { createSlice } from "@reduxjs/toolkit";
import {
  setLoading,
  setSuccess,
  setError,
  resetUIState,
  resetEntry,
} from "./uiSlice";

const initialState = {
  user: false,
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLogout: (state) => {
      state.user = false;
    },
    setUserLogin: (state, action) => {
      state.user = true;
      state.username = action.payload;
    },
  },
});

// login
export const login = (input) => {
  return async (dispatch) => {
    dispatch(setLoading());

    const sendRequest = async (input) => {
      const response = await fetch("api/user/login", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Bad request. Check server");
      }

      return response.json();
    };

    try {
      const result = await sendRequest(input);
      console.log(result);
      if (result.status) {
        dispatch(setSuccess(result.message));
        dispatch(setUserLogin(result.username));
        dispatch(resetUIState());
        dispatch(resetEntry());
      } else {
        dispatch(setError(result.message));
      }
    } catch (error) {
      dispatch(setError());
    }
  };
};

export const register = (input) => {
  return async (dispatch) => {
    dispatch(setLoading());

    const sendRequest = async (input) => {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error("Bad request. Check server");
      }

      return response.json();
    };

    try {
      const result = await sendRequest(input);
      console.log(result);
      if (result.status) {
        dispatch(setSuccess(result.message));
        dispatch(setUserLogin(result.username));
        dispatch(resetUIState());
        dispatch(resetEntry());
      } else {
        dispatch(setError(result.message));
      }
    } catch (error) {
      dispatch(setError());
    }
  };
};

export const { setUserLogout, setUserLogin } = authSlice.actions;

export default authSlice.reducer;
