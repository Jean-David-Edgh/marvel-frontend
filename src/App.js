import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/comics" element={<Comics />} />
        <Route path="/personnages" element={<Personnages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
