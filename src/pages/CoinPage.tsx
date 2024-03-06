import About from "../components/About";
import CradsPromo from "../components/CradsPromo";
import Crypto from "../components/Crypto";
import Footer from "../components/Footer";
import PageHolder from "../components/PageHolder";
import PerformanceSection from "../components/PerformanceSection";
import Sentiment from "../components/Sentiment";
import Team from "../components/Team";
import ToggleSection from "../components/ToggleSection";
import Tokenomics from "../components/Tokenomics";
import TrendingCoins from "../components/TrendingCoins";
import Trendings from "../components/Trendings";

function CoinPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <PageHolder />

      <div className="w-screen flex">
        <div className="w-8/12 ml-14">
          <Crypto />
          <ToggleSection />
          <PerformanceSection />
        </div>
        <div className="w-4/12 mr-14">
          <CradsPromo />
          <TrendingCoins />
        </div>
      </div>
      <Sentiment/>
      <About/>
      <Tokenomics/>
       <Team/>
      <Footer/>
      <Trendings/>
    </div>
  );
}

export default CoinPage;
