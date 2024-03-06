import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../Icons/Icons";
const CoinTrending = ({ coin }) => {
  return (
    // Link to the coin detail page using React Router
    <Link to={`/coin/${coin.id}`} className="CoinTrending-main-container">
      <div className="CoinTrending-container">
        <div className="CoinTrending-wrapper-container">
          <span>{coin.score + 1}.</span>
          <img src={coin.small} alt={coin.name} />
          <p>{coin.name}</p>
          <small>({coin.symbol})</small>
        </div>
        <div className="current-price-container">
          <span>{coin.current_price}</span>
        </div>

        <div className="coin-currentPrice-container d-none d-md-block">
          <div className="current-price-icon">
            {coin.price_change_percentage_24h < 0 ? (
              <TrendingDown />
            ) : (
              <TrendingUp />
            )}
            <span> {coin.price_change_percentage_24h}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoinTrending;
