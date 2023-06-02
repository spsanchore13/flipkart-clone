import * as types from "./actionTypes";

const getProductsRequest = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};

const getProductsSuccess = (payload) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload: payload,
  };
};

const getProductsFailure = (payload) => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
    payload: payload,
  };
};

export { getProductsRequest, getProductsSuccess, getProductsFailure };
