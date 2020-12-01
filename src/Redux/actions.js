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

export const getItems = (id) => (dispatch) => {
  axios
    .get("https://mern-app-front.herokuapp.com/" + id + "/items")
    .then((res) => {
      dispatch({
        type: "GET_ITEMS",
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

export const getMenuInfo = (id) => (dispatch) => {
  axios
    .post("https://mern-app-front.herokuapp.com/getShopName", { id })
    .then((res) => {
      dispatch({
        type: "GET_MENU_INFO",
        payload: {
          name: res.data.name,
          photoURL: res.data.photoURL,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: "ERR",
        payload: err,
      });
    });
};