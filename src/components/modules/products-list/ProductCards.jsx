import ShimmerCard from '../../common/ShimmerCard';
import Card from './Card';

const ProductCards = ({ products }) => {
  return (
    <div>
      <h1 className="text-[#250e08] text-5xl font-bold">Desserts</h1>
      {products.length > 0 ? (
        <ul className="gap-3 grid grid-cols-12">
          {products.map((product) => (
            <Card key={product.name} product={product} />
          ))}
        </ul>
      ) : (
        <div className="gap-3 grid grid-cols-12">
          {Array.from({ length: 9 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCards;
