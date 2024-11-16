import Modal from 'react-modal';
import CartItems from '../modules/cart/CartItems';
import PrimaryBtn from '../common/PrimaryBtn';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // width: '600px',
  },
};

Modal.setAppElement('#root');

const OrderConfirmation = ({ isModalOpen, setIsModalOpen }) => {
  const { handleClearCart } = useContext(CartContext);
  const handleStartNewOrder = () => {
    setIsModalOpen(false);
    handleClearCart();
  };
  return (
    <Modal
      isOpen={isModalOpen}
      style={customStyles}
      contentLabel="Order Confirmation Modal"
      portalClassName="order-confirmation-modal"
    >
      <div className="p-4">
        <header className="flex flex-col gap-2">
          <img
            src="./assets/images/icon-order-confirmed.svg"
            alt="order-confirmed"
            width="50px"
          />
          <p className="text-3xl font-semibold">Order Confirmed</p>
          <p className="text-[#ad8984]">We hope you enjoy your food!</p>
        </header>
        <main className="my-8 mb-16">
          <CartItems type="order-confirmation" />
        </main>
        <footer>
          <div>
            <PrimaryBtn
              btnText="Start New Order"
              onClick={handleStartNewOrder}
              className="w-full"
            />
          </div>
        </footer>
      </div>
    </Modal>
  );
};

export default OrderConfirmation;
