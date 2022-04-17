import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCart = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cart
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector([selectCart], (cart) => {
  return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
});

export const selectCartTotal = createSelector([selectCart], (cart) => {
  return cart.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
});
