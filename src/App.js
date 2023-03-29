import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./HomeScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
