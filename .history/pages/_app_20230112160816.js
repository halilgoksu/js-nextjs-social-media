import "../styles/globals.css";
import Layout from "../components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//props olarak 
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Layout>
  );
}
//ToastContainer  ana sayfada import ettik 
//neden mi ? 
//Layout prop borusundan 

export default MyApp;
