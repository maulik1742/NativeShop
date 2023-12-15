import * as actionTypes from '../actionTypes';
import {API_URL} from '../../config';
import axios from 'axios';
// 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
export const getAllProducts = payload => dispatch => {
  return new Promise((reslove, reject) => {
    console.log('called');
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_INIT,
    });
    axios
      .get(`https://fakestoreapi.com/products`)
      .then(res => {
        console.log('res :>> ', res);
        if (res.status === 200) {
          dispatch({
            type: actionTypes.GET_ALL_PRODUCTS_SUCCESS,
            payload: res?.data,
          });
          generatePopup('success', 'Profile update succesfully.');
          reslove(res);
        } else {
          dispatch({
            type: actionTypes.GET_ALL_PRODUCTS_FAIL,
            payload: res?.data?.message || 'Failed to update profile!',
          });
        }
      })
      .catch(error => {
        if (error?.response?.status === 400) {
          dispatch({
            type: actionTypes.GET_ALL_PRODUCTS_FAIL,
            payload: error?.response?.data?.message,
          });
        } else if (error?.response?.status === 401) {
          generatePopup('error', 'Token is invalid or expired.');
          localStorage.clear();
          window.location.replace('/');
        }
      });
  });
};
