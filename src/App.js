import "./styles.css";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Booking from "./routes/Booking";
import Training from "./routes/Training";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </div>
  );
};

export default App;
