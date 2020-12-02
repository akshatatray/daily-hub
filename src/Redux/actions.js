import axios from 'axios';
import firebase from 'firebase';
import { auth } from '../Firebase/Firebase';

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

export const signInWithEmail = (email, password) => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: "SIGN_IN",
        payload: user,
      });
      dispatch({
        type: "UNLOADING",
      });
    })
    .catch(err => {
      dispatch({
        type: "ERR",
        payload: err,
      });
      dispatch({
        type: "UNLOADING",
      });
    });
}

export const signInWithGoogle = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  let provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(res => {
      dispatch({
        type: "GOOGLE_SIGN_IN",
        payload: res.user,
      });
      dispatch({
        type: "UNLOADING",
      });
    })
    .catch(err => {
      dispatch({
        type: "ERR",
        payload: err,
      });
      dispatch({
        type: "UNLOADING",
      });
    });
}