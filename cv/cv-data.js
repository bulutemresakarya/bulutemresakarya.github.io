/* ============================================================================
   CV VERİSİ — TEK KAYNAK DOSYASI

   CV'yi güncellemek için SADECE bu dosyayı düzenle. Hem web sayfası hem de
   "PDF olarak indir" çıktısı bu dosyadan üretilir; ikisi asla birbirinden
   ayrı düşmez.

   YAPI:
     guncelleme  : Sayfada ve PDF'te görünen "son güncelleme" etiketi.
     kisisel     : İki dilde ortak iletişim bilgileri.
     tr / en     : Dile özel içerik. İkisi de aynı şablonu kullanır.

   ALAN ŞABLONU (tr ve en için birebir aynı):
     unvan        : Ad altındaki tek satırlık başlık.
     ozet         : Profesyonel özet paragrafı.
     etiketler    : Bölüm başlıklarının o dildeki yazımı.
     arayuz       : Buton ve etiket metinleri.
     beceriler    : [{ ad, deger }]
     deneyim      : [{ kurum, rol, tarih, maddeler: [] }]
     egitim       : [{ kurum, bolum, tarih, notlar: [] }]
     sertifikalar : ["..."]
     projeler     : [{ ad, rol, ozet, stack, maddeler: [] }]
     diger        : [{ ad, metin }]

   MADDE YAZIMI: Bir madde iki biçimde yazılabilir —
     "Düz cümle."                              -> normal madde
     { baslik: "Başlık", metin: "Açıklama." }  -> başlığı kalın, devamı normal

   YENİ İŞ / PROJE EKLEMEK: İlgili listenin en üstüne yeni bir nesne ekle
   (listeler en yeniden en eskiye doğru sıralı görünür). İki dili de
   güncellemeyi unutma; sayfa hangi dildeyse o listeyi basar.
   ============================================================================ */

window.CV_DATA = {

  guncelleme: { tr: "Eylül 2026", en: "September 2026" },

  kisisel: {
    ad: "Bulut Emre Sakarya",
    telefon: "+90 544 123 95 24",
    eposta: "sbulutemre@gmail.com",
    konum: { tr: "Kartepe / Kocaeli, Türkiye", en: "Kartepe / Kocaeli, Türkiye" },
    site: "bulutemresakarya.github.io",
    linkedin: "linkedin.com/in/bulut-sakarya",
    github: "github.com/bulutemresakarya"
  },

  /* ==========================================================================
     TÜRKÇE
     ========================================================================== */
  tr: {
    unvan: "Yazılım Geliştirici | AI & Otomasyon · Backend · Mobil",

    ozet: "Yazılım geliştirici, 5+ yıl. Python · FastAPI backend, LangChain/LangGraph ile otonom AI ajanları, React Native mobil uygulamalar ve gerçek zamanlı BI. İki uygulama Google Play ve App Store’da yayında; kurduğum otomasyonlar bir ofise 4 ayda +1,5 milyon TL net ciro kazandırdı.",

    etiketler: {
      ozet: "Profesyonel Özet",
      beceriler: "Teknik Beceriler",
      deneyim: "İş Deneyimi",
      egitim: "Eğitim",
      sertifikalar: "Sertifikalar",
      projeler: "Projeler",
      diger: "Diğer Teslimatlar"
    },

    arayuz: {
      dilAdi: "Türkçe",
      digerDil: "English",
      digerDilKisa: "EN",
      pdfIndir: "PDF olarak indir",
      guncellemeOn: "Son güncelleme",
      geri: "ana sayfa",
      etiket: "ÖZGEÇMİŞ",
      altNot: "Tüm interaktif demolar ve teknik vaka analizleri: bulutemresakarya.github.io"
    },

    beceriler: [
      { ad: "Programlama Dilleri", deger: "Python, JavaScript, SQL, HTML/CSS" },
      { ad: "Backend & API", deger: "FastAPI, Node.js, RESTful API tasarımı, Webhook yönetimi, asenkron kuyruk mimarisi, OTP kimlik doğrulama" },
      { ad: "AI & Orchestration", deger: "LangChain / LangGraph (stateful multi-agent workflow), OpenAI API, yapılandırılmış veri çıkarımı (Pydantic/JSON Schema), prompt engineering, LLM maliyet optimizasyonu" },
      { ad: "AI Destekli Geliştirme", deger: "Claude (Claude Code), ChatGPT, Gemini, Replit Agent — büyük kod tabanlarında bağlam yönetimi, hızlı prototipleme, kod inceleme ve refactoring; AI çıktısını üretime almadan önce doğrulama ve test etme pratiği" },
      { ad: "Mobil", deger: "React Native / Expo (EAS Build), push bildirim, Google Play & App Store yayın süreçleri, abonelik / RTDN entegrasyonu" },
      { ad: "Veri & BI", deger: "PostgreSQL (PostGIS), SQLite (WAL Mode), Supabase, Drizzle ORM, veri temizleme (ETL), React + TanStack Query ile dashboard geliştirme" },
      { ad: "Veri Toplama", deger: "Selenium, requests/aiohttp, anti-bot atlatma, oturum & rate-limit yönetimi" },
      { ad: "Cloud & DevOps", deger: "AWS (bulut temelleri), Docker, Linux sunucu yönetimi (Ubuntu VDS, Oracle Cloud), PM2, Cloudflare Tunnel, Git & GitHub" },
      { ad: "Yabancı Dil", deger: "Türkçe (ana dil), İngilizce (B2 — teknik dokümantasyon ve eğitimler İngilizce takip ediliyor), Almanca (A1, başlangıç)" }
    ],

    deneyim: [
      {
        kurum: "Freelance / Karaarslan Digital",
        rol: "Yazılım Geliştirici (AI, Backend & Mobil)",
        tarih: "11/2025 – Halen",
        maddeler: [
          "AI ajanları, veri hatları ve mobil uygulamalar; mimariden yayına uçtan uca teslimat.",
          { baslik: "Tırdaş", metin: "Lojistik SaaS, WhatsApp botu ve mobil uygulama — iki mağazada yayında." },
          "Manuel veri girişini %90 otonomlaştırdım: haftalık 8 saatlik iş 5 saniyeye indi."
        ]
      },
      {
        kurum: "RE/MAX True",
        rol: "AI & Automation Programmer",
        tarih: "09/2024 – 10/2025",
        maddeler: [
          "Danışmanlıktan 2 ayda AI & Otomasyon Programcısı kadrosuna geçtim.",
          "TrueMax ekosistemini tek başıma kurdum: scraper, SLA lead dispatcher, AI outreach.",
          "Portföy %60+, ciro %40+; 4 ayda +1,5 milyon TL. Raporlama 8 saatten 5 saniyeye indi."
        ]
      },
      {
        kurum: "Özgelecek İK Teknolojileri A.Ş.",
        rol: "Data & Software Developer",
        tarih: "04/2024 – 08/2024",
        maddeler: [
          "Python ile veri işleme ve raporlama otomasyonları geliştirdim.",
          "2 ayda stajyerlikten Data & Software Developer kadrosuna yükseldim."
        ]
      },
      {
        kurum: "Freelance",
        rol: "Python Developer",
        tarih: "03/2020 – 01/2024",
        maddeler: [
          "E-ticaret müşterileri için backend otomasyonları ve web scraper’lar geliştirdim."
        ]
      }
    ],

    egitim: [
      {
        kurum: "Anadolu Üniversitesi",
        bolum: "Yönetim Bilişim Sistemleri (Lisans, Açık Öğretim)",
        tarih: "2025 – Devam",
        notlar: ["2025–2026 Öğretim Yılı Bahar Dönemi Onur Belgesi"]
      },
      {
        kurum: "Dokuz Eylül Üniversitesi",
        bolum: "Fizik (Lisans, kısmi eğitim)",
        tarih: "2021 – 2023",
        notlar: []
      }
    ],

    sertifikalar: [
      "JavaScript Eğitimi (30 saat) — Boğaziçi Enstitüsü (07/2026)",
      "Bilgi Sistemi Tasarımı Sertifika Programı — Anadolu Üniversitesi SEM (05/2026)",
      "Onur Belgesi, 2025-2026 Bahar Dönemi — Anadolu Üniversitesi (2026)",
      "MEB Hayat Boyu Öğrenme — Python ile Yapay Zekâya Giriş, Bilgisayar İşletmenliği (Operatörlüğü), Nesneye Dayalı Programlama (Python), Nesnelerin İnterneti (Temel Seviye), Robot Uygulamaları, İş Sağlığı ve Güvenliği (2026)",
      "AWS Certified Cloud Practitioner (CLF-C02) Resmî Uygulama Soru Seti — AWS Training & Certification (10/2025)",
      "BTK Akademi — Yapay Zekâ Etiği, Etkili İletişim Stratejileri, İletişim ve Network Yönetimi, Müşteriyi Tanımak (05/2025)",
      "Bilgi Teknolojileri Stajı — TNC Group · Europäisches Bildungsinstitut (07/2025)"
    ],

    projeler: [
      {
        ad: "Tırdaş — AI Destekli Lojistik SaaS, Mobil Uygulama & WhatsApp Botu",
        ozet: "Yük eşleştirme, güzergâh ve masraf takibi; mobil uygulama Google Play ve App Store’da yayında.",
        stack: "Python · FastAPI · LangGraph · PostgreSQL · React Native (Expo) · Meta Cloud API · PM2"
      },
      {
        ad: "BOCU BC-01 — Pompa Koruma ve Uzaktan Kontrol Sistemi",
        ozet: "Üç fazlı pompalar için IoT koruma ve uzaktan kontrol; karar cihazda, internet kesilse de motor korunur.",
        stack: "Python · FastAPI · MQTT (EMQX) · Supabase (RLS) · React Native (Expo) · NB-IoT"
      },
      {
        ad: "TrueMax.ai — AI Lead Generation & Outreach Pipeline",
        ozet: "Scraper + WhatsApp outreach + lead dağıtımı; 30.000+ mülk sahibi, 4 ayda +1,5 milyon TL ciro.",
        stack: "Python · Selenium · Node.js · WhatsApp · LLM · SQLite"
      },
      {
        ad: "Quadmate — Konum Bazlı Oyun Arkadaşı Eşleştirme Uygulaması",
        ozet: "Haritadan yakındaki açık masaları bulup katılma; kapalı testte.",
        stack: "React Native (Expo) · Supabase · PostGIS · Push Notification"
      },
      {
        ad: "Gerçek Zamanlı BI & Kiosk Dashboard’u",
        ozet: "40+ danışmanın canlı satış panosu; haftalık raporlama 8 saatten 5 saniyeye indi.",
        stack: "React · Express · SQLite (WAL) · TanStack Query · Google Sheets API"
      },
      {
        ad: "Otomasyon & Yönetim Paneli — Hibrit RPA Paketi",
        ozet: "Request/browser karışık mimari; eşzamanlılığını sunucu yanıtına göre kendi ayarlar.",
        stack: "Node.js · Express · Puppeteer · worker_threads · Cloudflare Tunnel"
      }
    ],

    diger: [
      { ad: "Kripto Strateji Botu", metin: "Zamanlanmış strateji botu ve kontrol paneli; kaldıraç, TP/SL ve pozisyon takibi (Python, borsa API)." },
      { ad: "Telegram İş Botu", metin: "Kaynakları 7/24 izleyip koşul sağlandığında tek dokunuşluk aksiyon sunan bildirim botu." },
      { ad: "Kurumsal Web & Hosting", metin: "CleanHome ve Nilbaşak kurumsal siteleri; SSL, teklif formu, SMTP entegrasyonu, SEO." }
    ]

  },

  /* ==========================================================================
     ENGLISH
     ========================================================================== */
  en: {
    unvan: "Software Developer | AI & Automation · Backend · Mobile",

    ozet: "Software developer, 5+ years. Python · FastAPI backend, autonomous AI agents with LangChain/LangGraph, React Native mobile apps and real-time BI. Two apps live on Google Play and the App Store; the automations I built generated +1.5M TL net revenue for an office in 4 months.",

    etiketler: {
      ozet: "Professional Summary",
      beceriler: "Technical Skills",
      deneyim: "Professional Experience",
      egitim: "Education",
      sertifikalar: "Certifications",
      projeler: "Projects",
      diger: "Additional Deliveries"
    },

    arayuz: {
      dilAdi: "English",
      digerDil: "Türkçe",
      digerDilKisa: "TR",
      pdfIndir: "Download as PDF",
      guncellemeOn: "Last updated",
      geri: "home",
      etiket: "CURRICULUM VITAE",
      altNot: "All interactive demos and technical case studies: bulutemresakarya.github.io"
    },

    beceriler: [
      { ad: "Languages", deger: "Python, JavaScript, SQL, HTML/CSS" },
      { ad: "Backend & API", deger: "FastAPI, Node.js, RESTful API design, webhook management, async queue architecture, OTP authentication" },
      { ad: "AI & Orchestration", deger: "LangChain / LangGraph (stateful multi-agent workflows), OpenAI API, structured data extraction (Pydantic/JSON Schema), prompt engineering, LLM cost optimization" },
      { ad: "AI-Assisted Development", deger: "Claude (Claude Code), ChatGPT, Gemini, Replit Agent — context management across large codebases, rapid prototyping, code review and refactoring; disciplined verification and testing of AI output before it ships" },
      { ad: "Mobile", deger: "React Native / Expo (EAS Build), push notifications, Google Play & App Store release pipelines, subscription / RTDN integration" },
      { ad: "Data & BI", deger: "PostgreSQL (PostGIS), SQLite (WAL Mode), Supabase, Drizzle ORM, ETL & data cleaning, dashboard development with React + TanStack Query" },
      { ad: "Web Scraping", deger: "Selenium, requests/aiohttp, anti-bot evasion, session & rate-limit management" },
      { ad: "Cloud & DevOps", deger: "AWS (cloud fundamentals), Docker, Linux server administration (Ubuntu VDS, Oracle Cloud), PM2, Cloudflare Tunnel, Git & GitHub" },
      { ad: "Languages (spoken)", deger: "Turkish (native), English (B2 — technical documentation and training followed in English), German (A1, beginner)" }
    ],

    deneyim: [
      {
        kurum: "Freelance / Karaarslan Digital",
        rol: "Software Developer (AI, Backend & Mobile)",
        tarih: "11/2025 – Present",
        maddeler: [
          "AI agents, data pipelines and mobile apps; end-to-end delivery from architecture to release.",
          { baslik: "Tırdaş", metin: "Logistics SaaS, WhatsApp bot and mobile app — live on both stores." },
          "Automated 90% of manual data entry: an 8-hour weekly workload now takes 5 seconds."
        ]
      },
      {
        kurum: "RE/MAX True",
        rol: "AI & Automation Programmer",
        tarih: "09/2024 – 10/2025",
        maddeler: [
          "Moved from agent to AI & Automation Programmer within 2 months.",
          "Built the TrueMax ecosystem solo: scraper, SLA lead dispatcher, AI outreach.",
          "Portfolio +60%, revenue +40%; +1.5M TL in 4 months. Reporting: 8 hours to 5 seconds."
        ]
      },
      {
        kurum: "Özgelecek İK Teknolojileri A.Ş.",
        rol: "Data & Software Developer",
        tarih: "04/2024 – 08/2024",
        maddeler: [
          "Developed Python automations for data processing and reporting.",
          "Promoted from intern to Data & Software Developer within two months."
        ]
      },
      {
        kurum: "Freelance",
        rol: "Python Developer",
        tarih: "03/2020 – 01/2024",
        maddeler: [
          "Built backend automation scripts and web scrapers for e-commerce clients."
        ]
      }
    ],

    egitim: [
      {
        kurum: "Anadolu University",
        bolum: "B.S. in Management Information Systems (Open Education)",
        tarih: "2025 – Present",
        notlar: ["Honor Certificate — Spring Semester, 2025–2026 Academic Year"]
      },
      {
        kurum: "Dokuz Eylül University",
        bolum: "Undergraduate Studies in Physics (partial coursework)",
        tarih: "2021 – 2023",
        notlar: []
      }
    ],

    sertifikalar: [
      "JavaScript Training (30 hours) — Boğaziçi Enstitüsü (07/2026)",
      "Information System Design Certificate Program — Anadolu University, Continuing Education Center (05/2026)",
      "Honour Certificate, 2025-2026 Spring Term — Anadolu University (2026)",
      "MoNE Lifelong Learning — Introduction to AI with Python, Computer Operator Training, Object-Oriented Programming (Python), Internet of Things (Basic), Robotics Applications, Occupational Health & Safety (2026)",
      "AWS Certified Cloud Practitioner (CLF-C02) Official Practice Question Set — AWS Training & Certification (10/2025)",
      "BTK Academy — AI Ethics, Effective Communication Strategies, Communication & Network Management, Customer Insight (05/2025)",
      "IT Internship — TNC Group · Europäisches Bildungsinstitut (07/2025)"
    ],

    projeler: [
      {
        ad: "Tırdaş — AI-Powered Logistics SaaS, Mobile App & WhatsApp Bot",
        ozet: "Freight matching, route and expense tracking; mobile app live on Google Play and the App Store.",
        stack: "Python · FastAPI · LangGraph · PostgreSQL · React Native (Expo) · Meta Cloud API · PM2"
      },
      {
        ad: "BOCU BC-01 — Pump Protection & Remote Control System",
        ozet: "IoT protection and remote control for three-phase pumps; decided on-device, safe without connectivity.",
        stack: "Python · FastAPI · MQTT (EMQX) · Supabase (RLS) · React Native (Expo) · NB-IoT"
      },
      {
        ad: "TrueMax.ai — AI Lead Generation & Outreach Pipeline",
        ozet: "Scraper + WhatsApp outreach + lead distribution; 30,000+ owners reached, +1.5M TL in 4 months.",
        stack: "Python · Selenium · Node.js · WhatsApp · LLM · SQLite"
      },
      {
        ad: "Quadmate — Location-Based Gaming Partner Matchmaking App",
        ozet: "Find and join open tables nearby from a map; in closed testing.",
        stack: "React Native (Expo) · Supabase · PostGIS · Push Notifications"
      },
      {
        ad: "Real-Time BI & Kiosk Dashboard",
        ozet: "Live sales board for 40+ agents; weekly reporting cut from 8 hours to 5 seconds.",
        stack: "React · Express · SQLite (WAL) · TanStack Query · Google Sheets API"
      },
      {
        ad: "Automation & Management Panel — Hybrid RPA Suite",
        ozet: "Hybrid request/browser architecture; tunes its own concurrency from server response.",
        stack: "Node.js · Express · Puppeteer · worker_threads · Cloudflare Tunnel"
      }
    ],

    diger: [
      { ad: "Crypto Strategy Bot", metin: "Scheduled strategy bot and control panel; leverage, TP/SL and position tracking (Python, exchange API)." },
      { ad: "Telegram Work Bot", metin: "Watches sources 24/7 and offers one-tap actions via inline keyboard when conditions are met." },
      { ad: "Corporate Web & Hosting", metin: "Corporate sites for CleanHome and Nilbaşak; SSL, quote form, SMTP integration, SEO." }
    ]

  }
};
