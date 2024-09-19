import "@/styles/globals.css";
import { CartProvider } from "../component/context/CartContext";
import Layout from "layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
