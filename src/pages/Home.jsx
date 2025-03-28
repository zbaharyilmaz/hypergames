import { useState, useContext } from "react";
import { ProductPage } from "../context/ProductContext";
import ProductCard from "../components/organisms/ProductCard";
const Home = () => {
  const { products, setProducts, loading, search, setSearch } =
    useContext(ProductPage);

  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <div className="bg-color-light dark:bg-color-dark min-h-screen w-full owerflow-x-hidden p-1">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row w-2/4 justify-center items-center m-auto my-12"
      >
        <input
          type="text"
          placeholder="games"
          className="w-3/5 p-2 border-b-2 border-gray-400 focus:border-blue-400 dark:border-gray-500 dark:focus:border-color-light bg-transparent outline-none text-black dark:text-color-lightgrey"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="m-2 px-4 py-2 text-xs w-15 bg-color-darkred text-white rounded-md hover:bg-color-anthracite">
          Search
        </button>
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center overflow-x-hidden p-2">
        {loading ? (
          <div className="flex justify-center">
            <div className="loading-text text-center ml-60 w-1/4">
              <span className="letter text-color-blue">L</span>
              <span className="letter text-color-blue">o</span>
              <span className="letter text-color-blue">a</span>
              <span className="letter text-color-blue">d</span>
              <span className="letter text-color-blue">i</span>
              <span className="letter text-color-blue">n</span>
              <span className="letter text-color-blue">g</span>
              <span className="letter text-color-blue">.</span>
              <span className="letter text-color-blue">.</span>
              <span className="letter text-color-blue">.</span>
            </div>
          </div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productID} {...product} />
          ))
        ) : (
          <div className="flex justify-center">
            <div className="loading-text text-center ml-60 w-1/4">
              <span className="letter text-color-blue">N</span>
              <span className="letter text-color-blue">o</span>
              <span className="letter text-color-blue">t</span>
              <span className="letter text-color-blue"> </span>
              <span className="letter text-color-blue">F</span>
              <span className="letter text-color-blue">o</span>
              <span className="letter text-color-blue">u</span>
              <span className="letter text-color-blue">n</span>
              <span className="letter text-color-blue">d</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
