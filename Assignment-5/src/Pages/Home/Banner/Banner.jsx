import React from "react";

const Banner = () => {
  return (
    <div className="card bg-base-100 image-full w-full shadow-sm">
      <figure>
        <img className="w-full"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col items-center justify-center text-center my-auto">
        <h2 className="card-title text-4xl font-bold text-white">Shoes!</h2>
        <p className="text-white">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
};

export default Banner;
