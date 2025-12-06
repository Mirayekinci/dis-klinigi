import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <BrowserRouter>
      <div style={appStyle}>

        <nav style={navStyle}>
          <div>Diş Kliniği</div>
          <div style={linkContainerStyle}>
            <Link to="/" style={linkStyle}>Ana Sayfa</Link>
            <Link to="/services" style={linkStyle}>Hizmetler</Link>
            <Link to="/doctors" style={linkStyle}>Doktorlarımız</Link>
            <Link to="/appointment" style={linkStyle}>Randevu</Link>
            <Link to="/contact" style={linkStyle}>İletişim</Link>
          </div>
        </nav>
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hizmet-detay/:id" element={<ServiceDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const appStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#ffffffff",
  minHeight: "100vh",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  backgroundColor: "#005691",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
};

const linkContainerStyle = {
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const contentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
};

export default App;