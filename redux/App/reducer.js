import * as types from "./actionTypes";
import { initialState } from "./initialState";

export const reducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);

  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };

    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
