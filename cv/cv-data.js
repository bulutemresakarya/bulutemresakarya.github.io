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
    unvan: "Yazılım Mühendisi | AI & Otomasyon · Backend · Mobil",

    ozet: "Lojistik ve gayrimenkul sektörlerine SaaS ürün modeliyle uçtan uca yazılım geliştiren yazılım mühendisi; 5+ yıl deneyim. Otonom yapay zeka ajanları (LangChain/LangGraph), yüksek ölçekli veri madenciliği, React Native mobil uygulamalar ve gerçek zamanlı iş zekâsı (BI) sistemleri kuruyorum. Geliştirdiğim ürünlerden ikisi Google Play ve App Store'da yayında; sistemlerin tamamı no-code platformlara bağımlı olmadan kendi Linux VDS sunucularımda 7/24 çalışıyor. Manuel süreçleri %90 oranında otonomlaştıran, SLA takibini otomatikleştiren ve FinOps (LLM maliyet optimizasyonu) prensipleriyle kurgulanan mimariler tasarlıyorum; kurduğum sistemler bir ofise 4 ayda +1,5 milyon TL net ciro kazandırdı.",

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
          "KOBİ ve kurumlar için yapay zekâ ajanları, veri hatları ve mobil uygulamalar geliştiriyorum; mimariden yayına teknik teslimat bende.",
          { baslik: "Tırdaş", metin: "Lojistik için AI destekli SaaS, WhatsApp botu ve mobil uygulama — Google Play ve App Store’da yayında." },
          { baslik: "Quadmate", metin: "Konum bazlı oyun arkadaşı eşleştirme uygulamasını uçtan uca geliştirdim." },
          "Kurumsal web, hosting ve SEO işleri; tekrar satılabilir “Hazır Çözümler” ürün hattı.",
          "Müşterilerin manuel veri girişini %90 otonomlaştırdım: 8 saatlik haftalık iş 5 saniyeye indi."
        ]
      },
      {
        kurum: "RE/MAX True",
        rol: "AI & Automation Programmer",
        tarih: "09/2024 – 10/2025",
        maddeler: [
          "Danışman olarak başladım; yazdığım otomasyonlar fark edilince 2 ayda AI & Otomasyon Programcısı kadrosuna geçtim.",
          "TrueMax ekosistemini tek başıma kurdum: anti-ban scraper, SLA lead dispatcher, AI outreach orkestratörü.",
          "Müşteri portföyünü %60+, ofis cirosunu %40+ büyüttüm; 4 ayda +1,5 milyon TL net ciro.",
          "40+ danışmanı canlı izleyen BI panosu kurdum; haftalık raporlama 8 saatten 5 saniyeye indi."
        ]
      },
      {
        kurum: "Özgelecek İK Teknolojileri A.Ş.",
        rol: "Data & Software Developer",
        tarih: "04/2024 – 08/2024",
        maddeler: [
          "Python ile veri işleme ve raporlama otomasyonları geliştirdim; ekip haftalık hedeflerini düzenli aştı.",
          "Teknik teslimat performansıyla 2 ayda stajyerlikten Data & Software Developer kadrosuna yükseldim."
        ]
      },
      {
        kurum: "Freelance",
        rol: "Python Developer",
        tarih: "03/2020 – 01/2024",
        maddeler: [
          "E-ticaret müşterileri için backend otomasyonları ve web scraper’lar geliştirdim, sistemlerin bakımını sürdürdüm."
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
        ozet: "Lojistik firmalarıyla tır şoförlerini buluşturan otonom operasyon merkezi: şoför gündelik dille yük ister, sistem en uygun yükü eşleştirir, güzergâhı ve masrafı takip eder, çözemediğini canlı operatöre aktarır. Tek başıma geliştirdim; mobil uygulama Google Play ve App Store’da yayında.",
        stack: "Python · FastAPI · LangGraph · PostgreSQL · React Native (Expo) · Meta Cloud API · PM2"
      },
      {
        ad: "BOCU BC-01 — Pompa Koruma ve Uzaktan Kontrol Sistemi",
        ozet: "Tarımsal sulamada üç fazlı pompaları uzaktan izleyen, koruyan ve kontrol eden IoT sistemi. Koruma kararı cihazda verilir: internet kesilse de motor korunur. Sunucu ve mobil taraf bende, cihaz firmware’i harici ekipte. Sahada gerçek pompada aşırı akım ve faz kaybı korumaları doğrulandı; ürün kapalı testte.",
        stack: "Python · FastAPI · MQTT (EMQX) · Supabase (RLS) · React Native (Expo) · NB-IoT"
      },
      {
        ad: "TrueMax.ai — AI Lead Generation & Outreach Pipeline",
        ozet: "Emlak ilanlarını tarayan, mülk sahiplerine WhatsApp üzerinden insan gibi ulaşan ve sıcak müşteriyi danışmanlara dağıtan ciro motoru. 30.000+ mülk sahibine ulaşıldı; ofise 4 ayda +1,5 milyon TL net ciro kazandırdı.",
        stack: "Python · Selenium · Node.js · WhatsApp · LLM · SQLite"
      },
      {
        ad: "Quadmate — Konum Bazlı Oyun Arkadaşı Eşleştirme Uygulaması",
        ozet: "Bir masa ya da etkinlik için eksik oyuncuyu konum bazlı bulmayı sağlayan mobil uygulama; kullanıcılar haritadan yakındaki açık masaları görür, katılır veya kendi masasını açar. Tek başıma geliştirdim, kapalı testte.",
        stack: "React Native (Expo) · Supabase · PostGIS · Push Notification"
      },
      {
        ad: "Gerçek Zamanlı BI & Kiosk Dashboard’u",
        ozet: "Ofis lobisinde 7/24 dönen TV panosu ve yönetim paneli: 40+ danışmanın anlık satış yarışı, ofis cirosu ve canlı döviz/altın/kripto kurları. 215 gerçek işlem verisiyle canlı çalıştı.",
        stack: "React · Express · SQLite (WAL) · TanStack Query · Google Sheets API"
      },
      {
        ad: "Otomasyon & Yönetim Paneli — Hibrit RPA Paketi",
        ozet: "Tekrarlayan kayıt ve doğrulama işlerini yürüten otomasyon paketi. Hibrit request/browser mimarisiyle kaynak tüketimini düşürür, sunucu yanıtına göre eşzamanlılığını kendi ayarlar.",
        stack: "Node.js · Express · Puppeteer · worker_threads · Cloudflare Tunnel"
      }
    ],

    diger: [
      { ad: "Kripto Strateji Botu", metin: "Yalnızca Python standart kütüphanesiyle yazdığım zamanlanmış strateji botu ve kontrol paneli; kaldıraç, TP/SL ve pozisyon boyutu ayarları, canlı PnL akışı. Paper-trading modunda müşteriye canlı sundum." },
      { ad: "Telegram İş Botu", metin: "Belirlenen kaynakları 7/24 izleyip koşul sağlandığında inline klavye ile tek dokunuşluk aksiyon sunan bildirim botunu Oracle Cloud üzerinde yayına aldım." },
      { ad: "Kurumsal Web & Hosting", metin: "CleanHome ve Nilbaşak için kurumsal siteleri; SSL, teklif formu, SMTP/HTTP e-posta entegrasyonu ve SEO temelleriyle teslim ettim — teslimden bu yana kesintisiz yayında." }
    ]
  },

  /* ==========================================================================
     ENGLISH
     ========================================================================== */
  en: {
    unvan: "Software Engineer | AI & Automation · Backend · Mobile",

    ozet: "Software Engineer with 5+ years of experience building end-to-end products for the logistics and real estate industries, delivered under a SaaS model. I build autonomous AI agents (LangChain/LangGraph), high-scale web scraping pipelines, React Native mobile apps, and real-time BI dashboards. Two of my products are live on Google Play and the App Store, and every system I ship runs 24/7 on Linux VDS infrastructure I manage myself, with no dependency on no-code platforms. I design architectures that automate 90% of manual workflows, enforce SLAs automatically, and apply FinOps principles to LLM cost control — one system generated +1.5M TL in net revenue within 4 months.",

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
        rol: "Software Engineer (AI, Backend & Mobile)",
        tarih: "11/2025 – Present",
        maddeler: [
          "Build AI agents, data pipelines and mobile apps for SMEs and institutions; own the delivery from architecture to release.",
          { baslik: "Tırdaş", metin: "AI-powered logistics SaaS, WhatsApp bot and mobile app — live on Google Play and the App Store." },
          { baslik: "Quadmate", metin: "Shipped a location-based matchmaking app end to end." },
          "Corporate web, hosting and SEO work; productized a resellable “Ready Solutions” line.",
          "Automated 90% of clients’ manual data entry: an 8-hour weekly workload now takes 5 seconds."
        ]
      },
      {
        kurum: "RE/MAX True",
        rol: "AI & Automation Programmer",
        tarih: "09/2024 – 10/2025",
        maddeler: [
          "Joined as an agent; the automations I wrote were noticed and I moved into the AI & Automation role within 2 months.",
          "Built the “TrueMax” ecosystem solo: anti-ban scraper, SLA lead dispatcher, AI outreach orchestrator.",
          "Grew the client portfolio by 60%+ and branch revenue by 40%+; +1.5M TL net revenue in 4 months.",
          "Built the live BI board tracking 40+ agents; weekly reporting went from 8 hours to 5 seconds."
        ]
      },
      {
        kurum: "Özgelecek İK Teknolojileri A.Ş.",
        rol: "Data & Software Developer",
        tarih: "04/2024 – 08/2024",
        maddeler: [
          "Developed Python automations for data processing and reporting; the team consistently beat weekly targets.",
          "Promoted from intern to Data & Software Developer within two months on delivery performance."
        ]
      },
      {
        kurum: "Freelance",
        rol: "Python Developer",
        tarih: "03/2020 – 01/2024",
        maddeler: [
          "Built backend automation scripts and web scrapers for e-commerce clients and maintained the systems I delivered."
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
        ozet: "An autonomous dispatch ops-center connecting carriers with truck drivers: a driver asks for freight in plain language, the system matches the best load, tracks route and expenses, and escalates unresolved cases to a live operator. Built solo; the mobile app is live on Google Play and the App Store.",
        stack: "Python · FastAPI · LangGraph · PostgreSQL · React Native (Expo) · Meta Cloud API · PM2"
      },
      {
        ad: "BOCU BC-01 — Pump Protection & Remote Control System",
        ozet: "An IoT system that monitors, protects and remotely controls three-phase irrigation pumps. Protection is decided on the device: the motor stays protected even when connectivity drops. Server and mobile side are mine, device firmware is external. Overcurrent and phase-loss protection verified on a real pump in the field; product in closed testing.",
        stack: "Python · FastAPI · MQTT (EMQX) · Supabase (RLS) · React Native (Expo) · NB-IoT"
      },
      {
        ad: "TrueMax.ai — AI Lead Generation & Outreach Pipeline",
        ozet: "A revenue engine that scrapes property listings, reaches owners with human-like WhatsApp outreach and distributes warm leads to agents. 30,000+ owners reached; generated +1.5M TL net revenue for the office in 4 months.",
        stack: "Python · Selenium · Node.js · WhatsApp · LLM · SQLite"
      },
      {
        ad: "Quadmate — Location-Based Gaming Partner Matchmaking App",
        ozet: "A mobile app for finding the missing player for a table or event nearby: users browse open tables on a map, join them, or open their own. Built solo, currently in closed testing.",
        stack: "React Native (Expo) · Supabase · PostGIS · Push Notifications"
      },
      {
        ad: "Real-Time BI & Kiosk Dashboard",
        ozet: "A 24/7 lobby TV board and management panel: live sales race across 40+ agents, office revenue and live currency/gold/crypto rates. Ran in production on 215 real transactions.",
        stack: "React · Express · SQLite (WAL) · TanStack Query · Google Sheets API"
      },
      {
        ad: "Automation & Management Panel — Hybrid RPA Suite",
        ozet: "An automation suite handling repetitive registration and verification work. A hybrid request/browser architecture keeps resource usage low and it tunes its own concurrency based on server response.",
        stack: "Node.js · Express · Puppeteer · worker_threads · Cloudflare Tunnel"
      }
    ],

    diger: [
      { ad: "Crypto Strategy Bot", metin: "A scheduled strategy bot and control panel written using only the Python standard library — leverage, TP/SL, and position sizing controls with a live PnL feed; demoed to the client in paper-trading mode." },
      { ad: "Telegram Ops Bot", metin: "Deployed a notification bot on Oracle Cloud that monitors defined sources 24/7 and surfaces one-tap inline-keyboard actions when conditions are met." },
      { ad: "Corporate Web & Hosting", metin: "Delivered corporate sites for CleanHome and Nilbaşak with SSL, quote forms, SMTP/HTTP mail integration, and SEO foundations — running uninterrupted since delivery." }
    ]
  }
};
