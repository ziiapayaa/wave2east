export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <h1 className="text-2xl font-bold text-blue-600">T-Shirt Catalog</h1>
          </div>
        </header>
        <main className="container mx-auto py-6 px-6">{children}</main>
        <footer className="bg-gray-100 py-6 mt-10">
          <div className="container mx-auto text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} T-Shirt Store. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
