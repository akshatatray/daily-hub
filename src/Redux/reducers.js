const initState = {
     cart: [],
     shops: [],
     items: [],
}

const reducers = (state = initState, action) => {
     switch (action.type) {
          case "GET_SHOPS":
               return { ...state, shops: action.payload };
          default:
               return state;
     }
}

export default reducers;