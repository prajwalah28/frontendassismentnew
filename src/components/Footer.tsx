import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coina from "./Coina";

const Footer = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        const data = await response.json();
        setCoinsData(data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinsData();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Markets-container">
      <h1>You May Also Like</h1>
      <Slider {...settings}>
        {coinsData.map((coin) => (
          <div key={coin.id} className="px-2">
            <Coina
              symbol={coin.symbol}
              name={coin.name}
              changePercentage={coin.price_change_percentage_24h}
              price={coin.current_price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Footer;
