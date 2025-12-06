import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={heroSectionStyle}>
        <div style={overlayStyle}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px", fontWeight: "bold" }}>
            Sağlıklı Gülüşler İçin Buradayız
          </h1>
          <p style={{ fontSize: "1.3rem", marginBottom: "30px", maxWidth: "700px" }}>
            Modern teknoloji, uzman hekim kadrosu ve hijyenik kliniklerimizle
            ağız ve diş sağlığınız emin ellerde.
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
            <Link to="/appointment" style={primaryBtnStyle}>Randevu Al</Link>
            <Link to="/services" style={secondaryBtnStyle}>Tedavilerimiz</Link>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Neden Bizi Seçmelisiniz?</h2>
        <div style={cardsContainerStyle}>
          <div style={cardStyle}>
            <div style={iconStyle}>👨‍⚕️</div>
            <h3>Uzman Kadro</h3>
            <p style={{ color: "#666" }}>Alanında deneyimli ve sürekli gelişimi takip eden diş hekimleri.</p>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>✨</div>
            <h3>Hijyenik Ortam</h3>
            <p style={{ color: "#666" }}>Uluslararası standartlarda sterilizasyon ve temizlik prosedürleri.</p>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>🦷</div>
            <h3>Modern Teknoloji</h3>
            <p style={{ color: "#666" }}>Ağrısız ve hızlı tedaviler için en son teknoloji cihazlar.</p>
          </div>

        </div>
      </div>

      <div style={infoBannerStyle}>
        <div>
          <p style={{ margin: "5px 0 0 0", opacity: 0.9 }}>Tedavi planınızı oluşturmak ve bilgi almak için iletişime geçebilirsiniz.</p>
        </div>
        <Link to="/contact" style={whiteBtnStyle}>İletişime Geç</Link>
      </div>

    </div>
  );
};

const heroSectionStyle = {
  backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1920&auto=format&fit=crop')", 
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "550px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
  position: "relative"
};

const overlayStyle = {
  backgroundColor: "rgba(0, 87, 145, 0.56)", 
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
};

const sectionStyle = {
  padding: "80px 20px",
  backgroundColor: "#f9fbfd",
  textAlign: "center"
};

const sectionTitleStyle = {
  color: "#005691ff",
  fontSize: "2.5rem",
  marginBottom: "50px"
};

const cardsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap"
};

const cardStyle = {
  backgroundColor: "white",
  padding: "40px 20px",
  borderRadius: "15px",
  width: "300px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "transform 0.3s",
};

const iconStyle = {
  fontSize: "3rem",
  marginBottom: "15px"
};

const primaryBtnStyle = {
  backgroundColor: "#00A8CC",
  color: "white",
  padding: "15px 30px",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.1rem"
};

const secondaryBtnStyle = {
  backgroundColor: "transparent",
  border: "2px solid white",
  color: "white",
  padding: "15px 30px",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.1rem"
};

const infoBannerStyle = {
  backgroundColor: "#005691",
  color: "white",
  padding: "60px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  flexWrap: "wrap",
  textAlign: "left"
};

const whiteBtnStyle = {
  backgroundColor: "white",
  color: "#005691",
  padding: "12px 30px",
  borderRadius: "25px",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Home;