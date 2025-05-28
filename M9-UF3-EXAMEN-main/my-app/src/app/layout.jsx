import "./globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <Header />
        </header>

        <main>
          {children}
        </main>

        <footer className="mt-190">
          <Footer />
        </footer>          
      </body>
    </html>
  );
}