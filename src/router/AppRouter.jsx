import Navbar from "../components/organisms/Navbar";  
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/organisms/Footer";   

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:productID" element={<PrivateRouter />}>
          <Route path="" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
