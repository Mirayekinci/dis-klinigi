import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import servicesList from "./servicesList";
function ServiceDetail() {
  const { id } = useParams();
  const service = servicesList.find((s) => s.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Hizmet bulunamadı.</h2>
        <Link to="/services" style={{ color: "#005691", textDecoration: "underline" }}>
          Hizmet listesine dön
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      
      <Link to="/services" style={{ textDecoration: "none", color: "#666", display: "inline-block", marginBottom: "20px" }}>
        &larr; Tüm Hizmetlere Dön
      </Link>

      <h1 style={{ color: "#005691", fontSize: "2.5rem", textAlign: "center", marginBottom: "30px" }}>
        {service.title}
      </h1>

      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "15px",
            display: "block",
            margin: "0 auto 40px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        />
      )}

      <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.8", marginBottom: "50px", textAlign: "justify" }}>
        {service.description}
      </p>

      <h2 style={{ color: "#005691", borderBottom: "2px solid #eee", paddingBottom: "10px", marginBottom: "25px" }}>
        Bu Alandaki Tedavi Seçenekleri
      </h2>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "25px" 
      }}>
        {service.subServices && service.subServices.map((sub, index) => (
          <div key={index} style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            border: "1px solid #f0f0f0",
            transition: "transform 0.2s"
          }}>
            <h3 style={{ color: "#00A8CC", margin: "0 0 10px 0", fontSize: "1.3rem" }}>
              {sub.name}
            </h3>
            <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
              {sub.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetail;