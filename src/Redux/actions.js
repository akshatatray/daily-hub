import axios from 'axios';

export const getShops = () => (dispatch) => {
  axios
    .get("https://mern-app-front.herokuapp.com/getShops/")
    .then((res) => {
      dispatch({
        type: "GET_SHOPS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "ERR",
        payload: err,
      });
    });
};