import { useContext, useState } from 'react';
import CartContext from '../../../context/CartContext';
import PrimaryBtn from '../../common/PrimaryBtn';
import CartItems from './CartItems';
import OrderConfirmation from '../../modals/OrderConfirmation';
import OrderTotal from './OrderTotal';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const getCartTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.product_qty * item.product_price,
      0
    );
  };

  const handleOnConfirmOrder = () => {
    setIsOrderConfirmed(true);
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded-md mt-10">
      <h2 className="text-xl lg:text-3xl text-[#c7390e] font-bold">
        Your Cart ({cart.length})
      </h2>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center mt-20">
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt="empty cart"
            width={150}
            className="w-[150px]"
          />
          <p className="text-md lg:text-xl font-semibold text-[#8C6E6A]">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <CartItems type="cart" />
          <OrderTotal total={getCartTotal()} />
          <div className="flex justify-center items-center gap-2 p-4 my-8 bg-[#f4edea] rounded-md">
            <img
              src="./assets/images/icon-carbon-neutral.svg"
              alt="carbon-neutral"
              width={20}
              height={20}
            />
            <span className="text-sm">
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </div>
          <div className="my-8">
            <PrimaryBtn
              btnText="Confirm Order"
              onClick={handleOnConfirmOrder}
              className="w-full"
            />
          </div>
          <OrderConfirmation
            isModalOpen={isOrderConfirmed}
            setIsModalOpen={setIsOrderConfirmed}
          />
        </>
      )}
    </div>
  );
};

export default Cart;
