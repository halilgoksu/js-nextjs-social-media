import "../styles/globals.css";
import Layout from "../components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="w-screen h">
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
