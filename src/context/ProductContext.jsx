import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const ProductPage = createContext();
const ProductContext = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_API_TOKEN;
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(0);
  // const[pageSize, setPageSize]= useState(12);
  const page = 1;
  const pageSize = 12;

  const takeProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}Products/List?page=${page}&pageSize=${pageSize}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    takeProducts();
  }, [search]);
  return (
    <ProductPage.Provider
      value={{ products, setProducts, search, setSearch, loading, setLoading }}
    >
      {children}
    </ProductPage.Provider>
  );
};

export default ProductContext;
