import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";
import Hero from "./pages/Hero";
import Favoris from "./pages/Favoris";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Personnages />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/hero/:id" element={<Hero />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
