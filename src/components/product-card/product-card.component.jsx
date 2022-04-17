import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { selectCart } from "../../store/cart/cart.selector";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

import { addCartItemAction } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addCartItemAction(cartItems, product));
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
