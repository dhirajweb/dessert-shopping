import { useContext } from 'react';
import CartContext from '../../../context/CartContext';

const SingleCartItem = ({
  product,
  alignPriceOnRight,
  showRemoveBtn,
  showProductImage,
}) => {
  const { handleRemoveProduct } = useContext(CartContext);
  return (
    <li className="flex justify-between py-8 border-b-2 border-[#e9e7e7]">
      <div className="text-md flex gap-2">
        {showProductImage && (
          <img
            src={product.product_image.thumbnail}
            alt="product image"
            width="80px"
            className="object-contain rounded-md"
          />
        )}
        <div>
          <span className="text-[#250e08] font-semibold text-md lg:text-lg mb-2 block">
            {product.product_name}
          </span>
          <div className="flex gap-3">
            <span className="text-[#c7390e] font-bold">
              {product.product_qty}x
            </span>
            <span className="text-[#C0A197] font-semibold">
              <span className="text-sm">@</span>$
              {parseFloat(product.product_price).toFixed(2)}
            </span>
            {!alignPriceOnRight && (
              <span className="text-[#9a7a75] font-bold">
                $
                {parseFloat(
                  product.product_qty * product.product_price
                ).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
      {showRemoveBtn && (
        <button
          onClick={() => handleRemoveProduct(product.product_name)}
          aria-label={`Remove ${product.product_name} from cart`}
        >
          <img
            src="./assets/images/icon-remove-item.svg"
            alt="remove item"
            width="14px"
            className="box-content p-2 mr-3 rounded-full border border-[#ad8984] hover:bg-slate-200"
          />
        </button>
      )}

      {alignPriceOnRight && (
        <span className="text-[#250e08] font-bold self-center mr-4">
          ${parseFloat(product.product_qty * product.product_price).toFixed(2)}
        </span>
      )}
    </li>
  );
};

export default SingleCartItem;
