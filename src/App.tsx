import Navbar from "./components/Navbar";
import CoinPage from "./pages/CoinPage";
import './index.css'; // Import Tailwind CSS


function App() {
  return (
    <div className="m-0 p-0"> {/* Apply margin: 0 and padding: 0 */}
       <Navbar/>
       <CoinPage/>
       
    </div>
  );
}

export default App;