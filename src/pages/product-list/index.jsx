import { useEffect, useReducer, useState } from 'react';
import ProductCards from '../../components/modules/products-list/ProductCards';
import CartContext from '../../context/CartContext';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_QTY,
  DECREASE_QTY,
  CLEAR_CART,
} from '../../utils/cartActions';
import Cart from '../../components/modules/cart';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(handleCart, []);

  const getProducts = async () => {
    const productsJson = await fetch('http://localhost:4000/data');
    const productsData = await productsJson.json();
    setProducts(productsData);
  };

  const handleAddProduct = (product) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };

  const handleRemoveProduct = (productName) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: productName,
    });
  };

  const handleIncreaseProductQty = (productName) => {
    dispatch({
      type: INCREASE_QTY,
      payload: productName,
    });
  };

  const handleDecreaseProductQty = (productName) => {
    dispatch({
      type: DECREASE_QTY,
      payload: productName,
    });
  };

  const handleClearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  function handleCart(cart, action) {
    switch (action.type) {
      case ADD_PRODUCT: {
        const { name, price, image } = action.payload;
        return [
          ...cart,
          {
            product_name: name,
            product_price: price,
            product_qty: 1,
            product_image: image,
          },
        ];
      }
      case REMOVE_PRODUCT: {
        return cart.filter((item) => item.product_name !== action.payload);
      }
      case INCREASE_QTY: {
        return cart.map((item) =>
          item.product_name === action.payload
            ? { ...item, product_qty: item.product_qty + 1 }
            : item
        );
      }
      case DECREASE_QTY: {
        return cart.map((item) =>
          item.product_name === action.payload
            ? { ...item, product_qty: item.product_qty - 1 }
            : item
        );
      }
      case CLEAR_CART: {
        return [];
      }
      default: {
        return cart;
      }
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="lg:container p-4 my-0 grid grid-cols-12 mx-auto py-36 gap-2 sm:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
      <CartContext.Provider
        value={{
          cart,
          handleAddProduct,
          handleRemoveProduct,
          handleIncreaseProductQty,
          handleDecreaseProductQty,
          handleClearCart,
        }}
      >
        <div className="col-span-12 lg:col-span-12 xl:col-span-8">
          <ProductCards products={products} />
        </div>
        <div className="col-span-12 lg:col-span-12 xl:col-span-4">
          {' '}
          <Cart />
        </div>
      </CartContext.Provider>
    </div>
  );
};

export default ProductList;
