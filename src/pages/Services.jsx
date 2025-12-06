import React from "react";
import { Link } from "react-router-dom"; 
import servicesList from "./servicesList";
import "./Services.css"; 

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Tedavi ve Hizmetlerimiz</h1>
        <p>
          Sağlıklı gülüşler için modern teknoloji ve uzman kadromuzla yanınızdayız.
        </p>
      </div>

      <div className="services-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <div className="card-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
              <p className="card-desc">
                {service.description.substring(0, 120)}...
              </p>
              <Link to={`/hizmet-detay/${service.id}`} className="detail-btn">
                Detaylı Bilgi &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;