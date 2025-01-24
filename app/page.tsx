"use client";

import { useState } from "react";
import { products, Product } from "../data/products";
import "./globals.css";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); // Mulai dari gambar pertama saat modal dibuka
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
      {/* Header */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Our Latest Products</h2>
        <p className="text-gray-600 mt-2">Find the perfect product for your style and comfort.</p>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 max-w-xs mx-auto cursor-pointer"
            onClick={() => openModal(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <span className="text-xl font-bold text-blue-600">Rp{product.price.toLocaleString("id-ID")}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg relative max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              className="absolute top-2 right-2 w-8 h-8 bg-gray-400 bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-gray-500 hover:bg-opacity-70 transition duration-300 ease-in-out z-10"
              onClick={closeModal}
            >
              <span className="text-xl font-semibold">X</span>
            </button>

            {/* Gambar dengan slide */}
            <div className="flex justify-center items-center relative">
              {/* Tombol Previous */}
              <button
                className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-400 bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-gray-500 hover:bg-opacity-70 z-10"
                onClick={prevImage}
                aria-label="Previous Image"
              >
                &#60;
              </button>

              {/* Gambar Produk */}
              <img
                src={selectedProduct.images[currentImageIndex]} // Menampilkan gambar sesuai index
                alt={selectedProduct.name}
                className="w-full h-auto rounded-md mb-4"
              />

              {/* Tombol Next */}
              <button
                className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-400 bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-gray-500 hover:bg-opacity-70 z-10"
                onClick={nextImage}
                aria-label="Next Image"
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}