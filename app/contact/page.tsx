import './globals.css';

export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center p-6 bg-white shadow-md rounded-lg max-w-3xl"></div>
        <h2 className="text-3xl font-extrabold text-gray-800">Contact</h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
            We are always ready to help you! If you have questions regarding products, orders, or cooperation, don't hesitate to contact us 
            using the following information:
        </p>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
        <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
            <span className="inline-block w-48">📍 Address</span>: 
            <a href="https://www.google.com/maps?q=Jl+Angsana+Raya+Blok+A+6+Sektor+1.1+BSD+City,+South+Tangerang+15318"
            target="_blank" rel="noopener noreferrer" className="text-blue-500"> Jl angsana raya blok A 6 sektor 1.1 BSD city</a> <br />

            <span className="inline-block w-48">📞 Call/WhatsApp</span>: 
            <a href="https://wa.me/+6287880620990" 
            target="_blank" rel="noopener noreferrer" className="text-blue-500">087880620990</a> <br /> 
            
               
        </p>
       
       </p>
      </div>
    );
  }