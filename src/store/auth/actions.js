import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
    appLoading,
    appDoneLoading,
    showMessageWithTimeout,
    setMessage
  } from "../appState/actions";
  import { selectToken, selectUser } from "./selectors";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_TOKEN = "LOGIN_TOKEN";
export const LOG_OUT = "LOG_OUT";

  const loginSuccess = userWithToken => {
    return {
      type: LOGIN_SUCCESS,
      payload: userWithToken
    };
  };

  export function loginToken(user, token) {
    return {
        type: "LOGIN_TOKEN",
        payload: {user, token }
      };
}

export const logOut = () => ({ type: LOG_OUT });


export const login = (email, password) => {
    return async (dispatch, getState) => {
      dispatch(appLoading());
      try {
        const response = await axios.post(`${apiUrl}/auth/login`, {
          email,
          password
        });
        console.log("Login response", response)
        const splitName = response.data.fullName.split(" ")
        console.log("SPLIT NAME", splitName)
        dispatch(loginSuccess(response.data));
        dispatch(showMessageWithTimeout("success", false, `Welcome back ${splitName[0]}!`, 5000));
        dispatch(appDoneLoading());
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error.message);
          dispatch(setMessage("danger", true, error.message));
        }
        dispatch(appDoneLoading());
      }
    };
  };

export const signUp = (fullName, email, password, address) => {
    return async (dispatch, getState) => {
      dispatch(appLoading());
      try {
        const response = await axios.post(`${apiUrl}/signup`, {
          fullName,
          email,
          password,
          address
        });
  
        dispatch(loginSuccess(response.data));
        dispatch(showMessageWithTimeout("success", true, "Your account has been created!"));
        dispatch(appDoneLoading());
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error.message);
          dispatch(setMessage("danger", true, error.message));
        }
        dispatch(appDoneLoading());
      }
    };
  };

  export const getUserWithStoredToken = () => {
    return async (dispatch, getState) => {
      // get token from the state
      const token = selectToken(getState());
  
      // if we have no token, stop
      if (token === null) return;
  
      dispatch(appLoading());
      try {
        // if we do have a token,
        // check wether it is still valid or if it is expired
        const response = await axios.get(`${apiUrl}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
  
        // token is still valid
        dispatch(loginToken(response.data));
        dispatch(appDoneLoading());
      } catch (error) {
        if (error.response) {
          console.log(error.response.message);
        } else {
          console.log(error);
        }
        // if we get a 4xx or 5xx response,
        // get rid of the token by logging out
        dispatch(logOut());
        dispatch(appDoneLoading());
      }
    };
  };

