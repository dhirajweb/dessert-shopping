import Card from './Card';

const ProductCards = ({ products }) => {
  return (
    <div>
      <h1 className="text-[#250e08] text-5xl font-bold">Desserts</h1>
      <ul className="gap-3 grid grid-cols-12">
        {products.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductCards;
