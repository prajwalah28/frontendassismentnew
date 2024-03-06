import React from "react";
import useAxios from "../hooks/useAxios";
import Coina from "./Coina";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
  // Fetching market data for coins using the useAxios
  const { response, loading, error } = useAxios(
    `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
  );

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
    <div>
      <h1 className="text-black text-xl font-bold mt-2">You May Also Like</h1>
      <div className="Markets-container">
      {error && <div></div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Slider {...settings}>
          {response &&
            response.map((coin) => (
              <div key={coin.id}>
                <Coina coin={coin} />
              </div>
            ))}
        </Slider>
      )}
    </div>
    </div>
    
  );
};

export default Footer;
