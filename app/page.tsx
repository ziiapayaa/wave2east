"use client";

import { useState } from "react";
import { products } from '../data/products';
import './globals.css';~

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);~~
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < selectedProduct.images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : selectedProduct.images.length - 1
      );
    }
  };

  return (
    <div>
      <section className="text-center py-8">
      <h2 className="text-3xl font-extrabold text-gray-800">Our Latest Products</h2>
        <p className="text-gray-600 mt-2">Find the perfect product for your style and comfort.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 max-w-xs mx-auto cursor-pointer"
            onClick={() => openModal(product)}
          >
            <div className="w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">Rp{product.price.toLocaleString("id-ID")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}