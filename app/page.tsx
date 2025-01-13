import { products } from '../data/products';
import './globals.css';

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Latest T-Shirts</h2>
        <p className="text-gray-600 mt-2">Find the perfect T-shirt for your style and comfort.</p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
