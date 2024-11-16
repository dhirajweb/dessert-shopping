import { useContext } from 'react';
import SingleCartItem from './SingleCartItem';
import CartContext from '../../../context/CartContext';

const CartItems = ({ type }) => {
  const { cart } = useContext(CartContext);
  return (
    <ul className="h-[300px] overflow-auto my-4 scrollbar">
      {cart.map((product) => (
        <SingleCartItem
          key={product.product_name}
          product={product}
          alignPriceOnRight={type === 'cart' ? false : true}
          showRemoveBtn={type === 'cart' ? true : false}
          showProductImage={type === 'cart' ? false : true}
        />
      ))}
    </ul>
  );
};

export default CartItems;
