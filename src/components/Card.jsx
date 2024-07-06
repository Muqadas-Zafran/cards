import React from "react";
import cardData from "./Data/cards.json";
import { FcLike } from "react-icons/fc";
import { IoStar } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

function Card() {
  return (
    <div className=" bg-gray-100 w-full min-h-screen flex flex-wrap gap-6 justify-center p-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="  shadow-[#686767] bg-white w-80 sm:w-[280px] px-3 py-2 rounded-xl transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0"
        >
          <img
            src={card.imgSrc}
            alt={card.altText}
            className="h-60 sm:h-52 rounded-xl object-cover"
          />
          <div className="p-2">
            <h2 className="font-bold text-3xl sm:text-2xl mb-2">
              {card.heading}
            </h2>
            <span className="text-2xl sm:text-xl font-semibold">
              {card.price}
            </span>
            <div className="flex items-center gap-2">
              <span className=" text-xl sm:text-sm line-through opacity-75">
                {card.originalPrice}
              </span>
              <span className="font-bold text-xl sm:text-sm p-2 bg-[#AE303F]  rounded-s-2xl text-white">
                {card.discount}
              </span>
            </div>
            <div className="flex items-center mt-2 gap-1">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <p className="font-bold text-sm sm:text-xs text-gray-700">
                Best Ratings
              </p>
            </div>
            <p className="text-gray-800 text-sm sm:text-gray-600 mt-2 mb-2">
              {card.description}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-[#AE303F] hover:text-white font-semibold">
              Buy Now
            </button>
            <button className="px-3 py-2 rounded-lg bg-gray-300 hover:bg-[#AE303F] hover:text-white">
              <TiShoppingCart className="w-6" />
            </button>
            <button className="px-3 py-2 rounded-lg bg-gray-300 hover:bg-black">
              <FcLike className="w-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
