const ProductCard = ({
  productName,
  productData,
  marketPrice,
  salePrice,
  regionList,
  productID,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (currentUser) {
      navigate("/details/" + productID);
      console.log(productID);
    } else {
      navigate("/login");
    }
  };
  // window.location.href = `/product/${productID}`;
  return (
    <div
      className="card shadow-lg rounded-lg p-2 overflow-hidden max-w-[300px] w-full h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] transition-transform duration-300 transform hover:scale-10 cursor-alias"
      id="container"
      onClick={handleClick}
    >
      <img
        loading="lazy"
        src={productData.productMainImage}
        alt=""
        className="w-full h-64 object-cover"
      />
      <div className="md:flex-nowrap items-baseline p-2 text-color-lightgrey md:text-[18px] sm: text-sm">
        <h3 className=" absolute text-center">{productName}</h3>
        <p className=" text-white p-2 bottom-0 right-0 absolute">
          Price:{salePrice}
        </p>
      </div>
      <div className="card-over custom-scrollbar p-2">
        <h2 className="text-color-darkred text-lg">Overview</h2>
        <p>{productData.productInfo}</p>
      </div>
    </div>
  );
};

export default ProductCard;
