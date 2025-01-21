import './globals.css';

export default function ContactPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
        {/* Konten Utama */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center p-6 bg-white shadow-md rounded-lg max-w-3xl">
          <h2 className="text-3xl font-extrabold text-gray-800">Contact</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
            We are always ready to help you! If you have questions regarding products, orders, or cooperation, don't hesitate to contact us using the following information:
          </p>

          {/* Kontak dengan Flexbox */}
          <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
            <span className="inline-block w-48">📍 Address</span>: <a href="https://www.google.com/maps?q=Jl+Angsana+Raya+Blok+A+6+Sektor+1.1+BSD+City,+South+Tangerang+15318" target="_blank" rel="noopener noreferrer" className="text-blue-500">Jl angsana raya blok A 6 sektor 1.1 BSD city</a> <br />
            <span className="inline-block w-48">📧 Email</span>: <a href="mailto:info@thanksinsomnia.net?subject=Inquiry%20About%20Product" target="_blank" rel="noopener noreferrer" className="text-blue-500">info@thanksinsomnia.net</a> <br />
            <span className="inline-block w-48">📞 Call/WhatsApp</span>: <a href="https://wa.me/+6287880620990" target="_blank" rel="noopener noreferrer" className="text-blue-500">087880620990</a> <br />
            <span className="inline-block w-48">🌐 Website</span>: <a href="https://thanksinsomniastore.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">thanksinsomniastore.com</a> <br />
            <span className="inline-block w-48">📸 Instagram</span>: <a href="https://instagram.com/thanksinsomnia" target="_blank" rel="noopener noreferrer" className="text-blue-500">thxnsmncatalog</a>
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
          For a faster response, you can also contact us via Direct Message on Instagram or via our WhatsApp.
          </p>
        </div>
        <footer className="fixed bottom-0 w-full text-center py-4 bg-white shadow-md text-gray-600">
          © 2025 T-Shirt Store. All Rights Reserved.
        </footer>
      </div>
    );
}
