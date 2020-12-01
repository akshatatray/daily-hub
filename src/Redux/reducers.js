const initState = {
     cart: [],
     shops: [],
     items: [],
};

const reducers = (state = initState, action) => {
     switch (action.type) {
          case "GET_SHOPS":
               return { ...state, shops: action.payload };
          case "GET_ITEMS":
               return { ...state, items: action.payload };
          case "GET_MENU_INFO":
               return { ...state, menuInfo: action.payload };
          case "ADD_ITEM":
               return { ...state, cart: [...state.cart, action.payload] };
          case "PLUS":
               for (let i = 0; i < state.cart.length; i += 1) {
                    if (state.cart[i].id === action.payload) {
                         state.cart[i].quantity += 1;
                    }
               }
               return { ...state, cart: [...state.cart] };
          case "MINUS":
               for (let i = 0; i < state.cart.length; i += 1) {
                    if (state.cart[i].id === action.payload) {
                         if (state.cart[i].quantity === 1) {
                              state.cart.splice(i, 1);
                              return { ...state, cart: [...state.cart], };
                         } else {
                              state.cart[i].quantity -= 1;
                         }
                    }
               }
               return { ...state, cart: [...state.cart], };
          default:
               return state;
     }
}

export default reducers;