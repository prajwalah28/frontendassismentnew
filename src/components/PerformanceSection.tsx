import axios from 'axios';
import { useEffect, useState } from 'react';

const PerformanceSection = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setResponse(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {}; // Clean-up function
  }, [url]);

  return { response, error, loading };
};

const Table = () => {
  const { response, error, loading } = PerformanceSection({
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const bitcoinData = response && response.length > 0 ? response[0] : null;

  if (!bitcoinData) {
    return <p>No data available for Bitcoin</p>;
  }

  const attributesGroup1 = {
    "Bitcoin Price": bitcoinData.current_price,
    "24h Low/24h High": `${bitcoinData.low_24h}/${bitcoinData.high_24h}`,
    "7d Low/7d High": `${bitcoinData.ath}/${bitcoinData.atl}`,
    "Trading Volume": bitcoinData.total_volume,
    "Market Cap Rank": bitcoinData.market_cap_rank
  };

  const attributesGroup2 = {
    "Market Cap": bitcoinData.market_cap,
    "Market Cap Dominance": bitcoinData.market_cap_change_percentage_24h,
    "Volume/Market Cap": bitcoinData.total_volume / bitcoinData.market_cap,
    "All-Time High": bitcoinData.ath,
    "All-Time Low": bitcoinData.atl,
  };

  return (

    <div className="Markets-container bg-gray-100 py-8">
      <div className="text-2xl font-semibold text-[#0F1629]">Performance</div>
        <div className="py-4 mt-2">
          <div className="flex justify-between ">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today’s Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                46,930.22
              </div>
            </div>
            <div className="w-[500px] h-2">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
              <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">
                <svg
                  viewBox="0 0 100 100"
                  className="w-3 fill-current text-black ml-7"
                >
                  <polygon points="0,100 50,0 100,100" />
                </svg>
                <span className="text-[#44475B] text-sm font-normal">
                  $47,137.83
                </span>
              </div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1 ">
                Today’s High
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,343.83
              </div>
            </div>
          </div>
          <div className="flex justify-between  mt-5">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                16,930.22{" "}
              </div>
            </div>
            <div className="w-[500px] h-2">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W High{" "}
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,743.83{" "}
              </div>
            </div>
          </div>
        </div>

      <h2 className="text-2xl font-bold text-center mb-4">Markets</h2>
      <div className="Markets-wrapper-container max-w-screen-lg mx-auto">
        <div style={{ display: 'flex' }}>
          <div>
            <table className="w-full mb-8">
              <tbody>
                {Object.entries(attributesGroup1).map(([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="py-2 px-4 font-semibold">{key}</td>
                    <td className="py-2 px-4">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <table className="w-full">
              <tbody>
                {Object.entries(attributesGroup2).map(([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="py-2 px-4 font-semibold">{key}</td>
                    <td className="py-2 px-4">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;