import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Footer from "./components/Footer";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Journal from "./components/Journal/Journal";
import Cart from "./components/Cart/Cart"
import {Api} from "./components/ContextApi.jsx/Api";

function App() {
  return (
    <div>
   <Api>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Journal" element={<Journal />}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        <Footer />
      </Router>
      </Api>
   
    </div>
  );
}

export default App;
