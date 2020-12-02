import axios from 'axios';

export const getShops = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  })
  axios
    .get("https://mern-app-front.herokuapp.com/getShops/")
    .then((res) => {
      dispatch({
        type: "GET_SHOPS",
        payload: res.data,
      });
      dispatch({
        type: "UNLOADING"
      });
    })
    .catch((err) => {
      dispatch({
        type: "ERR",
        payload: err,
      });
      dispatch({
        type: "UNLOADING"
      });
    });
};

export const getItems = (id) => (dispatch) => {
  dispatch({
    type: "LOADING",
  })
  axios
    .get("https://mern-app-front.herokuapp.com/" + id + "/items")
    .then((res) => {
      dispatch({
        type: "GET_ITEMS",
        payload: res.data.shopItems,
      });
      dispatch({
        type: "UNLOADING"
      });
    })
    .catch((err) => {
      dispatch({
        type: "ERR",
        payload: err,
      });
      dispatch({
        type: "UNLOADING"
      });
    });
};

export const getMenuInfo = (id) => (dispatch) => {
  dispatch({
    type: "LOADING",
  })
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
      dispatch({
        type: "UNLOADING"
      });
    })
    .catch((err) => {
      dispatch({
        type: "ERR",
        payload: err,
      });
      dispatch({
        type: "UNLOADING"
      });
    });
};

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: "ADD_ITEM",
    payload: item,
  });
}

export const incItemQuantity = (id) => (dispatch) => {
  dispatch({
    type: "PLUS",
    payload: id,
  });
}

export const decItemQuantity = (id) => (dispatch) => {
  dispatch({
    type: "MINUS",
    payload: id,
  });
}