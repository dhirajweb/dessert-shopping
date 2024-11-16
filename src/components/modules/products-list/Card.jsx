import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../context/CartContext';
import { getProductQtyInCart } from '../../../utils/getProductQtyinCart';

const Card = ({ product }) => {
  const {
    cart,
    handleAddProduct,
    handleRemoveProduct,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
  } = useContext(CartContext);
  const [productQtyInCart, setProductQtyInCart] = useState(0);

  useEffect(() => {
    let product_qty = getProductQtyInCart(cart, product.name);
    setProductQtyInCart(product_qty);
  }, [cart]);

  return (
    <li className="flex justify-center flex-col mt-8 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-3">
      <div
        className={`relative w-full mb-8 rounded-md ${
          productQtyInCart > 0 ? 'border-[3px] border-[#c7390e]' : ''
        }`}
      >
        <picture>
          <source media="(min-width:1440px)" srcSet={product.image.desktop} />
          <source media="(min-width:375px)" srcSet={product.image.mobile} />
          <img
            src={product.image.desktop}
            alt={product.name}
            width="100%"
            height={200}
            className="rounded-md"
          />
        </picture>
        {productQtyInCart ? (
          <div className="absolute flex bg-[#c7390e] text-white border-[#c7390e] left-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-2 justify-between items-center rounded-full w-[150px] gap-2 font-semibold">
            {productQtyInCart === 1 ? (
              <button
                className="p-2"
                onClick={() => handleRemoveProduct(product.name)}
              >
                <img
                  src="./assets/images/icon-decrement-quantity.svg"
                  alt="decrease quantity"
                />
              </button>
            ) : (
              <button
                className="p-2"
                onClick={() => handleDecreaseProductQty(product.name)}
              >
                <img
                  src="./assets/images/icon-decrement-quantity.svg"
                  alt="decrease quantity"
                />
              </button>
            )}

            <span>{productQtyInCart}</span>
            <button
              className="p-2"
              onClick={() => handleIncreaseProductQty(product.name)}
            >
              <img
                src="./assets/images/icon-increment-quantity.svg"
                alt="increase quantity"
              />
            </button>
          </div>
        ) : (
          <button
            className="absolute flex bg-white border text-[#250e08] border-[#c7390e] left-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-2 items-center rounded-full w-max gap-2 font-semibold hover:brightness-90 active:shadow-lg transform active:scale-90 transition-transform"
            onClick={() => handleAddProduct(product)}
          >
            <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
            Add to Cart
          </button>
        )}
      </div>

      <span className="text-[#ad8984] text-[12px]">{product.category}</span>
      <span className="text-[#250e08] text-[16px] font-semibold">
        {product.name}
      </span>
      <span className="text-[#c7390e] text-[16px] font-semibold">
        ${parseFloat(product.price).toFixed(2)}
      </span>
    </li>
  );
};

export default Card;
