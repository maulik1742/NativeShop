import * as actionTypes from '../actionTypes';

const initState = {
  products: [],
};

const store = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action?.payload,
      };
    default:
      return state;
  }
};

export default store;
