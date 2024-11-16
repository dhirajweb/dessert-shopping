const OrderTotal = ({ total }) => {
  return (
    <div className="flex justify-between items-center my-8">
      <p className="text-[#250e08] text-md font-normal">Order Total</p>
      <span className="text-2xl lg:text-3xl font-bold">
        ${parseFloat(total).toFixed(2)}
      </span>
    </div>
  );
};

export default OrderTotal;
