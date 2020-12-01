const initState = {
     cart: [],
     shops: [],
     items: [],
}

const reducers = (state = initState, action) => {
     switch (action.type) {
          case "GET_SHOPS":
               return { ...state, shops: action.payload };
          case "GET_ITEMS":
               return { ...state, items: action.payload };
          case "GET_MENU_INFO":
               return { ...state, menuInfo: action.payload };
          default:
               return state;
     }
}

export default reducers;