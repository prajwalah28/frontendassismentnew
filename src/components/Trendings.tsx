import React, { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Coina from "./Coina";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trendings = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const data = await response.json();
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="Markets-container">
      <h1>Trending</h1>
      <Slider {...settings}>
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="w-full px-2">
            <Coina coin={coin.item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trendings;
