import { useContext } from "react";
import { AuthPage } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  productName,
  productData,
  marketPrice,
  salePrice,
  regionList,
  productID,
  customerStoreProductID,
}) => {
  const { currentUser } = useContext(AuthPage);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!currentUser) {
      navigate("/login");
    }
  };

  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700"
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          loading="lazy"
          src={productData.productMainImage}
          alt={productName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>

        {/* Price Badge */}
        {currentUser && (
          <div className="absolute top-3 right-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                salePrice === 0
                  ? "bg-green-500 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {salePrice === 0 ? "ÜCRETSİZ" : `${salePrice}₺`}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {productName}
        </h3>

        {/* Game Info (only for logged in users) */}
        {currentUser && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {productData.productInfo}
            </p>

            {/* Market Price (if different from sale price) */}
            {marketPrice > salePrice && salePrice > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-through">
                  {marketPrice}₺
                </span>
                <span className="text-xs bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-1 rounded-full">
                  %{Math.round(((marketPrice - salePrice) / marketPrice) * 100)}{" "}
                  İndirim
                </span>
              </div>
            )}
          </div>
        )}

        {/* Login Prompt for non-logged users */}
        {!currentUser && (
          <div className="text-center py-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Fiyatları görmek için
            </p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
              Giriş Yap
            </span>
          </div>
        )}
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;
