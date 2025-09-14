import { useEffect, useState } from "react";
import { createContext } from "react";
import { mockGames } from "../data/games";

export const ProductPage = createContext();
const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const takeProducts = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Pagination logic for mock data
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedGames = mockGames.slice(startIndex, endIndex);

      setProducts(paginatedGames);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    takeProducts();
  }, [page]);
  return (
    <ProductPage.Provider
      value={{
        products,
        setProducts,
        search,
        setSearch,
        loading,
        setLoading,
        page,
        setPage,
      }}
    >
      {children}
    </ProductPage.Provider>
  );
};

export default ProductContext;
