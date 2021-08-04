import { combineReducers } from 'redux';
import authReducer from '../redux/reducer/authReducer';

export default combineReducers({
    auth: authReducer
})