import instance from '../../axiosConfig';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_CURRENT_USER
} from './types';


export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})

// Register User
export const register = formData => async dispatch => {
  try {
    const res = await instance.post('/register', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(setCurrentUser());
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const body = { email, password };

  try {
    const res = await instance.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(setCurrentUser());
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
