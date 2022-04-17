import { useDispatch, useSelector } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

import {
  addCartItemAction,
  removeCartItemAction,
  clearCartItemAction,
} from "../../store/cart/cart.action";

import { selectCart } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCart);
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItemHandler = () => {
    dispatch(clearCartItemAction(cartItems, cartItem));
  };
  const addItemHandler = () => {
    dispatch(addCartItemAction(cartItems, cartItem));
  };
  const removeItemHandler = () => {
    dispatch(removeCartItemAction(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
