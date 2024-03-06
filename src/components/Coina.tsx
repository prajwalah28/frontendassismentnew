import React from "react";
import { Link } from "react-router-dom";
import { CurrencyFormat } from "../CurrencyFormat/CurrencyFormat";
import { TrendingDown, TrendingUp } from "../Icons/Icons";
import { Sparklines, SparklinesLine } from 'react-sparklines';

const SparklineChart = ({ data }) => {
  return (
    <Sparklines data={data} width={100} height={20}>
      <SparklinesLine color="blue" />
    </Sparklines>
  );
};

const Coina = ({ coin }) => {
  console.log(coin);
  return (
    <div className="coin-container border border-gray-300 rounded-md p-4 mb-4">
      <div className="coin-wrapper flex items-center justify-between">
        <div className="icon-container">
          <img src={coin.image} alt={coin.name} className="w-12 h-12 mr-2" />
          <div>
            <p className="text-lg font-semibold">{coin.name}</p>
            <span className="text-gray-500">({coin.symbol})</span>
          </div>
        </div>
        
        <div className="current-price-container">
          <span className="text-xl font-semibold">${coin.current_price}</span>
        </div>

        <div className="coin-currentPrice-container hidden md:block">
          <div className="current-price-icon flex items-center">
            {coin.price_change_percentage_24h < 0 ? (
              <TrendingDown className="text-red-500" />
            ) : (
              <TrendingUp className="text-green-500" />
            )}
            <span className={`${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>{coin.price_change_percentage_24h}</span>
          </div>
        </div>
        
        <div className="sparkline-container">
          <SparklineChart data={coin.sparkline_data} />
        </div>
        
      </div>
    </div>
  );
};

export default Coina;
