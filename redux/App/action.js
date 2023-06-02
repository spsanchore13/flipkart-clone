import axios from "axios";
import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "./actionCreators";

const getProducts = () => (dispatch) => {
  dispatch(getProductsRequest());

  axios(`/api/products`)
    .then((response) => {
      return dispatch(getProductsSuccess(response.data));
    })
    .catch((error) => {
      return dispatch(getProductsFailure(error));
    });
};

export { getProducts };
