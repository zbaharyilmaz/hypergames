import { useContext, useState, useEffect } from "react";
import { ProductPage } from "../context/ProductContext";
import ProductCard from "../components/organisms/ProductCard";
import Pagination from "../components/atoms/Pagination";
import SkeletonCard from "../components/atoms/SkeletonCard";
// import HoverButton from "../components/atoms/HoverButton";
const Home = () => {
  const { products, setProducts, loading, search, setSearch } =
    useContext(ProductPage);
  const [input, setInput] = useState(search);
  const filtered = products.filter((product) =>
    product.productName.toLowerCase().includes(input.toLowerCase())
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  useEffect(() => {
    setInput(search);
  }, [search]);

  return (
    <div className="bg-color-light dark:bg-color-dark min-h-screen w-full overflow-x-hidden p-1">
      <div className="w-full max-w-2xl mx-auto my-12 px-4">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Oyun ara... 🎮"
              value={input}
              className="w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-lg hover:shadow-xl"
              onChange={(e) => setInput(e.target.value)}
            />

            {/* Search Button */}
            <button
              type="submit"
              disabled={loading}
              className="absolute inset-y-0 right-0 px-6 py-2 m-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Aranıyor...
                </div>
              ) : (
                "Ara"
              )}
            </button>
          </div>

          {/* Search Stats */}
          {filtered.length > 0 && (
            <div className="mt-3 text-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {filtered.length}
                </span>{" "}
                oyun bulundu
              </span>
            </div>
          )}
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-4 pb-20">
        {loading ? (
          // Skeleton Loading
          Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.productID} {...product} />
          ))
        ) : (
          // No Results
          <div className="col-span-full flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 mb-4 text-gray-400 dark:text-gray-600">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Oyun bulunamadı
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
              Aradığınız kriterlere uygun oyun bulunamadı. Farklı anahtar
              kelimeler deneyin.
            </p>
          </div>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
