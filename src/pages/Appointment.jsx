import React, { useState } from "react";
import "./Appointment.css";

const Appointment = () => {
  const [adim, setAdim] = useState(1);
  const bugun = new Date().toISOString().slice(0, 10);
  const [baslangicTarihi, setBaslangicTarihi] = useState(bugun);
  const [alinanRandevular, setAlinanRandevular] = useState([]);
  const [modalAcik, setModalAcik] = useState(false); 

  const [secimler, setSecimler] = useState({
    tedavi: null,
    doktor: null,
    tarih: null,
    saat: null,
    hastaAd: ""
  });

  const tedaviler = [
    { id: 1, ad: "Genel Muayene", sure: "15 dk" },
    { id: 2, ad: "Ortodonti", sure: "30 dk" },
    { id: 3, ad: "Kanal Tedavisi (Endodonti)", sure: "60 dk" },
    { id: 4, ad: "Diş Eti Tedavisi (Periodontoloji)", sure: "30 dk" },
    { id: 5, ad: "Çocuk Diş (Pedodonti)", sure: "30 dk" },
    { id: 6, ad: "Diş İmplantı", sure: "60 dk" },
    { id: 7, ad: "Estetik Diş Hekimliği", sure: "60 dk" },
    { id: 8, ad: "Çene Cerrahisi", sure: "60 dk" },
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

  const tarihDegistir = (gunSayisi) => {
    const yeniTarihObj = new Date(baslangicTarihi);
    yeniTarihObj.setDate(yeniTarihObj.getDate() + gunSayisi);
    const yeniTarihStr = yeniTarihObj.toISOString().slice(0, 10);
    if (yeniTarihStr < bugun) return;
    setBaslangicTarihi(yeniTarihStr);
  };

  const getReferansSaatler = () => {
    const saatler = [];
    for (let saat = 9; saat < 18; saat++) {
      saatler.push(`${saat.toString().padStart(2, '0')}:00`);
      saatler.push(`${saat.toString().padStart(2, '0')}:30`);
    }
    return saatler;
  };
  const referansSaatler = getReferansSaatler();

  const getGosterilecekSaatler = () => {
    if (!secimler.tedavi) return referansSaatler;
    const sure = parseInt(secimler.tedavi.sure);
    if (sure >= 60) {
      return referansSaatler.filter(saat => saat.endsWith(":00"));
    }
    return referansSaatler;
  };
  const gosterilecekSaatler = getGosterilecekSaatler();

  const gunleriGetir = () => {
    const gunler = [];
    const referansTarih = new Date(baslangicTarihi);
    const gunIsimleri = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const ayIsimleri = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    for (let i = 0; i < 5; i++) {
      let tarih = new Date(referansTarih);
      tarih.setDate(referansTarih.getDate() + i);
      gunler.push({
        obj: tarih,
        gunAdi: gunIsimleri[tarih.getDay()],
        tarihYazi: `${tarih.getDate()} ${ayIsimleri[tarih.getMonth()]}`
      });
    }
    return gunler;
  };
  const takvimGunleri = gunleriGetir();

  const getGerekliSlotSayisi = () => {
    if (!secimler.tedavi) return 1;
    const sureDk = parseInt(secimler.tedavi.sure);
    return Math.ceil(sureDk / 30);
  };

  const tekSlotMusaitMi = (doktorId, gunIndex, saatStr) => {
    if (takvimGunleri[gunIndex].gunAdi === "Pazar") return false;

    const slotTarihi = takvimGunleri[gunIndex].obj;
    const simdi = new Date();

    if (slotTarihi.toDateString() === simdi.toDateString()) {
       const [saat, dakika] = saatStr.split(":").map(Number);
       const randevuZamani = new Date(slotTarihi);
       randevuZamani.setHours(saat, dakika, 0, 0);
       if (randevuZamani < simdi) return false;
    }

    const tarihKey = `${takvimGunleri[gunIndex].tarihYazi} ${takvimGunleri[gunIndex].gunAdi}`;
    const randevuKey = `${doktorId}-${tarihKey}-${saatStr}`;
    return !alinanRandevular.some(r => r.key === randevuKey);
  };

  const randevuMusaitMi = (doktorId, gunIndex, saatStr) => {
    const slotSayisi = getGerekliSlotSayisi();
    const baslangicIndex = referansSaatler.indexOf(saatStr);
    if (baslangicIndex === -1) return false;

    for (let i = 0; i < slotSayisi; i++) {
      const kontrolIndex = baslangicIndex + i;
      if (kontrolIndex >= referansSaatler.length) return false;
      const kontrolSaati = referansSaatler[kontrolIndex];
      if (!tekSlotMusaitMi(doktorId, gunIndex, kontrolSaati)) {
        return false;
      }
    }
    return true;
  };

  const uygunDoktorlar = secimler.tedavi
    ? doktorlar.filter(doc => doc.uzmanliklar.includes(secimler.tedavi.id))
    : [];

  const tedaviSec = (tedavi) => {
    setSecimler({ ...secimler, tedavi });
    setAdim(2);
  };

  const randevuSec = (doktor, gun, saat) => {
    setSecimler({
      ...secimler,
      doktor,
      tarih: `${gun.tarihYazi} ${gun.gunAdi}`,
      saat
    });
    setAdim(3);
  };

  const tamamla = () => {
    const slotSayisi = getGerekliSlotSayisi();
    const baslangicIndex = referansSaatler.indexOf(secimler.saat);
    const yeniKayitlar = [];
    const grupId = Date.now(); 

    for (let i = 0; i < slotSayisi; i++) {
      const gecerliSaat = referansSaatler[baslangicIndex + i];
      const kayitKey = `${secimler.doktor.id}-${secimler.tarih}-${gecerliSaat}`;
      
      yeniKayitlar.push({
        id: grupId, 
        key: kayitKey,
        detay: {
          tedavi: secimler.tedavi.ad,
          doktor: secimler.doktor.ad,
          tarih: secimler.tarih,
          saat: secimler.saat, 
          hasta: secimler.hastaAd || "İsimsiz Hasta"
        }
      });
    }

    setAlinanRandevular([...alinanRandevular, ...yeniKayitlar]);
    alert(`Randevunuz Başarıyla Oluşturuldu!`);
    setAdim(1);

    setSecimler({ tedavi: null, doktor: null, tarih: null, saat: null, hastaAd: "" });
  };

  const randevuIptalEt = (grupId) => {
    if (window.confirm("Bu randevuyu iptal etmek istediğinize emin misiniz?")) {
      const guncelListe = alinanRandevular.filter(r => r.id !== grupId);
      setAlinanRandevular(guncelListe);
    }
  };

  const gosterilecekRandevular = alinanRandevular.reduce((acc, curr) => {
    if (!acc.find(item => item.id === curr.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);


  return (
    <div className="appointment-container">
      <div className="top-actions">
         <button className="my-appointments-btn" onClick={() => setModalAcik(true)}>
            📅 Randevularım ({gosterilecekRandevular.length})
         </button>
      </div>

      <div className="stepper-header">
        <div className="steps">
          <div className={`step ${adim >= 1 ? "active" : ""}`}><div className="step-circle">1</div><span>Tedavi</span></div>
          <div className={`step ${adim >= 2 ? "active" : ""}`}><div className="step-circle">2</div><span>Doktor</span></div>
          <div className={`step ${adim >= 3 ? "active" : ""}`}><div className="step-circle">3</div><span>Onay</span></div>
        </div>
      </div>

      <div className="wizard-body">
        {adim === 1 && (
          <div className="fade-in">
            <h3>Lütfen hizmet seçiniz:</h3>
            <div className="tedavi-list">
              {tedaviler.map((t) => (
                <div key={t.id} className="tedavi-card" onClick={() => tedaviSec(t)}>
                  <span className="tedavi-ad">{t.ad}</span>
                  <span className="tedavi-time">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {t.sure}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {adim === 2 && (
          <div className="fade-in">
            <div className="calendar-header">
              <button className="btn-back" onClick={() => setAdim(1)}>← Geri</button>
              <div className="filter-info">
                 <span className="selected-badge">{secimler.tedavi?.ad} ({secimler.tedavi?.sure})</span>
              </div>
              <div className="date-navigation">
                <button className="nav-btn" onClick={() => tarihDegistir(-1)} disabled={baslangicTarihi <= bugun}>‹</button>
                <input type="date" className="date-input" value={baslangicTarihi} min={bugun} onChange={(e) => setBaslangicTarihi(e.target.value)} />
                <button className="nav-btn" onClick={() => tarihDegistir(1)}>›</button>
              </div>
            </div>

            <div className="calendar-grid">
              <div className="grid-head">Doktor</div>
              {takvimGunleri.map((g, i) => (
                <div key={i} className={`grid-head ${g.gunAdi === 'Pazar' ? 'holiday' : ''}`}>
                  <strong>{g.tarihYazi}</strong>{g.gunAdi}
                </div>
              ))}
              {uygunDoktorlar.length > 0 ? (
                uygunDoktorlar.map((doc) => (
                  <React.Fragment key={doc.id}>
                    <div className="doctor-col">
                      <div className="avatar">{doc.ad.charAt(0)}</div>
                      <div>
                        <div className="doc-title">{doc.unvan}</div>
                        <div className="doc-name">{doc.ad}</div>
                      </div>
                    </div>
                    {takvimGunleri.map((gun, gunIndex) => (
                      <div key={gunIndex} className="slot-col">
                        <div className="scrollable-slots">
                          {gosterilecekSaatler.map((saat) => {
                            const musait = randevuMusaitMi(doc.id, gunIndex, saat);
                            return (
                              <button
                                key={saat}
                                className={`time-chip ${musait ? 'available' : 'full'}`}
                                disabled={!musait}
                                onClick={() => musait && randevuSec(doc, gun, saat)}
                              >
                                {saat}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <div className="no-doctor-warning">Uygun doktor bulunamadı.</div>
              )}
            </div>
          </div>
        )}

        {adim === 3 && (
          <div className="fade-in summary-box">
            <div className="check-icon">✓</div>
            <h3>Randevu Özeti</h3>
            <div className="summary-card">
              <div className="s-row"><span>Tedavi:</span> <strong>{secimler.tedavi?.ad}</strong></div>
              <div className="s-row"><span>Doktor:</span> <strong>{secimler.doktor?.unvan} {secimler.doktor?.ad}</strong></div>
              <div className="s-row"><span>Zaman:</span> <strong>{secimler.tarih} {secimler.saat}</strong></div>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <label style={{ fontSize: '0.9rem', color: '#666' }}>Ad Soyad:</label>
              <input type="text" style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '6px' }} placeholder="Adınız Soyadınız" onChange={(e) => setSecimler({ ...secimler, hastaAd: e.target.value })} />
            </div>
            <button className="btn-confirm" onClick={tamamla}>Randevuyu Onayla</button>
            <button className="btn-text" onClick={() => setAdim(2)}>Değiştir</button>
          </div>
        )}
      </div>

      {modalAcik && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Randevularım</h3>
              <button className="close-btn" onClick={() => setModalAcik(false)}>×</button>
            </div>
            <div className="modal-body">
              {gosterilecekRandevular.length === 0 ? (
                <p style={{textAlign:'center', color:'#999'}}>Henüz aktif randevunuz bulunmamaktadır.</p>
              ) : (
                gosterilecekRandevular.map((randevu) => (
                  <div key={randevu.id} className="randevu-item">
                    <div className="r-info">
                       <strong>{randevu.detay.tedavi}</strong>
                       <span>{randevu.detay.doktor}</span>
                       <small>{randevu.detay.tarih} - {randevu.detay.saat}</small>
                       <small style={{color:'#1e88e5'}}>Hasta: {randevu.detay.hasta}</small>
                    </div>
                    <button className="cancel-btn" onClick={() => randevuIptalEt(randevu.id)}>İptal Et</button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Appointment;