const servicesList = [
  {
    id: 1,
    title: "Ortodonti",
    image: "/images/orto.jpg",
    description:
      "Ortodonti, diş ve çene bozukluklarını düzelterek daha estetik, sağlıklı ve fonksiyonel bir gülüş elde edilmesini sağlayan diş hekimliği alanıdır. Çapraşıklık, çene darlığı, kapanış bozuklukları gibi sorunlar modern tedavi yöntemleriyle çözülür.",
    subServices: [
      {
        name: "Metal Diş Teli",
        description:
          "Dayanıklı ve geleneksel ortodontik tedavi yöntemi. Çapraşık dişleri etkili şekilde hizalar.",
        image: "/images/metal-tel.jpg",
      },
      {
        name: "Porselen Diş Teli",
        description:
          "Diş renginde braketler sayesinde daha estetik görünen bir tel tedavisi sunar.",
        image: "/images/porselen-tel.jpg",
      },
      {
        name: "Şeffaf Plak (Invisalign)",
        description:
          "Tel kullanmadan, bilgisayar destekli planlama ile şeffaf plaklarla yapılan ortodontik tedavi.",
        image: "/images/seffaf-plak.jpg",
      },
      {
        name: "Retainer",
        description:
          "Tedavi sonrası dişlerin eski haline dönmesini engelleyen sabitleme apareyleridir.",
        image: "/images/retainer.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Çene Cerrahisi",
    image: "/images/jaw.jpg",
    description:
      "Çene cerrahisi; ağız, diş ve çene bölgesindeki cerrahi işlemleri kapsayan uzmanlık alanıdır. Gömülü dişler, kistler, eklem bozuklukları ve çene kırıkları profesyonel cerrahi yöntemlerle tedavi edilir.",
    subServices: [
      {
        name: "Gömülü 20'lik Diş Çekimi",
        description:
          "Tam çıkamayan veya yatay duran 20'lik dişlerin cerrahi müdahale ile alınması.",
      },
      {
        name: "Kist Operasyonları",
        description: "Çene içindeki kistlerin temizlenmesi ve dokuların korunması.",
      },
      {
        name: "Apikal Rezeksiyon",
        description: "Diş kökündeki enfeksiyonlu kısmın cerrahi olarak alınması.",
      },
      {
        name: "Çene Kırığı Tedavisi",
        description: "Travma sonrası oluşan çene kırıklarının cerrahi olarak düzeltilmesi.",
      },
    ],
  },
  {
    id: 3,
    title: "Kanal Tedavisi (Endodonti)",
    image: "/images/endo.jpg",
    description:
      "Kanal tedavisi, iltihaplanmış veya hasar görmüş diş sinirlerinin temizlenerek dişin kurtarılmasını sağlar. Bu sayede diş çekimi önlenir ve doğal diş korunur.",
    subServices: [
      {
        name: "İlk Kanal Tedavisi",
        description: "Enfekte olmuş sinirin temizlenip kanalın doldurulması işlemi.",
      },
      {
        name: "Kanal Yenileme",
        description: "Başarısız kanal tedavilerinin tekrar yapılması.",
      },
      {
        name: "Kök Kanal Dolgusu",
        description: "Temizlenen kök kanallarının özel dolgu materyali ile doldurulması.",
      },
      {
        name: "Apikal Rezeksiyon",
        description: "Diş kök ucundaki enfeksiyonun cerrahi yöntemle alınması.",
      },
    ],
  },
  {
    id: 4,
    title: "Periodontoloji",
    image: "/images/perio.jpg",
    description:
      "Periodontoloji; diş eti ve dişleri destekleyen dokuların sağlığını koruyan, diş eti hastalıklarını tedavi eden uzmanlık alanıdır.",
    subServices: [
      {
        name: "Diş Taşı Temizliği",
        description: "Plak ve tartarların profesyonel cihazlarla temizlenmesi.",
      },
      {
        name: "Diş Eti Çekilmesi Tedavisi",
        description:
          "Çekilen diş etlerinin çeşitli cerrahi ve cerrahi olmayan yöntemlerle onarılması.",
      },
      {
        name: "Ağız Kokusu Tedavisi",
        description: "Diş eti enfeksiyonları ve bakteriyel birikim kaynaklı kokuların tedavisi.",
      },
      {
        name: "Periodontal Cerrahi",
        description: "İleri diş eti hastalıklarında uygulanan cerrahi işlemler.",
      },
    ],
  },
  {
    id: 5,
    title: "Pedodonti (Çocuk Diş Hekimliği)",
    image: "/images/pedodonti.jpg",
    description:
      "Pedodonti, 0-12 yaş çocukların ağız ve diş sağlığıyla ilgilenen diş hekimliği alanıdır. Çocuklara uygun, ağrısız ve korkutmayan tedavi yöntemleri uygulanır.",
    subServices: [
      { name: "Çocuk Dolgusu", description: "Çürük dişlere özel çocuk dostu dolgu işlemleri." },
      { name: "Çocuk Kanal Tedavisi", description: "Süt dişlerinde uygulanan kanal tedavisi." },
      { name: "Flor Uygulaması", description: "Diş çürüklerini önlemek için flor jel uygulaması." },
      { name: "Fissür Örtücü", description: "Arka dişlerin korunması için uygulanan koruyucu kaplama." },
      { name: "Süt Dişi Çekimi", description: "Düşmeyen veya problemli süt dişlerinin çekilmesi." },
    ],
  },
  {
    id: 6,
    title: "Diş İmplantı",
    image: "/images/implant.jpg",
    description:
      "İmplant tedavisi, eksik dişlerin yerine titanyum vidaların yerleştirilmesiyle doğal dişe en yakın çözümü sunar.",
    subServices: [
      { name: "Tek Diş İmplantı", description: "Tek diş eksikliklerinde uygulanan implant." },
      { name: "Çoklu İmplant", description: "Birden fazla eksik diş için implant yerleştirilmesi." },
      { name: "İmplant Üstü Protez", description: "İmplantların üzerine yapılan protez dişler." },
      { name: "Sinüs Lifting", description: "Üst çene kemiği yetersiz olduğunda yapılan kemik artırma işlemi." },
    ],
  },
  {
    id: 7,
    title: "Estetik Diş Hekimliği",
    image: "/images/estetik-dis.jpg",
    description:
      "Estetik diş hekimliği; doğal, beyaz ve simetrik bir gülüş elde etmek için uygulanan çeşitli modern tedavileri içerir.",
    subServices: [
      { name: "Diş Beyazlatma", description: "Renk değişimlerini gidererek daha beyaz dişler sağlar." },
      { name: "Bonding", description: "Dişlerdeki küçük kırık ve boşlukları kapatmak için yapılan işlem." },
      { name: "Zirkonyum Kaplama", description: "Dayanıklı ve estetik kaplama çeşidi." },
      { name: "Laminate Veneer", description: "Ön dişlere yapılan ince kaplamalarla gülüş tasarımı." },
      { name: "Gülüş Tasarımı", description: "Yüz şekline göre estetik gülüş planlanması." },
    ],
  },
];

export default servicesList;