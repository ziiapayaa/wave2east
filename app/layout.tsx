import './globals.css';

export const metadata = {
  title: 'T-Shirt Catalog',
  description: 'A simple T-shirt catalog built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
