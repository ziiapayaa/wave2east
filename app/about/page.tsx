import './globals.css';

export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center p-6 bg-white shadow-md rounded-lg max-w-3xl"></div>
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
        Founded in 2013 by Mohan Hazian, Thanksinsomnia is a local clothing brand that focuses on simple and iconic designs, 
        combining graffiti artwork with a touch of street style. We offer a variety of products ranging from clothing, 
        accessories, to other unique items that reflect creativity and innovation.
        Since the beginning, we have been committed to presenting exclusive products with limited stock, giving pride 
        to our customers. Collaboration with various brands and entities, both local and international, is part of 
        our strategy to continue to grow and bring something new to the fashion community.
        Apart from focusing on products, we are also active in social activities. In 2019, together with other brands, 
        we donated sales proceeds to orphans as part of our corporate social responsibility.
        By utilizing social media effectively, we have built a solid community and continue to innovate in every product we offer. 
        Thank you for being part of our journey.
        </p>
      </div>
    );
  }
  