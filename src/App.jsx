import { ToastContainer } from "react-toastify";
import AppRouter from "../src/router/AppRouter";
import AuthContext from "./context/AuthContext";
import ProductContext from "./context/ProductContext";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
      <AuthContext>
        <ProductContext>
        <ToastContainer />
        <AppRouter />
        </ProductContext>
      </AuthContext>
      </ErrorBoundary>
    </div>
  );
}

export default App;
