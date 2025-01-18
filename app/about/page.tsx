import './globals.css';

export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center p-6 bg-white shadow-md rounded-lg max-w-3xl"></div>
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
          We are a company dedicated to bringing you the best T-shirt designs for every occasion. 
          Our mission is to combine comfort and style in every product we offer.
        </p>
      </div>
    );
  }
  