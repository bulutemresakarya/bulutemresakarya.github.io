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
      { ad: "Cloud & DevOps", deger: "AWS (Certified Cloud Practitioner, CLF-C02), Docker, Linux sunucu yönetimi (Ubuntu VDS, Oracle Cloud), PM2, Cloudflare Tunnel, Git & GitHub" },
      { ad: "Yabancı Dil", deger: "Türkçe (ana dil), İngilizce (B2 — AWS sertifika sınavı İngilizce dilinde tamamlandı), Almanca (A1, başlangıç)" }
    ],

    deneyim: [
      {
        kurum: "Freelance / Karaarslan Digital",
        rol: "Yazılım Geliştirici (AI, Backend & Mobil)",
        tarih: "11/2025 – Halen",
        maddeler: [
          "KOBİ'ler ve kurumlar için yapay zeka ajanları, veri işleme hatları ve mobil uygulamalar geliştiriyorum; mimari tasarımdan yayına kadar teknik teslimatın tamamını tek başıma yürütüyorum.",
          { baslik: "Tırdaş (02/2026 – Halen)", metin: "Lojistik firmaları için AI destekli SaaS platformu, WhatsApp botu ve mobil uygulama geliştirdim; Google Play ve App Store'da yayında. Ana geliştirmeyi 06/2026'da teslim ettim, sistemi saatlik bakım, güncelleme ve teknik destek anlaşmasıyla bakımını ve geliştirmesini sürdürüyorum." },
          { baslik: "Quadmate", metin: "Konum bazlı oyun arkadaşı eşleştirme uygulamasını uçtan uca geliştirdim (React Native + Supabase/PostGIS)." },
          "Kurumsal web, hosting ve SEO projeleri teslim ettim (CleanHome, Nilbaşak); tekrar satılabilir “Hazır Çözümler” ürün hattını (AI müşteri temsilcisi, QR menü, KPI dashboard, veri toplama) oluşturdum.",
          { baslik: "Sonuç", metin: "Müşterilerin manuel veri giriş operasyonlarını %90 oranında otonomlaştırarak haftalık 8 saatlik iş yükünü 5 saniyeye indirdim." }
        ]
      },
      {
        kurum: "RE/MAX True",
        rol: "AI & Automation Programmer",
        tarih: "09/2024 – 10/2025",
        maddeler: [
          "Gayrimenkul danışmanı olarak başladım; saha süreçlerini hızlandırmak için yazdığım otomasyonlar yönetim tarafından fark edilince 2 ay içinde Yapay Zeka Programcısı kadrosuna geçtim (11/2024).",
          "Danışmanların saha operasyonlarını dijitalleştiren “TrueMax” ekosistemini (anti-ban scraper, SLA lead dispatcher, AI outreach orchestrator) tek başıma inşa ettim; aynı motoru RED-i adıyla RedPartners için yeniden kurdum.",
          "Kurduğum otonom sistemlerle ofisin müşteri portföyünü %60+, ofis cirosunu %40+ artırdım; 4 ayda +1,5 milyon TL net ciro sağladım.",
          "40+ danışmanın performansını canlı izleyen gerçek zamanlı BI dashboard'unu tasarlayıp geliştirdim; haftalık raporlama süresini 8 saatten 5 saniyeye indirdim."
        ]
      },
      {
        kurum: "Özgelecek İK Teknolojileri A.Ş.",
        rol: "Data & Software Developer",
        tarih: "04/2024 – 08/2024",
        maddeler: [
          "Python ile veri işleme ve raporlama otomasyonları geliştirerek ekibin haftalık çıktı hedeflerini düzenli olarak aşmasını sağladım.",
          "Teknik teslimat performansım nedeniyle 2 ay içinde stajyerlikten Data & Software Developer kadrosuna yükseltildim."
        ]
      },
      {
        kurum: "Freelance",
        rol: "Python Developer",
        tarih: "03/2020 – 01/2024",
        maddeler: [
          "E-ticaret müşterileri için arka uç otomasyon betikleri ve web scraper'lar geliştirdim, kurduğum sistemlerin bakım ve teknik desteğini sağladım."
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
      "MEB Hayat Boyu Öğrenme — Nesneye Dayalı Programlama (Python), Nesnelerin İnterneti (Temel Seviye), Robot Uygulamaları, İş Sağlığı ve Güvenliği (2026)",
      "AWS Certified Cloud Practitioner (CLF-C02) Resmî Uygulama Soru Seti — AWS Training & Certification (10/2025)",
      "BTK Akademi — Yapay Zekâ Etiği, Etkili İletişim Stratejileri, İletişim ve Network Yönetimi, Müşteriyi Tanımak (05/2025)",
      "Bilgi Teknolojileri Stajı — TNC Group · Europäisches Bildungsinstitut (07/2025)"
    ],

    projeler: [
      {
        ad: "Tırdaş — AI Destekli Lojistik SaaS, Mobil Uygulama & WhatsApp Botu",
        rol: "Yazılım Mühendisi (Solo)",
        ozet: "Lojistik firmaları ile tır şoförlerini buluşturan otonom operasyon merkezi. Şoför “Gebze'deyim, Ankara'ya gideceğim, bana yük bul” yazdığı anda sistem araca en uygun yükü eşleştirir, güzergâh hava durumunu bildirir, harcamaları kaydeder ve çözemediği durumları canlı destek operatörüne aktarır. Mobil uygulama Google Play ve App Store'da yayında; WhatsApp botu ve uygulama aynı ilan havuzunu paylaşır.",
        stack: "Python · FastAPI · LangGraph · PostgreSQL · React Native (Expo) · Meta Cloud API · PM2",
        maddeler: [
          { baslik: "Jargon Çevirici NLP Hattı", metin: "Şoförlerin gündelik dille veya eksik yazdığı ifadeleri (“Adapazarı” → Sakarya, “Kırkayak” → 10 teker kamyon) LangGraph ve JSON Schema ile yapılandırılmış veritabanı sorgularına dönüştüren akışı kurdum." },
          { baslik: "Coğrafi Doğrulama Katmanı", metin: "Serbest metin ilanlarını 81 il / 973 ilçe referansına göre normalize eden doğrulama katmanını yazdım; panel tarafındaki optimizasyonlarla %300 hızlanma elde ettim." },
          { baslik: "Bütçe Koruma Motoru (FinOps)", metin: "Her kullanıcının anlık token harcamasını hesaplayıp aylık limite (monthly_cost_limit) ulaşıldığında sistemi frenleyen ApiManager modülünü geliştirdim." },
          { baslik: "Mobil & Backend", metin: "React Native (Expo) uygulamayı, FastAPI backend'i, OTP doğrulamayı, push bildirimi, admin panelini ve Google Play abonelik/RTDN entegrasyonunu uçtan uca geliştirdim." },
          { baslik: "Asenkron Mesaj Kuyruğu", metin: "Meta Webhook'una saniyede gelen onlarca mesajı sıraya sokan, sunucu kesintilerinde dahi mesaj kaybetmeyen self-healing PM2 altyapısını kurdum." }
        ]
      },
      {
        ad: "TrueMax.ai — AI Lead Generation & Outreach Pipeline",
        rol: "AI Otomasyon Mühendisi (Solo)",
        ozet: "Emlak ilanlarını tarayan, mülk sahiplerine WhatsApp üzerinden insan gibi ulaşan ve sıcak müşteriyi danışmanlara otomatik dağıtan ciro motoru. 30.000+ mülk sahibine ulaşıldı, 2.778 iş birliği onayı alındı, taranan portföyün toplam bedeli 39,1 milyar TL. Ofise 4 ayda +1,5 milyon TL net ciro kazandırdı.",
        stack: "Python · Selenium · Node.js · WhatsApp · LLM · SQLite",
        maddeler: [
          { baslik: "Anti-Ban Hibrit Scraper", metin: "Selenium ile gerçek tarayıcı oturumu (cookie/session) yakalayıp ağır veri trafiğini hızlı requests.Session üzerinden akıtan hibrit veri çekme motorunu tasarladım." },
          { baslik: "İnsansı İkna Algoritması", metin: "Bot tespitini aşmak için sendSeen() kancaları ve rastgele 2–5 saniyelik jitter gecikmeleriyle simüle edilmiş bir asistan akışı kurguladım." },
          { baslik: "120 Dakika Katı SLA Motoru", metin: "Sıcak müşteriyi danışmana atayan, 120 dakika içinde aranmazsa portföyü Round-Robin ile sıradaki danışmana devreden sorumluluk takip modülünü yazdım." },
          { baslik: "Maliyet Optimizasyonu", metin: "Prompt sadeleştirme ve önbellekleme ile LLM maliyetinde ~%70 tasarruf sağladım. Aynı motoru RED-i adıyla RedPartners için yeniden kurdum." }
        ]
      },
      {
        ad: "Gerçek Zamanlı BI & Kiosk Dashboard'u",
        rol: "Frontend & Veri Mimarı",
        ozet: "Ofis lobisinde 7/24 dönen, 40+ danışmanın anlık satış yarışını, ofis cirosunu ve canlı döviz/altın/kripto kurlarını gösteren TV yayını ve yönetim paneli; 215 gerçek işlem verisiyle canlı çalıştı.",
        stack: "React · Express · SQLite (WAL) · TanStack Query · Google Sheets API",
        maddeler: [
          { baslik: "Veri Temizleme Hattı", metin: "Elle girilen bozuk verileri (örn. “1.500.00tl”, “1500000”) RegEx boru hatlarıyla normalize eden sanitization katmanını yazdım; raporlama hata oranını %15'ten %0,01'e düşürdüm." },
          { baslik: "Kilitlenmez Veritabanı", metin: "İki arka plan botunun eşzamanlı yazdığı senaryoda SQLITE_BUSY hatasını önlemek için WAL (Write-Ahead Logging) modunu devreye aldım." },
          { baslik: "Otonom Kiosk Motoru", metin: "TV tarayıcısını DOM Fullscreen API ile otomatik tetikleyen, sayfayı yenilemeden TanStack Query ile veriyi tazeleyen arayüzü kodladım." }
        ]
      },
      {
        ad: "Quadmate — Konum Bazlı Oyun Arkadaşı Eşleştirme Uygulaması",
        rol: "Yazılım Mühendisi (Solo)",
        ozet: "Oyuncuların bir masa veya etkinlik için eksik oyuncuyu konum bazlı bulmasını sağlayan mobil uygulama; kullanıcılar harita üzerinden yakındaki açık masaları görür, ilanlara katılır veya kendi masasını açar.",
        stack: "React Native (Expo) · Supabase · PostGIS · Push Notification",
        maddeler: [
          { baslik: "Coğrafi Eşleştirme", metin: "PostGIS ile yarıçap bazlı sorguları, Supabase üzerinde satır düzeyi güvenliği (RLS) ve gerçek zamanlı abonelikleri kurdum." },
          { baslik: "Mobil Teslimat", metin: "Tek kod tabanından iOS ve Android çıktısı aldım; push bildirim akışını ve mağaza yayın sürecini yönettim." }
        ]
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
      { ad: "Cloud & DevOps", deger: "AWS (Certified Cloud Practitioner, CLF-C02), Docker, Linux server administration (Ubuntu VDS, Oracle Cloud), PM2, Cloudflare Tunnel, Git & GitHub" },
      { ad: "Languages (spoken)", deger: "Turkish (native), English (B2 — AWS certification exam completed in English), German (A1, beginner)" }
    ],

    deneyim: [
      {
        kurum: "Freelance / Karaarslan Digital",
        rol: "Software Engineer (AI, Backend & Mobile)",
        tarih: "11/2025 – Present",
        maddeler: [
          "Build AI agents, ETL pipelines, and mobile applications for SMEs and institutional clients, owning the full technical delivery from architecture design through store release.",
          { baslik: "Tırdaş (02/2026 – Present)", metin: "Built an AI-powered logistics SaaS platform, WhatsApp dispatch bot, and mobile app, now live on Google Play and the App Store. Delivered the core build in 06/2026 and continue to run the platform under an ongoing paid maintenance, feature, and support retainer." },
          { baslik: "Quadmate", metin: "Shipped a location-based gaming-partner matchmaking app end to end (React Native + Supabase/PostGIS)." },
          "Delivered corporate web, hosting, and SEO projects (CleanHome, Nilbaşak) and productized a resellable “Ready Solutions” line (AI customer agent, QR menu, KPI dashboard, data harvesting).",
          { baslik: "Impact", metin: "Automated 90% of clients' manual data entry operations, compressing an 8-hour weekly workload down to 5 seconds." }
        ]
      },
      {
        kurum: "RE/MAX True",
        rol: "AI & Automation Programmer",
        tarih: "09/2024 – 10/2025",
        maddeler: [
          "Joined as a real estate agent; internal automations I wrote to streamline field operations were noticed by management, and I moved into the AI & Automation Programmer role within two months (11/2024).",
          "Solely architected the “TrueMax” ecosystem — an anti-ban scraper, an SLA lead dispatcher, and an AI outreach orchestrator — and redeployed the same engine as RED-i for RedPartners.",
          "Expanded the office's active client portfolio by 60%+ and total branch revenue by 40%+, generating +1.5M TL in net revenue within 4 months.",
          "Designed and built the real-time BI dashboard tracking 40+ agents, cutting weekly reporting time from 8 hours to 5 seconds."
        ]
      },
      {
        kurum: "Özgelecek İK Teknolojileri A.Ş.",
        rol: "Data & Software Developer",
        tarih: "04/2024 – 08/2024",
        maddeler: [
          "Developed Python automations for data processing and reporting, enabling the team to consistently exceed weekly output targets.",
          "Promoted from intern to Data & Software Developer within two months based on technical delivery."
        ]
      },
      {
        kurum: "Freelance",
        rol: "Python Developer",
        tarih: "03/2020 – 01/2024",
        maddeler: [
          "Built custom backend automation scripts and web scrapers for e-commerce clients, and maintained the systems I delivered."
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
      "MoNE Lifelong Learning — Object-Oriented Programming (Python), Internet of Things (Basic), Robotics Applications, Occupational Health & Safety (2026)",
      "AWS Certified Cloud Practitioner (CLF-C02) Official Practice Question Set — AWS Training & Certification (10/2025)",
      "BTK Academy — AI Ethics, Effective Communication Strategies, Communication & Network Management, Customer Insight (05/2025)",
      "IT Internship — TNC Group · Europäisches Bildungsinstitut (07/2025)"
    ],

    projeler: [
      {
        ad: "Tırdaş — AI-Powered Logistics SaaS, Mobile App & WhatsApp Bot",
        rol: "Software Engineer (Solo)",
        ozet: "An autonomous dispatching ops-center connecting logistics carriers with truck drivers. The moment a driver writes “I'm in Gebze, heading to Ankara, find me a load,” the system matches the best available freight, reports route weather, logs expenses, and escalates unresolved cases to a live support operator. The mobile app is live on Google Play and the App Store, sharing a single listing pool with the WhatsApp bot.",
        stack: "Python · FastAPI · LangGraph · PostgreSQL · React Native (Expo) · Meta Cloud API · PM2",
        maddeler: [
          { baslik: "Colloquial NLP Pipeline", metin: "Built a LangGraph & JSON Schema workflow translating slang and misspelled trucking terminology (e.g., “Kırkayak” → 10-wheel truck) into strict, structured database queries." },
          { baslik: "Geographic Validation Layer", metin: "Wrote a validation layer normalizing free-text listings against an 81-province / 973-district reference set; accompanying panel optimizations delivered a 300% speed-up." },
          { baslik: "FinOps Budget Engine", metin: "Engineered an ApiManager module that calculates real-time token spend per user and throttles the system on reaching the monthly cost limit (monthly_cost_limit)." },
          { baslik: "Mobile & Backend", metin: "Delivered the React Native (Expo) client, FastAPI backend, OTP authentication, push notifications, admin panel, and Google Play subscription/RTDN integration end to end." },
          { baslik: "Async Message Queue", metin: "Built a self-healing PM2 queue that ingests high-frequency Meta Webhook bursts without payload loss during server outages." }
        ]
      },
      {
        ad: "TrueMax.ai — AI Lead Generation & Outreach Pipeline",
        rol: "AI Automation Engineer (Solo)",
        ozet: "A revenue engine that scrapes property listings, reaches owners with human-like WhatsApp outreach, and auto-distributes warm leads to agents. 30,000+ property owners reached, 2,778 collaboration approvals secured, across a scanned portfolio worth 39.1 billion TL. Generated +1.5M TL in net revenue for the office in 4 months.",
        stack: "Python · Selenium · Node.js · WhatsApp · LLM · SQLite",
        maddeler: [
          { baslik: "Anti-Ban Hybrid Scraper", metin: "Designed a hybrid extraction engine capturing a real browser session (cookie/session) via Selenium, then offloading heavy traffic to fast requests.Session tunnels." },
          { baslik: "Human-Simulation Algorithm", metin: "Bypassed bot detection with dynamic sendSeen() hooks and randomized 2–5 second jitter delays." },
          { baslik: "Strict 120-Minute SLA Engine", metin: "Wrote the accountability module that assigns warm leads to agents and reassigns them Round-Robin to the next agent if uncontacted within 2 hours." },
          { baslik: "Cost Optimization", metin: "Cut LLM spend by ~70% through prompt compression and caching, and redeployed the engine as RED-i for RedPartners." }
        ]
      },
      {
        ad: "Real-Time BI & Kiosk Dashboard",
        rol: "Frontend & Data Architect",
        ozet: "A 24/7 lobby TV broadcast and management panel tracking real-time sales competition across 40+ agents, office revenue, and live currency/gold/crypto rates; ran in production on 215 real transactions.",
        stack: "React · Express · SQLite (WAL) · TanStack Query · Google Sheets API",
        maddeler: [
          { baslik: "Data Sanitization Layer", metin: "Built RegEx pipelines normalizing manually entered malformed values (e.g., “1.500.00tl”, “1500000”), cutting the reporting error rate from 15% to 0.01%." },
          { baslik: "Lock-Free Concurrency", metin: "Enabled SQLite WAL (Write-Ahead Logging) mode to prevent SQLITE_BUSY deadlocks during concurrent writes from two background bots." },
          { baslik: "Autonomous Kiosk Engine", metin: "Coded a zero-refresh UI triggering the lobby browser via the DOM Fullscreen API and keeping data live with TanStack Query." }
        ]
      },
      {
        ad: "Quadmate — Location-Based Gaming Partner Matchmaking App",
        rol: "Software Engineer (Solo)",
        ozet: "A mobile app helping players find the missing participant for a table or event nearby — users browse open tables on a map, join listings, or open their own table.",
        stack: "React Native (Expo) · Supabase · PostGIS · Push Notifications",
        maddeler: [
          { baslik: "Geospatial Matching", metin: "Implemented radius-based PostGIS queries, row-level security (RLS), and real-time subscriptions on Supabase." },
          { baslik: "Mobile Delivery", metin: "Shipped iOS and Android from a single codebase, owning the push notification pipeline and store release process." }
        ]
      }
    ],

    diger: [
      { ad: "Crypto Strategy Bot", metin: "A scheduled strategy bot and control panel written using only the Python standard library — leverage, TP/SL, and position sizing controls with a live PnL feed; demoed to the client in paper-trading mode." },
      { ad: "Telegram Ops Bot", metin: "Deployed a notification bot on Oracle Cloud that monitors defined sources 24/7 and surfaces one-tap inline-keyboard actions when conditions are met." },
      { ad: "Corporate Web & Hosting", metin: "Delivered corporate sites for CleanHome and Nilbaşak with SSL, quote forms, SMTP/HTTP mail integration, and SEO foundations — running uninterrupted since delivery." }
    ]
  }
};
