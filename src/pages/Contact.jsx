import React from "react";
import "./Contact.css"; 

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      
      <div className="contact-header">
        <h1>Bize Ulaşın</h1>
        <p>
          Sorularınız, randevu talepleriniz veya görüşleriniz için aşağıdaki formu doldurabilir 
          ya da iletişim kanallarımızdan bize ulaşabilirsiniz.
        </p>
      </div>

      <div className="contact-content">
        
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <input type="text" placeholder="Adınız" className="form-input" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Soyadınız" className="form-input" />
              </div>
            </div>

            <div className="input-group">
              <input type="email" placeholder="E-posta Adresiniz" className="form-input" />
            </div>

            <div className="input-group">
              <input type="tel" placeholder="Telefon Numaranız" className="form-input" />
            </div>

            <div className="input-group">
              <textarea placeholder="Mesajınız..." className="form-textarea" rows="5"></textarea>
            </div>

            <button type="button" className="submit-btn">
              Gönder <span>➤</span> 
            </button>
          </form>
        </div>

        <div className="contact-info-container">
          
          <div className="map-placeholder">
            <span>📍 Google Maps Konumu </span>
          </div>

          <div className="info-list">
            
            <div className="info-item">
              <div className="icon">📞</div>
              <div className="text">
                <strong>Telefon:</strong><br/>
                +90 XXX XXX XX XX
              </div>
            </div>

            <div className="info-item">
              <div className="icon">✉️</div>
              <div className="text">
                <strong>E-posta:</strong><br/>
                xxxxxxxx.com.tr
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📍</div>
              <div className="text">
                <strong>Adres:</strong><br/>
                XXXXXXX Mh. XXXX Cd. No:X/X <br />
                X/X
              </div>
            </div>

            <div className="info-item">
              <div className="icon">🕒</div>
              <div className="text">
                <strong>Çalışma Saatleri:</strong><br/>
                Pzt - Cmt: 09:00 - 18:00<br/>
                Pazar: Kapalı
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;