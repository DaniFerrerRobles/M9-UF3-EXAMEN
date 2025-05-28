import "./globals.css";
import Link from "next/link";
import Pricing from "./paginas/Pricing/Page";
import Docs from "./paginas/Docs/Page.jsx";
import  Header  from "./components/Header.jsx";
import Footer from "./components/Footer";

export default function RootLayout({ children } ) {
  return (
    <html lang="es">
      <body>
        <header>
          <Header />
        </header>

        <main>
          
        </main>

        <footer className="mt-190">
          <Footer/>
        </footer>          
      </body>
    </html>
  );
}