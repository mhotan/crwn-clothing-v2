import { CART_ACTION_TYPES } from "./cart.types";

const CART_INTITIAL_STATE = {
  cart: [],
  isCartOpen: false,
};

export function cartReducer(state = CART_INTITIAL_STATE, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cart: payload };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
}
