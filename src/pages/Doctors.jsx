import React from "react";
import "./Doctors.css";

const Doctors = () => {
  const tedaviler = [
    { id: 1, ad: "Genel Muayene" },
    { id: 2, ad: "Ortodonti" },
    { id: 3, ad: "Kanal Tedavisi" },
    { id: 4, ad: "Diş Eti Tedavisi" },
    { id: 5, ad: "Çocuk Diş" },
    { id: 6, ad: "Diş İmplantı" },
    { id: 7, ad: "Estetik Diş" },
    { id: 8, ad: "Çene Cerrahisi" },
  ];

  const doktorlar = [
    { id: 1, ad: "Dt. Zeynep Lale Çalışkan", unvan: "Başhekim", uzmanliklar: [3, 4, 5, 6] },
    { id: 2, ad: "Uzm. Dt. Sergen Ekenel", unvan: "Çene Cerrahı", uzmanliklar: [6, 7, 8] },
    { id: 3, ad: "Uzm. Dt. Leyla Okur", unvan: "Çene Cerrahı", uzmanliklar: [7, 8] },
    { id: 4, ad: "Uzm. Dt. Ekrem Gündüz", unvan: "Çene Cerrahı", uzmanliklar: [7, 8] },
    { id: 5, ad: "Dr. Burak Arslan", unvan: "Ortodontist", uzmanliklar: [2, 7] },
    { id: 6, ad: "Dr. Sanem Kurt", unvan: "Ortodontist", uzmanliklar: [2, 7] },
    { id: 7, ad: "Dt. Esra Yılmaz", unvan: "Pedodontist", uzmanliklar: [1, 5] },
    { id: 8, ad: "Dt. Büşra Koç", unvan: "Pedodontist", uzmanliklar: [1, 5] },
    { id: 9, ad: "Dr. Mehmet Özdemir", unvan: "Protetik", uzmanliklar: [1, 2, 3] },
    { id: 10, ad: "Dt. Selin Kaya", unvan: "Genel Diş", uzmanliklar: [1, 2, 4, 5] },
    { id: 11, ad: "Dt. Kemal Öztürk", unvan: "Diş Hekimi", uzmanliklar: [1, 3, 4] },
    { id: 12, ad: "Dt. Ahmet Yıldırım", unvan: "Diş Hekimi", uzmanliklar: [1, 3, 4] },
    { id: 13, ad: "Dt. Mert Demir", unvan: "Diş Hekimi", uzmanliklar: [1, 3, 4] },
    { id: 14, ad: "Dt. Seda Polat", unvan: "Diş Hekimi", uzmanliklar: [1, 3, 4] }
  ];


  const getInitials = (name) => {
    const parts = name.split(" ");
    let initials = "";
    for (let i = 0; i < parts.length; i++) {
        if (!parts[i].includes(".")) {
            initials += parts[i][0];
        }
    }
    return initials.substring(0, 2).toUpperCase();
  };

  return (
    <div className="doctors-page-wrapper">
      <div className="doctors-header">
        <h1>Uzman Kadromuz</h1>
        <p>Deneyimli ve uzman hekimlerimizle sağlığınız emin ellerde.</p>
      </div>

      <div className="doctors-grid">
        {doktorlar.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <div className="doc-avatar">
              {getInitials(doc.ad)}
            </div>
            <div className="doc-info">
              <h3>{doc.ad}</h3>
              <span className="doc-title">{doc.unvan}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;