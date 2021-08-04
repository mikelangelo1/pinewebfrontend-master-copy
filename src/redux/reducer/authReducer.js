import {
    REGISTER_SUCCESS,
    //REGISTER_FAIL,
    SET_CURRENT_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    //LOGIN_FAIL,
    LOGOUT,
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    currentUser: null
  };
  
  function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          currentUser: payload
        };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case AUTH_ERROR:
      case LOGOUT:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null
        };
      default:
        return state;
    }
  }
  
  export default authReducer;
  