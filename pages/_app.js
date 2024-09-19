
import "@/styles/globals.css";
import { CartProvider } from "context/CartContext";
import Layout from "layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Layout>
  );

  
}


