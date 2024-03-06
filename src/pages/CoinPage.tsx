import About from "../components/About";
import CradsPromo from "../components/CradsPromo";
import Crypto from "../components/Crypto";
import Footer from "../components/Footer";
import PageHolder from "../components/PageHolder";
import Percentage from "../components/Percentage";
import PerformanceSection from "../components/PerformanceSection";
import Sentiment from "../components/Sentiment";
import Team from "../components/Team";
import ToggleSection from "../components/ToggleSection";
import Tokenomics from "../components/Tokenomics";
import TrendingCoins from "../components/TrendingCoins";
import Trendings from "../components/Trendings.tsx";
import { useState, useEffect } from 'react';

function CoinPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as per your design
    };

    window.addEventListener('resize', handleResize);

    // Initial check on load
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-full w-screen bg-slate-200/40">
      <PageHolder />

      <div className="w-screen flex">
        <div className="w-8/12 ml-14">
          <Crypto />
          <ToggleSection />
          <PerformanceSection />
        </div>
        {!isMobile && (
          <div className="w-4/12 mr-14">
            <div className="">
              <CradsPromo />
            </div>
            <div className="">
              <TrendingCoins />
            </div>
          </div>
        )}
      </div>
      <Sentiment />
      <Percentage />
      <About />
      {!isMobile && <Tokenomics />}
      <Team />
      <Footer />
      <Trendings />
      {isMobile && (
        <div className="w-full flex flex-col justify-between">
          <div className="w-8/12">
            <CradsPromo />
          </div>
          <div className="w-10/12">
            <TrendingCoins />
          </div>
        </div>
      )}
      
    </div>
  );
}

export default CoinPage;