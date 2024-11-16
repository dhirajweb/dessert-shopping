export const getProductQtyInCart = (cart, productName) => {
  const product = cart?.find((product) => product.product_name === productName);
  return product ? product.product_qty : 0;
};
