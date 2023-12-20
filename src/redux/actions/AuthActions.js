import axios from 'axios';
import * as actionTypes from '../actionTypes';
import {API_URL} from '../../config';

export const register = payload => dispatch => {
  return new Promise((reslove, reject) => {
    dispatch({
      type: actionTypes.USER_REGISTER_INIT,
    });
    axios
      .post(`${API_URL}/users`, payload, {})
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: actionTypes.USER_REGISTER_SUCCESS,
            payload: res?.data,
          });
          reslove(res);
        } else {
          dispatch({
            type: actionTypes.USER_REGISTER_FAIL,
            payload: res?.data?.message || 'Failed to update profile!',
          });
        }
      })
      .catch(error => {
        if (error?.response?.status === 400) {
          dispatch({
            type: actionTypes.USER_REGISTER_FAIL,
            payload: error?.response?.data?.message,
          });
        } else if (error?.response?.status === 401) {
          localStorage.clear();
          window.location.replace('/');
        }
      });
  });
};
