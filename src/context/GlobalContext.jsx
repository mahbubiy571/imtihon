import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  cart: [],
  totalPrice: 0,
};

function reducer(state, action) {
  let updatedCart;
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, amount: 1 }];
      }
      return {
        ...state,
        cart: updatedCart,
        totalPrice: updatedCart.reduce(
          (sum, item) => sum + item.price * item.amount,
          0
        ),
      };
    }

    case "INCREASE_AMOUNT":
      updatedCart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: updatedCart.reduce(
          (sum, item) => sum + item.price * item.amount,
          0
        ),
      };

    case "DECREASE_AMOUNT":
      updatedCart = state.cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item
        )
        .filter((item) => item.amount > 0);
      return {
        ...state,
        cart: updatedCart,
        totalPrice: updatedCart.reduce(
          (sum, item) => sum + item.price * item.amount,
          0
        ),
      };

    case "PRODUCT_AMOUNT":
      updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: action.payload.amount }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: updatedCart.reduce(
          (sum, item) => sum + item.price * item.amount,
          0
        ),
      };

    default:
      return state;
  }
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ cart: state.cart, dispatch, totalPrice: state.totalPrice }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
