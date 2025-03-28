const ProductCard = ({
  productName,
  productData,
  marketPrice,
  salePrice,
  regionList,
  productID,
  customerStoreProductID,
}) => {
  return (
    <div
      className="card shadow-lg rounded-lg p-2 overflow-hidden min-w-[200px] max-w-[250px] w-full h-[440px] transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      id="container"
    >
      <img
        loading="lazy"
        src={productData.productMainImage}
        alt=""
        className="w-full h-64 object-contain"
      />
      <div className="p-2 text-gray-300 text-xs sm:text-sm md:text-base">
        <h3 className=" text-center font-semibold text-white text-xs sm:text-sm md:text-base ">
          {productName}
        </h3>
        <p className="text-white p-1 bg-gray-800 rounded-md text-xs sm:text-sm md:text-base lg:text-base text-center mt-1 absolute bottom-0 left-0 right-0">
          Price:{salePrice}
        </p>
      </div>
      <div className="card-over custom-scrollbar p-2">
        <h2 className="text-color-darkred text-lg"></h2>
        <p>{productData.productInfo}</p>
      </div>
    </div>
  );
};

export default ProductCard;
