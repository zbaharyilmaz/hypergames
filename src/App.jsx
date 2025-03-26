import { ToastContainer } from "react-toastify";
import AppRouter from "../src/router/AppRouter";
import AuthContext from "./context/AuthContext";
import ProductContext from "./context/ProductContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <AuthContext>
        <ProductContext>
        <ToastContainer />
        <AppRouter />
        </ProductContext>
      </AuthContext>
    </div>
  );
}

export default App;
