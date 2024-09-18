import React from "react";

const Product = ({ product, onButtonClick }) => {
  const { image, price, name } = product;

  const handleClick = () => {
    onButtonClick({ image, price, name})
  }

  return (
    <div className="flex w-[320px] ml-1 mt-9 lg:mt-0 flex-col text-center overflow-hidden lg:w-[250px] lg:h-[300px] rounded-lg bg-[#f2ede4] lg:ml-10">
      <img src={image} alt={name} className="h-[200px] overflow-hidden" />
      <div className="flex justify-between pt-6 mb-4 font-medium">
        {" "}
        <h2 className="pr-1">{name}</h2>
        <p className="pr-1">{price}</p>
      </div>

      <button
        onClick={handleClick}
        className="bg-[#592B20] text-white pr-4 pl-4 h-9 pt-1 rounded-md font-medium"
      >
        Buy
      </button>
    </div>
  );
}

export default Product;