import "./styles.css";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
