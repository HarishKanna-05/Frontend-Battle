import LandingPage from "./components/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Members from "./components/Members";
import Events from "./components/Events";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="">
        {/* <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<Members />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <LandingPage />
        <Members />
        <Events />
        <Footer />
      </div>
    </>
  );
}

export default App;
