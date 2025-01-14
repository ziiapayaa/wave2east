import { products } from '../data/products';
import './globals.css';

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Latest T-Shirts</h2>
        <p className="text-gray-600 mt-2">Find the perfect T-shirt for your style and comfort.</p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 w-full"
          >
            <div className="w-full aspect-w-4 aspect-h-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
