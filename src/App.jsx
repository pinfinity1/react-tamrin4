import { Routes, Route } from "react-router-dom";
import { Home } from "./Componenet/Home";
import { Menu } from "./Componenet/Menu";
import { About } from "./Componenet/About";
import { Contact } from "./Componenet/Contact";
import { Header } from "./Componenet/Header";
import { Footer } from "./Componenet/Footer";


function App() {
  return (
    <div className="mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
