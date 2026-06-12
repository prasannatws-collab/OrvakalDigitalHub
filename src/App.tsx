import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Building2,
  Sprout,
  Home,
  Briefcase,
  Phone,
  ShieldAlert,
  Wrench,
  Plus,
  CheckCircle2,
  X,
  Star,
  MapPin,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Bell,
  Sun,
  Moon,
  Search,
  Car,
  Compass,
  Utensils,
  Droplet,
  GraduationCap,
  Landmark,
  UserCheck,
  CloudSun,
  Clock,
  Package
} from 'lucide-react';
import {
  translations,
  govtOfficers,
  emergencies,
  schools,
  rentals,
  jobs,
  labourRegistry,
  notices,
  worshipPlaces,
  attractions,
  powerSchedules,
  repairMechanics,
  agriContacts,
  vegMandiRates,
  mandiRates,
  commercialShops,
  flights,
  buses,
  trains,
  tractorRentals,
  advisories,
  waterReservoirs,
  govtMspRates,
  cropHolidays,
  industries,
  postalServices,
  banksAndAtms,
  govtSchemes,
  newsItems,
  committees
} from './data/mockData';
import type { SchoolTeacher } from './data/mockData';
import type {
  Language,
  GovtOfficer,
  RentalProperty,
  JobPost,
  Labour,
  IndustrialPlant,
  CommercialShop
} from './data/mockData';

function App() {
  // Application State
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeTab, setActiveTab] = useState<'home' | 'directory' | 'farmer' | 'hospitality' | 'jobs' | 'insights'>('home');
  const [transitTab, setTransitTab] = useState<'flights' | 'buses' | 'trains'>('flights');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSos, setShowSos] = useState(true);
  
  // Persona quick recommendation state
  const [activePersona, setActivePersona] = useState<'student' | 'farmer' | 'citizen' | 'tourist' | 'officer' | null>(null);

  // Sub-tab selectors
  const [directorySubTab, setDirectorySubTab] = useState<'govt' | 'education' | 'grievance' | 'postal' | 'banks' | 'police' | 'hospital' | 'schemes' | 'committees' | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<SchoolTeacher | null>(null);
  const [selectedSchemeCategory, setSelectedSchemeCategory] = useState<'farmer' | 'students' | 'women' | 'business' | 'insurance' | 'investment' | 'welfare' | 'all'>('all');
  const [selectedSchemeType, setSelectedSchemeType] = useState<'central' | 'state' | 'bank' | 'postal' | 'all'>('all');
  const [jobsCommerceSubTab, setJobsCommerceSubTab] = useState<'job' | 'labour'>('job');
  const [farmerSubTab, setFarmerSubTab] = useState<'feeder' | 'mandi' | 'msp' | 'tractor' | 'advisory' | 'crop-holiday' | 'water' | 'repair' | 'agri-officer'>('feeder');
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | null>(null);

  // Modals / Details
  const [selectedOfficer, setSelectedOfficer] = useState<GovtOfficer | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const [selectedRental, setSelectedRental] = useState<RentalProperty | null>(null);
  const [selectedShop, setSelectedShop] = useState<CommercialShop | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrialPlant | null>(null);
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [showOrvakalGlanceDetails, setShowOrvakalGlanceDetails] = useState(false);
  
  // Lists updated by user forms (Mock persistence)
  const [localJobs, setLocalJobs] = useState<JobPost[]>(jobs);
  const [localLabour, setLocalLabour] = useState<Labour[]>(labourRegistry);
  const [localRentals, setLocalRentals] = useState<RentalProperty[]>(rentals);
  const [grievances, setGrievances] = useState<any[]>([
    {
      id: "grv-1",
      name: "Prasanna Kumar",
      phone: "+91 9059123456",
      type: "water",
      desc: "Water pressure is very low near the high school lane since 2 days.",
      status: "In Progress",
      date: "2026-06-10"
    }
  ]);

  // Form states
  const [grievanceForm, setGrievanceForm] = useState({ name: '', phone: '', type: 'water', desc: '' });
  const [showGrievanceSuccess, setShowGrievanceSuccess] = useState(false);
  const [jobFormOpen, setJobFormOpen] = useState(false);
  const [newJob, setNewJob] = useState({ title: '', company: '', type: 'full-time', salary: '', requirements: '', desc: '', phone: '' });
  const [labourFormOpen, setLabourFormOpen] = useState(false);
  const [newLabour, setNewLabour] = useState({ name: '', skill: '', rate: '', phone: '', location: '' });
  const [rentalFormOpen, setRentalFormOpen] = useState(false);
  const [newRental, setNewRental] = useState({ type: 'house', rent: '', deposit: '', contactName: '', phone: '', details: '', location: '' });
  const [showNotificationDrawer, setShowNotificationDrawer] = useState(false);

  // Digital clock time state
  const [timeString, setTimeString] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Sync theme with document element
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  // Reset scroll and SOS banner visibility on tab changes
  useEffect(() => {
    const scrollContainer = window.document.querySelector('.app-content');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
    setShowSos(true);
  }, [activeTab]);

  // Translate helper
  const t = translations[lang];

  // Translate content objects
  const getTxt = (textObj: any) => {
    if (!textObj) return '';
    return textObj[lang] || textObj['en'] || '';
  };

  // Greeting key based on time
  const getGreetingKey = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'greetingMorning';
    if (hour < 18) return 'greetingEvening';
    return 'greetingNight';
  };

  // Translate shop category names
  const getShopCategoryName = (cat: string) => {
    const key = `cat_${cat.replace('-', '_')}`;
    const dict = translations[lang] as any;
    return dict[key] || cat;
  };

  // Form handlers
  const handleGrievanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!grievanceForm.name || !grievanceForm.phone || !grievanceForm.desc) return;
    
    const newGrievance = {
      id: `grv-${Date.now()}`,
      name: grievanceForm.name,
      phone: grievanceForm.phone,
      type: grievanceForm.type,
      desc: grievanceForm.desc,
      status: "Submitted",
      date: new Date().toISOString().split('T')[0]
    };

    setGrievances([newGrievance, ...grievances]);
    setGrievanceForm({ name: '', phone: '', type: 'water', desc: '' });
    setShowGrievanceSuccess(true);
    setTimeout(() => setShowGrievanceSuccess(false), 5000);
  };

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJob.title || !newJob.company || !newJob.phone) return;

    const jobItem: JobPost = {
      id: `job-${Date.now()}`,
      title: { en: newJob.title, te: newJob.title, hi: newJob.title },
      company: { en: newJob.company, te: newJob.company, hi: newJob.company },
      type: newJob.type as any,
      salary: { en: newJob.salary || 'Negotiable', te: newJob.salary || 'చర్చించబడుతుంది', hi: newJob.salary || 'बातचीत के अनुसार' },
      requirements: { en: newJob.requirements || 'N/A', te: newJob.requirements || 'సమాచారం లేదు', hi: newJob.requirements || 'उपलब्ध नहीं' },
      description: { en: newJob.desc || 'N/A', te: newJob.desc || 'సమాచారం లేదు', hi: newJob.desc || 'उपलब्ध नहीं' },
      phone: newJob.phone,
      postedDate: new Date().toISOString().split('T')[0]
    };

    setLocalJobs([jobItem, ...localJobs]);
    setNewJob({ title: '', company: '', type: 'full-time', salary: '', requirements: '', desc: '', phone: '' });
    setJobFormOpen(false);
    alert(t.registerSuccess);
  };

  const handleRegisterLabour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabour.name || !newLabour.skill || !newLabour.phone) return;

    const labourItem: Labour = {
      id: `lab-${Date.now()}`,
      name: { en: newLabour.name, te: newLabour.name, hi: newLabour.name },
      skill: { en: newLabour.skill, te: newLabour.skill, hi: newLabour.skill },
      rate: { en: newLabour.rate || 'Negotiable', te: newLabour.rate || 'చర్చించబడుతుంది', hi: newLabour.rate || 'बातचीत के अनुसार' },
      phone: newLabour.phone,
      location: { en: newLabour.location || 'Orvakal', te: newLabour.location || 'ఓర్వకల్లు', hi: newLabour.location || 'ओरवाकल' }
    };

    setLocalLabour([labourItem, ...localLabour]);
    setNewLabour({ name: '', skill: '', rate: '', phone: '', location: '' });
    setLabourFormOpen(false);
    alert(t.registerSuccess);
  };

  const handlePostRental = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRental.contactName || !newRental.rent || !newRental.phone) return;

    const rentalItem: RentalProperty = {
      id: `rnt-${Date.now()}`,
      type: newRental.type as any,
      rent: parseInt(newRental.rent) || 0,
      deposit: parseInt(newRental.deposit) || 0,
      contactName: { en: newRental.contactName, te: newRental.contactName, hi: newRental.contactName },
      phone: newRental.phone,
      details: { en: newRental.details || 'Contact for details', te: newRental.details || 'వివరాల కోసం సంప్రదించండి', hi: newRental.details || 'विवरण के लिए संपर्क करें' },
      location: { en: newRental.location || 'Orvakal', te: newRental.location || 'ఓర్వకల్లు', hi: newRental.location || 'ओरवाकल' },
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80"
    };

    setLocalRentals([rentalItem, ...localRentals]);
    setNewRental({ type: 'house', rent: '', deposit: '', contactName: '', phone: '', details: '', location: '' });
    setRentalFormOpen(false);
    alert(t.registerSuccess);
  };

  // Nav shortcuts
  const handleShortcutClick = (tabName: 'home' | 'directory' | 'farmer' | 'hospitality' | 'jobs' | 'insights', subTabName?: string, query?: string) => {
    setActiveTab(tabName);
    setSearchQuery(query || '');
    if (tabName === 'directory' && subTabName) setDirectorySubTab(subTabName as any);
    if (tabName === 'farmer' && subTabName) setFarmerSubTab(subTabName as any);
    if (tabName === 'hospitality') {
      setSelectedServiceCategory(subTabName || null);
    }
    if (tabName === 'jobs') {
      if (subTabName === 'business') {
        setActiveTab('hospitality');
        setSelectedServiceCategory(query || null);
        setSearchQuery('');
      } else {
        setJobsCommerceSubTab(subTabName as any);
      }
    }
  };

  // Scroll Fade function
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    if (scrollTop > 50) {
      setShowSos(false);
    } else {
      setShowSos(true);
    }
  };

  return (
    <div className="app-container">
      <div className="device-frame">
        <div className="device-notch"></div>
        {/* Ambient background glows for Liquid Glass effect */}
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>

        {/* Global Header */}
        <header className="app-header">
          <div className="header-top">
            <div className="app-branding">
              <div className="app-logo-icon" style={{ background: 'transparent', boxShadow: 'none', padding: 0, overflow: 'visible', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                  {/* Rising Sun Background */}
                  <circle cx="50" cy="38" r="22" fill="url(#sunGradient)" />
                  {/* Sprout/Leaf inside */}
                  <path d="M50 75 V42 C50 42 38 46 38 56 C38 66 50 70 50 70 C50 70 62 66 62 56 C62 46 50 42 50 42 Z" fill="url(#leafGradient)" />
                  <path d="M50 50 C50 50 56 42 62 42 C68 42 68 50 50 56" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                  {/* Gear Border representing Industrialists */}
                  <path d="M50 12 A38 38 0 0 1 88 50 A38 38 0 0 1 50 88 A38 38 0 0 1 12 50 A38 38 0 0 1 50 12 Z" stroke="url(#gearGradient)" strokeWidth="6" strokeDasharray="16 6" />
                  
                  <defs>
                    <linearGradient id="sunGradient" x1="50" y1="16" x2="50" y2="60" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="leafGradient" x1="50" y1="42" x2="50" y2="75" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#15803d" />
                    </linearGradient>
                    <linearGradient id="gearGradient" x1="12" y1="12" x2="88" y2="88" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="app-title-container">
                <span className="app-title">{t.title}</span>
                <span className="app-subtitle">{t.subtitle}</span>
              </div>
            </div>

            <div className="header-actions">
              <select
                className="lang-selector"
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                aria-label="Language Toggle Selector"
              >
                <option value="en">EN</option>
                <option value="te">తెలుగు</option>
                <option value="hi">हिंदी</option>
              </select>

              <button
                className="icon-btn"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                title="Toggle Dark/Light Mode"
              >
                {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
              </button>

              <button 
                className="icon-btn" 
                style={{ position: 'relative' }}
                onClick={() => setShowNotificationDrawer(!showNotificationDrawer)}
                title="Toggle Notice board Drawer"
              >
                <Bell size={15} />
                <span style={{ 
                  position: 'absolute', 
                  top: '-2px', 
                  right: '-2px', 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ef4444' 
                }}></span>
              </button>
            </div>
          </div>

          <div className="search-container">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              className="search-input"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        {/* Scroll-fading SOS Banner */}
        <div className={`sos-strip ${showSos ? '' : 'fade-out'}`} onClick={() => setSosModalOpen(true)}>
          <span className="sos-title">
            <ShieldAlert size={18} />
            {t.emergencySOS}
          </span>
          <span className="badge badge-danger">24/7 CALL</span>
        </div>

        {/* Notice board sliding overlay drawer */}
        {showNotificationDrawer && (
          <div className="card fade-in" style={{ margin: '12px', zIndex: 90, backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--primary))' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Bell size={16} /> Notice Board ({notices.length})
              </h3>
              <button className="icon-btn" onClick={() => setShowNotificationDrawer(false)} style={{ width: '20px', height: '20px' }}><X size={10} /></button>
            </div>
            <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
              {notices.map((n) => (
                <div key={n.id} className={`notice-item ${n.type === 'alert' ? 'alert' : ''}`}>
                  <div className="notice-title">{getTxt(n.title)}</div>
                  <p>{getTxt(n.content)}</p>
                  <small style={{ color: 'hsl(var(--muted-foreground))' }}>{n.date}</small>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="app-content" onScroll={handleScroll}>

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'home' && (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Orvakal Banner */}
              <div className="card banner-card">
                <div>
                  <h2>Orvakal Hub</h2>
                  <p style={{ fontSize: '0.78rem', opacity: 0.95 }}>
                    {lang === 'en' && "Andhra Pradesh's fast-growing mega industrial hub. Solar parks, flight transit, and agricultural services at your fingertips."}
                    {lang === 'te' && "ఆంధ్రప్రదేశ్ అత్యంత వేగంగా ఎదుగుతున్న పారిశ్రామిక గ్రామం. విమానాశ్రయం, సోలార్ పార్కులు మరియు రైతు సేవలు."}
                    {lang === 'hi' && "आंध्र प्रदेश का सबसे तेजी से बढ़ता औद्योगिक ग्राम। हवाई अड्डा, सोलर पार्क और किसान सेवाएं आपके हाथ में।"}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={10} /> Active Panchayat
                  </span>
                  <span className="badge badge-info" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Airport KJB
                  </span>
                </div>
              </div>

              {/* Expanded Weather & Time Card (Liquid Glass style) */}
              <div className="card" style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--card)) 100%)', border: '1px solid var(--glass-border)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  {/* Left: Weather Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {t.weather}
                      </span>
                      <CloudSun size={14} style={{ color: 'hsl(var(--secondary))' }} />
                    </div>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.1, marginTop: '4px' }}>{t.weatherTemp.split(' ')[0]}</span>
                    <span style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>{t.weatherCondition}</span>
                    <span style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>{t.weatherHumidity}</span>
                  </div>

                  {/* Right: Digital Clock & Greeting */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', gap: '4px' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'hsl(var(--foreground))', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '4px', lineHeight: 1 }}>
                      <Clock size={18} style={{ color: 'hsl(var(--primary))' }} /> {timeString}
                    </span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--primary))', marginTop: '4px', padding: '2px 8px', backgroundColor: 'hsl(var(--primary) / 0.1)', borderRadius: '12px' }}>
                      {lang === 'en' ? "Local Time" : lang === 'te' ? "స్థానిక సమయం" : "स्थानीय समय"}
                    </span>
                    <p style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500, maxWidth: '140px', margin: 0, marginTop: '2px', lineHeight: 1.2 }}>
                      {t[getGreetingKey() as keyof typeof translations.en] || t.greetingMorning}
                    </p>
                  </div>
                </div>
              </div>

              {/* ROLE-BASED PERSONA SEARCH DECK */}
              <div className="card" style={{ borderTop: '4px solid hsl(var(--secondary))' }}>
                <h3 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                  <UserCheck size={16} /> {t.personaTitle}
                </h3>
                <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>{t.personaPrompt}</p>
                
                {/* Persona choice buttons + Direct Quick Links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '4px 0' }}>
                  <button className={`tab-pill ${activePersona === 'farmer' ? 'active' : ''}`} onClick={() => setActivePersona(activePersona === 'farmer' ? null : 'farmer')}>
                    🌾 {t.farmer}
                  </button>
                  <button className={`tab-pill ${activePersona === 'student' ? 'active' : ''}`} onClick={() => setActivePersona(activePersona === 'student' ? null : 'student')}>
                    🎓 {t.student}
                  </button>
                  <button className={`tab-pill ${activePersona === 'citizen' ? 'active' : ''}`} onClick={() => setActivePersona(activePersona === 'citizen' ? null : 'citizen')}>
                    🏡 {t.citizen}
                  </button>
                  <button className={`tab-pill ${activePersona === 'tourist' ? 'active' : ''}`} onClick={() => setActivePersona(activePersona === 'tourist' ? null : 'tourist')}>
                    🗺️ {t.tourist}
                  </button>
                  <button className={`tab-pill ${activePersona === 'officer' ? 'active' : ''}`} onClick={() => setActivePersona(activePersona === 'officer' ? null : 'officer')}>
                    💼 {t.officer}
                  </button>

                </div>

                {/* Dynamic Recommendation Output Box */}
                {activePersona && (
                  <div className="fade-in" style={{ backgroundColor: 'hsl(var(--accent) / 0.4)', padding: '12px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '8px', border: '1px solid hsl(var(--primary) / 0.1)', marginTop: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>
                        {activePersona === 'farmer' && (lang === 'en' ? "Farmer Resources" : lang === 'te' ? "రైతు సదుపాయాలు" : "किसान संसाधन")}
                        {activePersona === 'student' && (lang === 'en' ? "Student & Education Desk" : lang === 'te' ? "విద్యార్థి విభాగం" : "छात्र डेस्क")}
                        {activePersona === 'citizen' && (lang === 'en' ? "Citizen Local Services" : lang === 'te' ? "స్థానిక పౌర సేవలు" : "नागरिक स्थानीय सेवाएं")}
                        {activePersona === 'tourist' && (lang === 'en' ? "Tourist & Visitor Guide" : lang === 'te' ? "పర్యాటक मार्गदर्शक" : "पर्यटक गाइड")}
                        {activePersona === 'officer' && (lang === 'en' ? "Official Administration Desk" : lang === 'te' ? "అధికారిక పరిపాలన సమాచారం" : "अधिकारी प्रशासनिक डेस्क")}
                      </span>
                      <button onClick={() => setActivePersona(null)} style={{ background: 'none', border: 'none', color: 'hsl(var(--muted-foreground))', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer' }}>
                        {t.personaClear}
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {activePersona === 'farmer' && (
                        <>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('farmer', 'feeder')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Sprout size={12} color="green" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Feeder Hours" : lang === 'te' ? "కరెంట్ వేళలు" : "फीडर समय"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('farmer', 'mandi')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><ArrowUpRight size={12} color="orange" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Mandi Rates" : lang === 'te' ? "మార్కెట్ ధరలు" : "मंडी दरें"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('farmer', 'repair')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Wrench size={12} /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Agri Repairs" : lang === 'te' ? "మరమ్మతులు" : "कृषि मरम्मत"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('directory', 'grievance')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><FileText size={12} color="red" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "File Grievance" : lang === 'te' ? "ఫిర్యాదు చేయండి" : "शिकायत दर्ज करें"}
                            </span>
                          </button>
                        </>
                      )}
                      {activePersona === 'student' && (
                        <>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('directory', 'education')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><GraduationCap size={12} color="purple" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Schools & Info" : lang === 'te' ? "పాఠశాలలు" : "स्कूल जानकारी"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('jobs', 'job')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Briefcase size={12} /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Local Jobs" : lang === 'te' ? "ఉద్యోగాలు" : "स्थानीय नौकरियां"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('directory', 'grievance')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><FileText size={12} color="red" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "File Grievance" : lang === 'te' ? "ఫిర్యాదు చేయండి" : "शिकायत दर्ज करें"}
                            </span>
                          </button>
                        </>
                      )}
                      {activePersona === 'tourist' && (
                        <>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('hospitality', 'hotel')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Compass size={12} color="blue" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Hotels to Stay" : lang === 'te' ? "వసతి గృహాలు" : "होटल और लॉज"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('jobs', 'business', 'restaurant')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Utensils size={12} color="brown" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Restaurants" : lang === 'te' ? "రెస్టారెంట్లు" : "रेस्तरां"}
                            </span>
                          </button>
                        </>
                      )}
                      {activePersona === 'citizen' && (
                        <>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('directory', 'grievance')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><FileText size={12} color="red" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "File Grievance" : lang === 'te' ? "ఫిర్యాదు చేయండి" : "शिकायत दर्ज करें"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('jobs', 'business')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Droplet size={12} color="blue" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Local Shops" : lang === 'te' ? "స్థానిక షాపులు" : "स्थानीय दुकानें"}
                            </span>
                          </button>
                        </>
                      )}
                      {activePersona === 'officer' && (
                        <>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('directory', 'govt')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Landmark size={12} color="navy" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Sarpanch Info" : lang === 'te' ? "సర్పంచ్ వివరాలు" : "सरपंच जानकारी"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('hospitality', 'hall')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Compass size={12} /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "Banquet Halls" : lang === 'te' ? "ఫంక్షన్ హాళ్ళు" : "बैंक्वेट हॉल"}
                            </span>
                          </button>
                          <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => handleShortcutClick('directory', 'grievance')}>
                            <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><FileText size={12} color="red" /></div>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                              {lang === 'en' ? "File Grievance" : lang === 'te' ? "ఫిర్యాదు చేయండి" : "शिकायत दर्ज करें"}
                            </span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Static Quick Cards Grid */}
                <div style={{ marginTop: '14px', borderTop: '1px dashed hsl(var(--border) / 0.6)', paddingTop: '14px' }}>
                  <div className="quick-menu-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', margin: '4px 0', display: 'grid' }}>
                    <div className="quick-card quick-card-red" onClick={() => setSosModalOpen(true)} style={{ minHeight: '72px', padding: '8px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div className="quick-card-icon" style={{ fontSize: '1.2rem', margin: 0 }}>🚨</div>
                      <span className="quick-card-label" style={{ fontSize: '0.62rem', fontWeight: 700, marginTop: '4px' }}>Emergency</span>
                    </div>
                    <div className="quick-card quick-card-blue" onClick={() => { handleShortcutClick('home'); setTimeout(() => { const el = document.querySelector('.transport-card'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); }} style={{ minHeight: '72px', padding: '8px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div className="quick-card-icon" style={{ fontSize: '1.2rem', margin: 0 }}>🚌</div>
                      <span className="quick-card-label" style={{ fontSize: '0.62rem', fontWeight: 700, marginTop: '4px' }}>Transport</span>
                    </div>
                    <div className="quick-card quick-card-green" onClick={() => handleShortcutClick('hospitality', 'hotel')} style={{ minHeight: '72px', padding: '8px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div className="quick-card-icon" style={{ fontSize: '1.2rem', margin: 0 }}>🏨</div>
                      <span className="quick-card-label" style={{ fontSize: '0.62rem', fontWeight: 700, marginTop: '4px' }}>Hotel Stays</span>
                    </div>
                    <div className="quick-card quick-card-purple" onClick={() => handleShortcutClick('directory', 'committees')} style={{ minHeight: '72px', padding: '8px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div className="quick-card-icon" style={{ fontSize: '1.2rem', margin: 0 }}>👥</div>
                      <span className="quick-card-label" style={{ fontSize: '0.62rem', fontWeight: 700, marginTop: '4px' }}>Committees</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bulletin Board Notice List */}
              <div className="card">
                <h3 className="section-title" style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Bell size={15} style={{ color: 'hsl(var(--primary))' }} /> {lang === 'en' ? "Notice Board" : lang === 'te' ? "సమాచార బోర్డు" : "सूचना पट्ट"}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {notices.map((n) => (
                    <div key={n.id} className={`notice-item ${n.type === 'alert' ? 'alert' : ''}`} style={{ margin: 0, borderLeftWidth: '4px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>{getTxt(n.title)}</span>
                        <span style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>{n.date}</span>
                      </div>
                      <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', lineHeight: 1.3 }}>{getTxt(n.content)}</p>
                    </div>
                  ))}
                </div>
              </div>


              {/* Transit & Transport Desk */}
              <div className="card transport-card">
                <h3 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                  🚌 {t.transitTransport}
                </h3>
                
                {/* 3-way toggle switcher */}
                <div className="transit-toggle-container">
                  <button className={`transit-toggle-btn ${transitTab === 'flights' ? 'active' : ''}`} onClick={() => setTransitTab('flights')}>
                    ✈️ {t.flightsTab}
                  </button>
                  <button className={`transit-toggle-btn ${transitTab === 'buses' ? 'active' : ''}`} onClick={() => setTransitTab('buses')}>
                    🚌 {t.busesTab}
                  </button>
                  <button className={`transit-toggle-btn ${transitTab === 'trains' ? 'active' : ''}`} onClick={() => setTransitTab('trains')}>
                    🚂 {t.trainsTab}
                  </button>
                </div>

                <div className="transit-info-list">
                  {/* Flight sub-view */}
                  {transitTab === 'flights' && flights.map(flight => (
                    <div key={flight.id} className="transit-item-card">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>{flight.flightNo}</span>
                          <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>({getTxt(flight.airline)})</span>
                        </div>
                        <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                          {getTxt(flight.from)} ➔ {getTxt(flight.to)}
                        </div>
                        <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>
                          {lang === 'en' ? 'Days:' : lang === 'te' ? 'రోజులు:' : 'दिन:'} {getTxt(flight.days)}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{flight.departure}</div>
                        <span className={`badge ${getTxt(flight.status).includes('Delayed') ? 'badge-danger' : 'badge-success'}`} style={{ fontSize: '0.6rem' }}>
                          {getTxt(flight.status)}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Bus sub-view */}
                  {transitTab === 'buses' && buses.map(busItem => (
                    <div key={busItem.id} className="transit-item-card">
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>{busItem.busNo}</span>
                          <span className="badge badge-info" style={{ fontSize: '0.6rem' }}>{getTxt(busItem.type)}</span>
                        </div>
                        <div style={{ fontSize: '0.68rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginTop: '4px' }}>
                          {getTxt(busItem.route)}
                        </div>
                        <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                          ⏱️ {getTxt(busItem.timing)}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Train sub-view */}
                  {transitTab === 'trains' && (
                    <>
                      <div style={{ padding: '4px 6px', backgroundColor: 'hsl(var(--accent) / 0.4)', borderRadius: '6px', fontSize: '0.65rem', color: 'hsl(var(--accent-foreground))', fontWeight: 600, textAlign: 'center' }}>
                        📍 {t.nearestStation}
                      </div>
                      {trains.map(trainItem => (
                        <div key={trainItem.id} className="transit-item-card">
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>#{trainItem.trainNo}</span>
                              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'hsl(var(--foreground))' }}>{getTxt(trainItem.name)}</span>
                            </div>
                            <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                              {getTxt(trainItem.route)}
                            </div>
                            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>
                              {t.daysRun}: {getTxt(trainItem.days)}
                            </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'hsl(var(--secondary))' }}>
                              {getTxt(trainItem.timing)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>




              {/* Quick stats panel */}
              <div className="card" style={{ border: '2px solid hsl(var(--primary) / 0.18)', boxShadow: '0 8px 24px -6px hsl(var(--primary) / 0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 className="section-title" style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800 }}>{t.quickStats}</h3>
                  <button
                    className="btn btn-primary"
                    style={{
                      flex: 'none',
                      width: 'auto',
                      fontSize: '0.72rem',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)',
                      color: 'white',
                      fontWeight: 800,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(190, 18, 60, 0.25)',
                      transition: 'transform 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    onClick={() => setActiveTab('insights')}
                  >
                    <span>💡 Hub Insights</span>
                  </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '4px' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', textAlign: 'center', cursor: 'pointer' }} onClick={() => handleShortcutClick('home', undefined, 'industry')}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>{industries.length}</div>
                    <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>{t.activeIndustries}</div>
                  </div>
                  <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', textAlign: 'center', cursor: 'pointer' }} onClick={() => handleShortcutClick('jobs', 'job')}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>{localJobs.length}</div>
                    <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>{t.openJobs}</div>
                  </div>
                </div>

                {/* Active Industries Badges */}
                <div style={{ marginTop: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))', display: 'block', marginBottom: '6px' }}>
                    🏢 {t.activeIndustriesList || "Active Mega Industries:"}
                  </span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {industries.map(ind => (
                      <span key={ind.id} className="badge badge-info" style={{ fontSize: '0.6rem', padding: '4px 8px', cursor: 'pointer' }} onClick={() => setSelectedIndustry(ind)}>
                        {getTxt(ind.name).replace(" Ultra Mega Solar Park", "").replace(" Plant", "").replace(" Limited", "").replace(" (APIIC)", "")}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industrial Hub News Feed */}
              <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                <h3 className="section-title" style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  📰 {lang === 'en' ? "Industrial Hub News" : lang === 'te' ? "పారిశ్రామిక హబ్ వార్తలు" : "औद्योगिक हब समाचार"}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '300px', overflowY: 'auto', paddingRight: '4px' }}>
                  {newsItems.map((news) => (
                    <div key={news.id} className="notice-item" style={{ margin: 0, padding: '8px 10px', backgroundColor: 'hsl(var(--muted) / 0.25)', borderLeft: '2px solid hsl(var(--secondary))' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--foreground))' }}>{getTxt(news.title)}</span>
                        <span style={{ fontSize: '0.58rem', color: 'hsl(var(--muted-foreground))', whiteSpace: 'nowrap' }}>{news.date}</span>
                      </div>
                      <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', lineHeight: 1.3 }}>{getTxt(news.summary)}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '0.58rem', color: 'hsl(var(--muted-foreground))' }}>
                        <span>Source: {getTxt(news.source)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Tourism, Religious & Day out Places */}
              <div className="card">
                <h3 className="section-title" style={{ marginTop: 0 }}>{t.attractions}</h3>
                <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px' }}>
                  {attractions.map(att => (
                    <div key={att.id} style={{ minWidth: '220px', width: '220px', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px', overflow: 'hidden' }}>
                      <img src={att.image} alt="Attraction preview" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <h4 style={{ fontSize: '0.78rem' }}>{getTxt(att.name)}</h4>
                        <p style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', height: '40px', overflow: 'hidden' }}>{getTxt(att.description)}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', fontWeight: 700, borderTop: '1px solid hsl(var(--border))', paddingTop: '4px', marginTop: '4px' }}>
                          <span>{getTxt(att.distance)}</span>
                          <span style={{ color: 'hsl(var(--primary))' }}>Open</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DIRECTORY & GOVERNANCE */}
          {activeTab === 'directory' && (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {directorySubTab === null ? (
                <div className="govt-menu-container">
                  {/* 1. Grievance */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('grievance')}>
                    <div className="govt-menu-icon">📝</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Panchayat Grievance Desk" : lang === 'te' ? "పంచాయతీ ఫిర్యాదుల విభాగం" : "पंचायत शिकायत डेस्क"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "Submit and track civic issues directly with local authorities." : lang === 'te' ? "వీధి దీపాలు, నీటి సరఫరా మరియు రోడ్ల సమస్యలపై ఫిర్యాదులు చేయండి." : "सड़क, पानी और बिजली जैसी नागरिक समस्याओं की शिकायत दर्ज करें।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>

                  {/* 2. Offices & Officers */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('govt')}>
                    <div className="govt-menu-icon">🏛️</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Government Offices & Officers" : lang === 'te' ? "ప్రభుత్వ కార్యాలయాలు & అధికారులు" : "सरकारी कार्यालय और अधिकारी"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "Contact information for local Panchayat, SRO, Tahsildar, and RBK." : lang === 'te' ? "సర్పంచ్, పంచాయతీ కార్యదర్శి, తహశీల్దార్ మరియు మీసేవ ఫోన్ నంబర్లు." : "सरपंच, पंचायत सचिव, तहसीलदार और मीसेवा के संपर्क नंबर।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>

                  {/* 3. Schools */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('education')}>
                    <div className="govt-menu-icon">🏫</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Schools & Education Centres" : lang === 'te' ? "పాఠశాలలు & విద్యా సంస్థలు" : "स्कूल और शिक्षा केंद्र"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "List of local schools, junior colleges, and tuition classes." : lang === 'te' ? "స్థానిక ప్రభుత్వ పాఠశాలలు, జూనియర్ కళాశాలలు మరియు కోచింగ్ వివరాలు." : "स्थानीय सरकारी स्कूलों, जूनियर कॉलेजों और कोचिंग सेंटरों का विवरण।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>

                  {/* 4. Postal */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('postal')}>
                    <div className="govt-menu-icon">📯</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Post Office & Postal Services" : lang === 'te' ? "తపాలా కార్యాలయం & సేవలు" : "डाकघर और डाक सेवाएं"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "Local Sub-Post office timings, services, pin codes, and staff." : lang === 'te' ? "ఓర్వకల్లు సబ్ పోస్ట్ ఆఫీస్ పని వేళలు, పిన్ కోడ్ మరియు సిబ్బంది సమాచారం." : "ओरवाकल उप-डाकघर का समय, पिन कोड और सेवाओं की जानकारी।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>

                  {/* 5. Banks */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('banks')}>
                    <div className="govt-menu-icon">🏦</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Banks & ATMs" : lang === 'te' ? "బ్యాంకులు & ఏటీఎంలు" : "बैंक और एटीएम"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "Local bank branches (SBI, APGB) with IFSC and 24/7 ATM status." : lang === 'te' ? "స్థానిక బ్యాంకు బ్రాంచులు, ఐఎఫ్ఎస్ కోడ్ మరియు ఏటీఎంల తాజా సమాచారం." : "स्थानीय बैंक शाखाओं, आईएफएससी कोड और एटीएम की स्थिति।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>

                  {/* 6. Schemes */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('schemes')}>
                    <div className="govt-menu-icon">📜</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Government Schemes" : lang === 'te' ? "ప్రభుత్వ పథకాలు" : "सरकारी योजनाएं"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "Browse welfare, student, farmer, and business empowerment schemes." : lang === 'te' ? "రైతులు, విద్యార్థులు, మహిళలు మరియు వ్యాపార ప్రభుత్వ పథకాల వివరాలు." : "कल्याणकारी, छात्र, किसान और व्यावसायिक सशक्तिकरण योजनाओं की जानकारी।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>

                  {/* 7. Police Station */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('police')}>
                    <div className="govt-menu-icon">👮</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Police Station & Security" : lang === 'te' ? "పోలీస్ స్టేషన్ & భద్రత" : "पुलिस स्टेशन और सुरक्षा"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "Contact information, Sub-Inspector details, and services of Orvakal PS." : lang === 'te' ? "ఓర్వకల్లు పోలీస్ స్టేషన్ ఎస్.ఐ ఫోన్ నంబర్, సిబ్బంది మరియు సేవల వివరాలు." : "ओरवाकल पुलिस स्टेशन के एसआई, स्टाफ और सेवाओं की जानकारी।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>

                  {/* 8. Hospital & PHC */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('hospital')}>
                    <div className="govt-menu-icon">🏥</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Primary Health Center (PHC)" : lang === 'te' ? "ప్రాథమిక ఆరోగ్య కేంద్రం (PHC)" : "प्राथमिक स्वास्थ्य केंद्र (PHC)"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "OPD timings, bed capacity, doctors list, and medical facilities." : lang === 'te' ? "ఓర్వకల్లు ప్రభుత్వ ఆసుపత్రి పని వేళలు, వైద్యులు మరియు వసతుల వివరాలు." : "ओरवाकल सरकारी अस्पताल के समय, डॉक्टरों और सुविधाओं का विवरण।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>

                  {/* 9. Committees */}
                  <div className="govt-menu-card" onClick={() => setDirectorySubTab('committees')}>
                    <div className="govt-menu-icon">👥</div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title">{lang === 'en' ? "Committees & Clubs" : lang === 'te' ? "కమిటీలు & క్లబ్‌లు" : "समितियां और क्लब"}</span>
                      <span className="govt-menu-desc">
                        {lang === 'en' ? "Village administration, temple, youth, security and business committees." : lang === 'te' ? "దేవాలయం, రక్షణ, విద్యా, క్రీడలు మరియు వ్యాపార కమిటీల వివరాలు." : "मंदिर, सुरक्षा, शिक्षा, खेल और व्यावसायिक समितियों का विवरण।"}
                      </span>
                    </div>
                    <span className="govt-menu-arrow">➡️</span>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <button className="btn btn-secondary" style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }} onClick={() => setDirectorySubTab(null)}>
                      ⬅️ {lang === 'en' ? "Back to Govt Directory" : lang === 'te' ? "తిరిగి ప్రభుత్వ సమాచార మెనూకు" : "सरकारी निर्देशिका पर वापस जाएं"}
                    </button>
                  </div>

                  {/* Sub-tab A: Government Officers */}
                  {directorySubTab === 'govt' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {govtOfficers
                        .filter(off => {
                          const query = searchQuery.toLowerCase();
                          return (
                            getTxt(off.name).toLowerCase().includes(query) ||
                            getTxt(off.designation).toLowerCase().includes(query) ||
                            getTxt(off.department).toLowerCase().includes(query)
                          );
                        })
                        .map(officer => (
                          <div key={officer.id} className="card" style={{ padding: '14px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <div>
                                <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(officer.name)}</h4>
                                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                                  {getTxt(officer.designation)}
                                </span>
                                <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
                                  {getTxt(officer.department)}
                                </div>
                              </div>
                              <span className="badge badge-info">{t.verified}</span>
                            </div>
                            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem' }}>
                              <div className="info-row"><Phone size={12} className="info-icon" /> <span>{officer.phone}</span></div>
                              <div className="info-row"><FileText size={12} className="info-icon" /> <span>Permissions managed:</span></div>
                              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                {officer.permissions.map((p, idx) => <li key={idx}>{getTxt(p)}</li>)}
                              </ul>
                            </div>
                            <div className="action-bar">
                              <a href={`tel:${officer.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Now</a>
                              <button className="btn btn-secondary" onClick={() => setSelectedOfficer(officer)}>{t.viewDetails}</button>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Sub-tab B: Education List */}
                  {directorySubTab === 'education' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {schools
                        .filter(sch => sch.type === 'school')
                        .filter(sch => {
                          const query = searchQuery.toLowerCase();
                          return (
                            getTxt(sch.name).toLowerCase().includes(query) ||
                            getTxt(sch.schoolName).toLowerCase().includes(query)
                          );
                        })
                        .map(sch => (
                          <div key={sch.id} className="card" style={{ borderLeft: '4px solid hsl(var(--secondary))', padding: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span className="badge badge-info" style={{ fontSize: '0.6rem' }}>
                                School
                              </span>
                              <a href={`tel:${sch.phone}`} style={{ color: 'hsl(var(--primary))' }}><Phone size={14} /></a>
                            </div>
                            <h4 style={{ fontSize: '0.8rem', marginTop: '4px' }}>{getTxt(sch.name)}</h4>
                            <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>{getTxt(sch.schoolName)}</p>
                            <p style={{ fontSize: '0.7rem', fontWeight: 600, marginTop: '4px' }}>{getTxt(sch.subject)}</p>
                            <div className="action-bar" style={{ marginTop: '8px', padding: 0, justifyContent: 'flex-start', gap: '8px' }}>
                              <a href={`tel:${sch.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', fontSize: '0.65rem', padding: '4px 8px' }}><Phone size={10} /> Call</a>
                              <button className="btn btn-secondary" style={{ fontSize: '0.65rem', padding: '4px 8px' }} onClick={() => setSelectedSchool(sch)}>{t.viewDetails}</button>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Sub-tab C: Postal Services */}
                  {directorySubTab === 'postal' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {postalServices.map(post => (
                        <div key={post.id} className="card" style={{ padding: '14px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                              <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(post.name)}</h4>
                              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                                Pincode: {post.pincode}
                              </span>
                            </div>
                            <span className="badge badge-info">{t.verified}</span>
                          </div>
                          <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem' }}>
                            <div><strong>Postmaster:</strong> {getTxt(post.postmaster)}</div>
                            <div className="info-row"><Clock size={12} className="info-icon" /> <span>{getTxt(post.timing)}</span></div>
                            <div className="info-row"><MapPin size={12} className="info-icon" /> <span>{getTxt(post.location)}</span></div>
                            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{post.phone}</span></div>
                            <div style={{ fontWeight: 'bold', marginTop: '4px' }}>Services Available:</div>
                            <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              {post.services.map((s, idx) => <li key={idx}>{getTxt(s)}</li>)}
                            </ul>
                          </div>
                          <div className="action-bar">
                            <a href={`tel:${post.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Postmaster</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Sub-tab D: Banks & ATMs */}
                  {directorySubTab === 'banks' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {banksAndAtms.map(bank => (
                        <div key={bank.id} className="card" style={{ padding: '14px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                              <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(bank.name)}</h4>
                              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                                {getTxt(bank.branch)} | IFSC: {bank.ifsc}
                              </span>
                            </div>
                            <span className="badge badge-info">{t.verified}</span>
                          </div>
                          <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem' }}>
                            <div className="info-row"><Clock size={12} className="info-icon" /> <span>{getTxt(bank.timing)}</span></div>
                            <div className="info-row"><MapPin size={12} className="info-icon" /> <span>{getTxt(bank.location)}</span></div>
                            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{bank.phone}</span></div>
                            <div style={{ borderTop: '1px dashed hsl(var(--border))', paddingTop: '6px', marginTop: '4px' }}>
                              <span className={`badge ${bank.hasAtm ? 'badge-success' : 'badge-danger'}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                ATM Status: {getTxt(bank.atmStatus)}
                              </span>
                            </div>
                          </div>
                          <div className="action-bar">
                            <a href={`tel:${bank.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Branch</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Sub-tab: Police Station */}
                  {directorySubTab === 'police' && (
                    <div className="card" style={{ padding: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>
                            {lang === 'en' ? "Orvakal Police Station" : lang === 'te' ? "ఓర్వకల్లు పోలీస్ స్టేషన్" : "ओरवाकल पुलिस स्टेशन"}
                          </h4>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                            {lang === 'en' ? "Kurnool District Police Command" : lang === 'te' ? "కర్నూలు జిల్లా పోలీస్ కమాండ్" : "कर्नूल जिला पुलिस कमान"}
                          </span>
                        </div>
                        <span className="badge badge-info">{t.verified}</span>
                      </div>
                      <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
                        <div><strong>Station House Officer (SI):</strong> Mr. K. Mallikarjuna Reddy, Sub-Inspector</div>
                        <div><strong>Office Location:</strong> Near NH-40, Orvakal Bypass, Kurnool District, AP</div>
                        <div className="info-row"><Clock size={12} className="info-icon" /> <span>24/7 Security Services</span></div>
                        <div className="info-row"><Phone size={12} className="info-icon" /> <span>+91 8518223344 (Office) | +91 9440796753 (SI Mobile)</span></div>
                        <div style={{ fontWeight: 'bold', marginTop: '4px' }}>Key Facilities & Helpdesks:</div>
                        <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '0.7rem' }}>
                          <li><strong>24/7 Highway Patrol:</strong> Regular checks on NH-40 Corridor for traveler safety.</li>
                          <li><strong>Women Help Desk (Disha):</strong> Dedicated desk for women safety and query handling.</li>
                          <li><strong>Citizen FIR Help Desk:</strong> Walk-in desk for reporting lost articles, complaints, and FIR updates.</li>
                          <li><strong>Passport & Character verification cell.</strong></li>
                        </ul>
                        <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', fontStyle: 'italic', marginTop: '4px' }}>
                          For immediate emergency assistance, dial 100 or tap the SOS hotline.
                        </div>
                      </div>
                      <div className="action-bar" style={{ marginTop: '10px' }}>
                        <a href="tel:+918518223344" className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Station</a>
                        <a href="tel:+919440796753" className="btn btn-secondary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call SI Directly</a>
                      </div>
                    </div>
                  )}

                  {/* Sub-tab: Primary Health Center (PHC) */}
                  {directorySubTab === 'hospital' && (
                    <div className="card" style={{ padding: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>
                            {lang === 'en' ? "Orvakal Government Primary Health Center (PHC)" : lang === 'te' ? "ఓర్వకల్లు ప్రభుత్వ ప్రాథమిక ఆరోగ్య కేంద్రం (PHC)" : "ओरवाकल सरकारी प्राथमिक स्वास्थ्य केंद्र (PHC)"}
                          </h4>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                            {lang === 'en' ? "National Health Mission - AP" : lang === 'te' ? "జాతీయ ఆరోగ్య మిషన్ - ఏపీ" : "राष्ट्रीय स्वास्थ्य मिशन - एपी"}
                          </span>
                        </div>
                        <span className="badge badge-info">{t.verified}</span>
                      </div>
                      <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
                        <div><strong>Medical Officers:</strong> Dr. S. Anitha, M.B.B.S, D.G.O (Gynaecologist) & Dr. Y. Rajashekar, M.B.B.S</div>
                        <div><strong>OPD Timings:</strong> 09:00 AM - 04:00 PM (OPD open daily, Emergency 24/7)</div>
                        <div><strong>Bed Capacity:</strong> 10 Beds (4 General, 6 Maternity)</div>
                        <div className="info-row"><Phone size={12} className="info-icon" /> <span>+91 8518256789 (PHC Desk) | +91 9440623456 (Duty Doctor)</span></div>
                        <div className="info-row"><MapPin size={12} className="info-icon" /> <span>Main Road, opposite Gram Panchayat, Orvakal</span></div>
                        <div style={{ fontWeight: 'bold', marginTop: '4px' }}>Medical Facilities Available:</div>
                        <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '0.7rem' }}>
                          <li><strong>24/7 Emergency Trauma care & First-Aid center.</strong></li>
                          <li><strong>Maternity & Child Health Care (MCH):</strong> Free deliveries, prenatal checkups.</li>
                          <li><strong>Immunization Desk:</strong> Free vaccination for children every Wednesday.</li>
                          <li><strong>Free Diagnostic Lab:</strong> Blood testing, malaria, dengue, sugar testing, and urine analysis.</li>
                          <li><strong>Free Pharmacy:</strong> Dispensary of generic medicines under Govt scheme.</li>
                          <li><strong>108 Ambulance Hub:</strong> Vehicle stationed 24/7 on stand-by.</li>
                        </ul>
                      </div>
                      <div className="action-bar" style={{ marginTop: '10px' }}>
                        <a href="tel:+918518256789" className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call PHC</a>
                        <a href="tel:108" className="btn btn-secondary" style={{ textDecoration: 'none', backgroundColor: '#ef4444', borderColor: '#ef4444', color: 'white' }}><Phone size={10} /> Call 108 Ambulance</a>
                      </div>
                    </div>
                  )}

                  {/* Sub-tab: Schemes */}
                  {directorySubTab === 'schemes' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                        <h4 style={{ fontSize: '0.85rem' }}>{lang === 'en' ? "Government Schemes & Welfare Desk" : lang === 'te' ? "ప్రభుత్వ పథకాలు & సంక్షేమ డెస్క్" : "सरकारी योजनाएं एवं कल्याण डेस्क"}</h4>
                        <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                          {lang === 'en' ? "Browse state and central welfare schemes. Select a category below to filter schemes." : lang === 'te' ? "వివిధ ప్రభుత్వ సంక్షేమ పథకాల వివరాలు. తగిన వర్గాన్ని ఎంచుకుని సమాచారం చదవండి." : "विभिन्न सरकारी कल्याणकारी योजनाओं की जानकारी। फ़िल्टर करने के लिए नीचे एक श्रेणी चुनें।"}
                        </p>
                      </div>
                      
                      {/* 1. Scheme Provider Type Filter (Central, State, etc) */}
                      <div className="tabs-header" style={{ marginBottom: '12px' }}>
                        {(['central', 'state', 'bank', 'postal', 'all'] as const).map(type => (
                          <button
                            key={type}
                            className={`services-menu-card ${selectedSchemeType === type ? 'active' : ''}`}
                            onClick={() => setSelectedSchemeType(type)}
                            style={{ 
                              padding: '8px 16px', 
                              flexDirection: 'row', 
                              justifyContent: 'center', 
                              margin: 0, 
                              minHeight: 'auto',
                              flexShrink: 0,
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: selectedSchemeType === type ? 'white' : 'hsl(var(--primary))' }}>
                              {type === 'all' ? 'All Providers' : type === 'state' ? 'State Govt' : type === 'central' ? 'Central Govt' : type === 'bank' ? 'Bank' : 'Postal'}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* 2. Category Type Filter (Farmer, Students, etc) */}
                      <div className="tabs-header" style={{ marginBottom: '16px' }}>
                        {(['farmer', 'students', 'women', 'business', 'insurance', 'investment', 'welfare', 'all'] as const).map(cat => (
                          <button
                            key={cat}
                            className={`tab-pill ${selectedSchemeCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedSchemeCategory(cat)}
                            style={{ fontSize: '0.65rem', padding: '6px 12px' }}
                          >
                            {cat === 'farmer' && "🌾 Farmer"}
                            {cat === 'students' && "🎓 Students"}
                            {cat === 'women' && "👩 Women"}
                            {cat === 'business' && "💼 Business"}
                            {cat === 'insurance' && "🛡️ Insurance"}
                            {cat === 'investment' && "💰 Savings"}
                            {cat === 'welfare' && "🏡 Welfare"}
                            {cat === 'all' && "🌐 All categories"}
                          </button>
                        ))}
                      </div>

                      {/* Display Schemes */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {govtSchemes
                          .filter(s => (selectedSchemeCategory === 'all' || s.category === selectedSchemeCategory) && (selectedSchemeType === 'all' || s.type === selectedSchemeType))
                          .map(scheme => (
                            <div key={scheme.id} className="card" style={{ padding: '14px' }}>
                              <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', fontWeight: 800 }}>{getTxt(scheme.title)}</h4>
                              <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', lineHeight: 1.3 }}>{getTxt(scheme.description)}</p>
                              
                              <div style={{ borderTop: '1px solid hsl(var(--border))', marginTop: '8px', paddingTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem' }}>
                                <div><strong>🎁 Benefits:</strong> <span style={{ color: 'hsl(var(--primary))', fontWeight: 700 }}>{getTxt(scheme.benefits)}</span></div>
                                <div><strong>📋 Eligibility:</strong> {getTxt(scheme.eligibility)}</div>
                                <div><strong>📝 How to Apply:</strong> {getTxt(scheme.applyProcess)}</div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Sub-tab E: Grievance Form */}
                  {directorySubTab === 'grievance' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div className="card">
                        <h4 style={{ fontSize: '0.8rem' }}>{t.reportIssue}</h4>
                        <form onSubmit={handleGrievanceSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                          <div className="form-group">
                            <label className="form-label">{t.issueName}</label>
                            <input type="text" className="form-input" value={grievanceForm.name} onChange={(e) => setGrievanceForm({ ...grievanceForm, name: e.target.value })} required />
                          </div>
                          <div className="form-group">
                            <label className="form-label">{t.issuePhone}</label>
                            <input type="tel" className="form-input" value={grievanceForm.phone} onChange={(e) => setGrievanceForm({ ...grievanceForm, phone: e.target.value })} required />
                          </div>
                          <div className="form-group">
                            <label className="form-label">{t.issueType}</label>
                            <select className="form-input" value={grievanceForm.type} onChange={(e) => setGrievanceForm({ ...grievanceForm, type: e.target.value })} aria-label="Grievance Issue Type Select">
                              <option value="water">{t.water}</option>
                              <option value="streetlights">{t.streetlights}</option>
                              <option value="roads">{t.roads}</option>
                              <option value="power">{t.power}</option>
                              <option value="others">{t.others}</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="form-label">{t.issueDesc}</label>
                            <textarea className="form-input" rows={2} value={grievanceForm.desc} onChange={(e) => setGrievanceForm({ ...grievanceForm, desc: e.target.value })} required></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">{t.submitIssue}</button>
                        </form>
                        {showGrievanceSuccess && (
                          <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '6px', fontSize: '0.7rem' }}>
                            {t.issueSuccess}
                          </div>
                        )}
                      </div>

                      <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'hsl(var(--muted-foreground))' }}>Active Grievance Tracking</h4>
                      {grievances.map(g => (
                        <div key={g.id} style={{ padding: '10px', backgroundColor: 'hsl(var(--card))', border: '1px solid var(--card-border)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem' }}>
                          <div>
                            <strong>{g.desc.substring(0, 30)}...</strong>
                            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>{g.date} | Type: {g.type}</div>
                          </div>
                          <span className={`badge ${g.status === 'Submitted' ? 'badge-info' : 'badge-success'}`}>{g.status}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {directorySubTab === 'committees' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <h3 style={{ fontSize: '0.9rem', color: 'hsl(var(--primary))', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        👥 {lang === 'en' ? "Committees & Clubs" : lang === 'te' ? "కమిటీలు & క్లబ్‌లు" : "समितियां और क्लब"}
                      </h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {committees.map((com) => (
                          <div key={com.id} className="card" style={{ padding: '14px', borderLeft: '4px solid hsl(var(--primary))' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <h4 style={{ fontSize: '0.82rem', color: 'hsl(var(--foreground))', fontWeight: 800, margin: 0 }}>
                                {getTxt(com.name)}
                              </h4>
                              <span className="badge badge-info" style={{ fontSize: '0.62rem' }}>
                                {com.membersCount} {lang === 'en' ? "Members" : lang === 'te' ? "సభ్యులు" : "सदस्य"}
                              </span>
                            </div>
                            
                            <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', marginBottom: '8px', lineHeight: 1.3 }}>
                              {getTxt(com.purpose)}
                            </p>
                            
                            <div style={{ borderTop: '1px solid hsl(var(--border) / 0.6)', paddingTop: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px', fontSize: '0.68rem' }}>
                              <div>
                                <strong>👤 President:</strong> {getTxt(com.president)}
                              </div>
                              <div>
                                <strong>📅 Meetings:</strong> {getTxt(com.meetings)}
                              </div>
                              <a href={`tel:${com.phone}`} style={{ textDecoration: 'none', backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', padding: '4px 8px', borderRadius: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                                <Phone size={10} /> {com.phone}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

            </div>
          )}

          {/* TAB 3: FARMER DESK */}
          {activeTab === 'farmer' && (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Farmer Desk Card Menu Grid - 3x3 Card Layout */}
              <div className="farmer-menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '8px' }}>
                <button className={`farmer-menu-card ${farmerSubTab === 'feeder' ? 'active' : ''}`} onClick={() => setFarmerSubTab('feeder')} aria-label="Agri Feeder Schedule Tab">
                  <div className="farmer-menu-icon"><Sun size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Feeder Hours" : lang === 'te' ? "కరెంట్ వేళలు" : "फीडर समय"}</span>
                </button>
                <button className={`farmer-menu-card ${farmerSubTab === 'mandi' ? 'active' : ''}`} onClick={() => setFarmerSubTab('mandi')} aria-label="Mandi Rates Tab">
                  <div className="farmer-menu-icon"><ArrowUpRight size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Mandi Prices" : lang === 'te' ? "మార్కెట్ ధరలు" : "मंडी दरें"}</span>
                </button>
                <button className={`farmer-menu-card ${farmerSubTab === 'msp' ? 'active' : ''}`} onClick={() => setFarmerSubTab('msp')} aria-label="Govt MSP Info Tab">
                  <div className="farmer-menu-icon"><Landmark size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Govt MSP" : lang === 'te' ? "మద్దతు ధర" : "एमएसपी दर"}</span>
                </button>
                <button className={`farmer-menu-card ${farmerSubTab === 'tractor' ? 'active' : ''}`} onClick={() => setFarmerSubTab('tractor')} aria-label="Tractor Rental Tab">
                  <div className="farmer-menu-icon"><Car size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Tractor Rent" : lang === 'te' ? "ట్రాక్టర్ అద్దె" : "ट्रैक्टर किराया"}</span>
                </button>
                <button className={`farmer-menu-card ${farmerSubTab === 'advisory' ? 'active' : ''}`} onClick={() => setFarmerSubTab('advisory')} aria-label="Agri Advisory Tab">
                  <div className="farmer-menu-icon"><Sprout size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Advisories" : lang === 'te' ? "వ్యవసాయ సలహాలు" : "फसल सलाह"}</span>
                </button>
                <button className={`farmer-menu-card ${farmerSubTab === 'crop-holiday' ? 'active' : ''}`} onClick={() => setFarmerSubTab('crop-holiday')} aria-label="Crop Holiday Info Tab">
                  <div className="farmer-menu-icon"><ShieldAlert size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Crop Holiday" : lang === 'te' ? "పంట విరామం" : "फसल अवकाश"}</span>
                </button>
                <button className={`farmer-menu-card ${farmerSubTab === 'water' ? 'active' : ''}`} onClick={() => setFarmerSubTab('water')} aria-label="Water Reservoirs Tab">
                  <div className="farmer-menu-icon"><Droplet size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Water Levels" : lang === 'te' ? "నీటి మట్టాలు" : "जल स्तर"}</span>
                </button>
                <button className={`farmer-menu-card ${farmerSubTab === 'repair' ? 'active' : ''}`} onClick={() => setFarmerSubTab('repair')} aria-label="Agri Repair Specialists Tab">
                  <div className="farmer-menu-icon"><Wrench size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Repairs & Motor" : lang === 'te' ? "మోటార్ రిపేర్లు" : "मोटर मरम्मत"}</span>
                </button>
                <button className={`farmer-menu-card ${farmerSubTab === 'agri-officer' ? 'active' : ''}`} onClick={() => setFarmerSubTab('agri-officer')} aria-label="Agri Support Officers Tab">
                  <div className="farmer-menu-icon"><UserCheck size={16} /></div>
                  <span className="farmer-menu-label">{lang === 'en' ? "Agri Support" : lang === 'te' ? "అధికారులు" : "कृषि सहायता"}</span>
                </button>
              </div>

              {/* Sub-tab A: Feeder Timings */}
              {farmerSubTab === 'feeder' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                    <h4 style={{ fontSize: '0.8rem' }}>Agricultural Feeder 3-Phase Electricity Schedule</h4>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>Orvakal Feeder lines are regulated to provide 7 hours of daily free agricultural power. Make sure pump starters are active.</p>
                  </div>
                  {powerSchedules.map(ps => (
                    <div key={ps.id} className="card" style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '0.78rem', color: 'hsl(var(--primary))' }}>{getTxt(ps.feederName)}</h4>
                        <span className="badge badge-success">{getTxt(ps.status)}</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', marginTop: '4px', fontSize: '0.65rem' }}>
                        <div>
                          <strong>{t.dayFeeder}:</strong>
                          <div style={{ color: 'hsl(var(--secondary))', fontWeight: 'bold' }}>{getTxt(ps.dayTimings)}</div>
                        </div>
                        <div>
                          <strong>{t.nightFeeder}:</strong>
                          <div style={{ color: 'hsl(var(--secondary))', fontWeight: 'bold' }}>{getTxt(ps.nightTimings)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab B: Mandi Rates (Crops and Vegetables) */}
              {farmerSubTab === 'mandi' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* Crops */}
                  <div className="card">
                    <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', marginBottom: '4px' }}>{t.mandiRates}</h4>
                    <table className="mandi-table">
                      <thead>
                        <tr>
                          <th>{t.crop}</th>
                          <th>{t.priceRange}</th>
                          <th>{t.trend}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mandiRates.map(mr => (
                          <tr key={mr.id}>
                            <td><strong>{getTxt(mr.crop)}</strong></td>
                            <td>{getTxt(mr.priceRange)}</td>
                            <td>
                              {mr.trend === 'up' && <span style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: '2px' }}><ArrowUpRight size={14} /> {t.mandiTrendUp}</span>}
                              {mr.trend === 'down' && <span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '2px' }}><ArrowDownRight size={14} /> {t.mandiTrendDown}</span>}
                              {mr.trend === 'flat' && <span style={{ color: '#6b7280', display: 'flex', alignItems: 'center', gap: '2px' }}><Minus size={14} /> {t.mandiTrendFlat}</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Vegetables */}
                  <div className="card">
                    <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', marginBottom: '4px' }}>{t.vegMandi}</h4>
                    <table className="mandi-table">
                      <thead>
                        <tr>
                          <th>{t.crop}</th>
                          <th>{t.priceRange}</th>
                          <th>{t.trend}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vegMandiRates.map(vmr => (
                          <tr key={vmr.id}>
                            <td><strong>{getTxt(vmr.item)}</strong></td>
                            <td>{getTxt(vmr.priceRange)}</td>
                            <td>
                              {vmr.trend === 'up' && <span style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: '2px' }}><ArrowUpRight size={14} /> {t.mandiTrendUp}</span>}
                              {vmr.trend === 'down' && <span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '2px' }}><ArrowDownRight size={14} /> {t.mandiTrendDown}</span>}
                              {vmr.trend === 'flat' && <span style={{ color: '#6b7280', display: 'flex', alignItems: 'center', gap: '2px' }}><Minus size={14} /> {t.mandiTrendFlat}</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              {/* Sub-tab C: Govt MSP Info */}
              {farmerSubTab === 'msp' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                    <h4 style={{ fontSize: '0.8rem' }}>🏛️ {t.govtMsp}</h4>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      {lang === 'en' ? "Official Minimum Support Price (MSP) rates released by the central government. Ensure sales at APMC markets meet or exceed these thresholds." : lang === 'te' ? "కేంద్ర ప్రభుత్వం విడుదల చేసిన అధికారిక కనీస మద్దతు ధర (MSP) వివరాలు. మార్కెట్ యార్డులలో ఈ ధరల కంటే తక్కువకు అమ్మవద్దు." : "केंद्र सरकार द्वारा जारी आधिकारिक न्यूनतम समर्थन मूल्य (एमएसपी) दरें। सुनिश्चित करें कि मंडी में बिक्री इन दरों से अधिक हो।"}
                    </p>
                  </div>
                  <div className="card" style={{ padding: '8px' }}>
                    <table className="mandi-table">
                      <thead>
                        <tr>
                          <th>{lang === 'en' ? "Crop" : lang === 'te' ? "పంట" : "फसल"}</th>
                          <th>{lang === 'en' ? "MSP Rate" : lang === 'te' ? "మద్దతు ధర" : "एमएसपी दर"}</th>
                          <th>{lang === 'en' ? "Season" : lang === 'te' ? "సీజన్" : "सीजन"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {govtMspRates.map(mr => (
                          <tr key={mr.id}>
                            <td><strong>{getTxt(mr.crop)}</strong></td>
                            <td style={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}>{getTxt(mr.mspPrice)}</td>
                            <td><span className="badge badge-info" style={{ fontSize: '0.6rem' }}>{getTxt(mr.season)}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Sub-tab D: Crop Holiday Info */}
              {farmerSubTab === 'crop-holiday' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="card" style={{ borderLeft: '4px solid #ef4444' }}>
                    <h4 style={{ fontSize: '0.8rem' }}>🚫 {t.cropHoliday}</h4>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      {lang === 'en' ? "Important notifications regarding crop holidays, dry spells, and official cultivation advice for water-stressed zones." : lang === 'te' ? "నీటి కొరత ఉన్న ప్రాంతాలలో పంట విరామం, పొడి వాతావరణం మరియు సాగు సలహాలకు సంబంధించిన ముఖ్యమైన నోటీసులు." : "जल संकट वाले क्षेत्रों के लिए फसल अवकाश, सूखे की स्थिति और आधिकारिक खेती की सलाह से संबंधित महत्वपूर्ण सूचनाएं।"}
                    </p>
                  </div>
                  {cropHolidays.map(ch => (
                    <div key={ch.id} className="card" style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '0.78rem', color: '#ef4444' }}>{getTxt(ch.zone)}</h4>
                        <span className="badge badge-danger" style={{ fontSize: '0.6rem' }}>{getTxt(ch.waterStatus)}</span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px' }}>
                        <strong>{lang === 'en' ? "Advisory:" : lang === 'te' ? "సలహా:" : "सलाह:"}</strong> {getTxt(ch.advisory)}
                      </div>
                      <div style={{ borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '6px', marginTop: '6px', fontSize: '0.7rem' }}>
                        <strong>💡 {lang === 'en' ? "Recommendation:" : lang === 'te' ? "సిఫార్సు:" : "सिफारिश:"}</strong> <span style={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}>{getTxt(ch.recommendation)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab C: Tractor & Harvester Sharing */}
              {farmerSubTab === 'tractor' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                    <h4 style={{ fontSize: '0.8rem' }}>
                      🚜 {lang === 'en' ? "Tractor & Harvester Sharing" : lang === 'te' ? "ట్రాక్టర్ & హార్వెస్టర్ల భాగస్వామ్యం" : "ट्रैक्टर और हार्वेस्टर शेयरिंग"}
                    </h4>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      {lang === 'en' ? "Rent tractors, ploughs, and harvesters directly from local farmers at hourly rates." : lang === 'te' ? "స్థానిక రైతుల నుండి గంటల ప్రాతిపదికన ట్రాక్టర్లు, నాగళ్ళు మరియు హార్వెస్టర్లను అద్దెకు తీసుకోండి." : "स्थानीय किसानों से सीधे घंटे की दर से ट्रैक्टर, हल और हार्वेस्टर किराए पर लें।"}
                    </p>
                  </div>
                  {tractorRentals.map(tr => (
                    <div key={tr.id} className="card" style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <h4 style={{ fontSize: '0.8rem' }}>{getTxt(tr.tractorModel)}</h4>
                          <span style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                            👤 {getTxt(tr.ownerName)}
                          </span>
                        </div>
                        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>
                            {getTxt(tr.rate)}
                          </span>
                          <span className={`badge ${tr.available ? 'badge-success' : 'badge-danger'}`}>
                            {tr.available ? t.available : t.busy}
                          </span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '8px', marginTop: '8px', fontSize: '0.65rem' }}>
                        <span style={{ color: 'hsl(var(--muted-foreground))' }}>📍 {getTxt(tr.location)}</span>
                        <a href={`tel:${tr.phone}`} style={{ color: 'white', backgroundColor: '#16a34a', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Phone size={10} /> {t.callNow}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab D: Crop Health Advisory */}
              {farmerSubTab === 'advisory' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                    <h4 style={{ fontSize: '0.8rem' }}>
                      🌾 {lang === 'en' ? "Rythu Crop Health Advisory" : lang === 'te' ? "రైతు పంట సలహా కేంద్రం" : "कृषि फसल स्वास्थ्य सलाह"}
                    </h4>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      {lang === 'en' ? "Official alerts from agricultural officers, Rythu Bharosa Kendram (RBK), and soil labs." : lang === 'te' ? "రైతు భరోసా కేంద్రం (RBK) మరియు వ్యవసాయ అధికారుల నుండి లభించే అధికారిక సలహాలు." : "कृषि अधिकारियों, रायथू भरोसा केंद्र (आरबीके) और मृदा प्रयोगशालाओं से आधिकारिक अलर्ट।"}
                    </p>
                  </div>
                  {advisories.map(adv => (
                    <div key={adv.id} className="bulletin-notice" style={{ margin: 0 }}>
                      <div className="bulletin-header">
                        <span className="bulletin-title" style={{ color: adv.category === 'pest' ? '#ef4444' : 'hsl(var(--primary))' }}>
                          {adv.category === 'pest' ? '⚠️ ' : '🌱 '} {getTxt(adv.title)}
                        </span>
                        <span className="bulletin-date">{adv.date}</span>
                      </div>
                      <p className="bulletin-body" style={{ marginTop: '4px' }}>{getTxt(adv.content)}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab E: Irrigation & Water Levels */}
              {farmerSubTab === 'water' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                    <h4 style={{ fontSize: '0.8rem' }}>
                      💧 {lang === 'en' ? "Canal & Irrigation Water Levels" : lang === 'te' ? "కాలువ & జలాశయాల నీటి మట్టాలు" : "नहर और सिंचाई जल स्तर"}
                    </h4>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      {lang === 'en' ? "Live irrigation updates for Orvakal reservoir and Midi-channel supply schedules." : lang === 'te' ? "ఓర్వకల్లు జలాశయం మరియు పంట కాలువల నీటి విడుదల తాజా సమాచారం." : "ओरवाकल जलाशय और नहर जलापूर्ति के लाइव अपडेट।"}
                    </p>
                  </div>
                  {waterReservoirs.map(wr => (
                    <div key={wr.id} className="card" style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '0.78rem', color: 'hsl(var(--primary))' }}>{getTxt(wr.reservoirName)}</h4>
                        <span className="badge badge-info">{getTxt(wr.status)}</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', marginTop: '4px', fontSize: '0.65rem' }}>
                        <div>
                          <strong>{t.level}:</strong>
                          <div style={{ color: 'hsl(var(--secondary))', fontWeight: 'bold' }}>{getTxt(wr.levelInfo)}</div>
                        </div>
                        <div>
                          <strong>{t.reservoirCapacity}:</strong>
                          <div style={{ color: 'hsl(var(--secondary))', fontWeight: 'bold' }}>{getTxt(wr.capacityInfo)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab F: Motor & Tractor Repairs */}
              {farmerSubTab === 'repair' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                    <h4 style={{ fontSize: '0.8rem' }}>
                      🔧 {lang === 'en' ? "Farming Motor & Tractor Repairs" : lang === 'te' ? "మోటార్ & ట్రాక్టర్ మరమ్మతులు" : "मोटर और ट्रैक्टर मरम्मत"}
                    </h4>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      {lang === 'en' ? "Local mechanics for agricultural motors, borewells, and tractor servicing." : lang === 'te' ? "వ్యవసాయ మోటార్లు, బోరుబావులు మరియు ట్రాక్టర్ సర్వీసింగ్ చేసే స్థానిక మెకానిక్‌లు." : "कृषि मोटर, बोरवेल और ट्रैक्टर सर्विसिंग के लिए स्थानीय मैकेनिक।"}
                    </p>
                  </div>
                  {repairMechanics.map(rep => (
                    <div key={rep.id} className="card" style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>{getTxt(rep.name)}</h4>
                          <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', textTransform: 'capitalize' }}>
                            🛠️ {rep.specialty} Specialist
                          </span>
                        </div>
                        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                          <span className="rating"><Star size={12} fill="#f59e0b" color="#f59e0b" /> {rep.rating}</span>
                          <span className={`badge ${rep.available ? 'badge-success' : 'badge-danger'}`}>
                            {rep.available ? t.available : t.busy}
                          </span>
                        </div>
                      </div>
                      <div className="info-row" style={{ fontSize: '0.7rem', marginTop: '4px' }}>
                        <MapPin size={12} /> <span>{getTxt(rep.location)}</span>
                      </div>
                      <a href={`tel:${rep.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '6px' }}>
                        <Phone size={12} /> {t.callNow}
                      </a>
                    </div>
                  ))}
                </div>
              )}


              {/* Sub-tab G: Agri Support Officers */}
              {farmerSubTab === 'agri-officer' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {agriContacts.map(ac => (
                    <div key={ac.id} className="card" style={{ padding: '12px' }}>
                      <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>{getTxt(ac.name)}</h4>
                      <div style={{ fontSize: '0.7rem', fontWeight: 600 }}>{getTxt(ac.designation)}</div>
                      <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '6px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.65rem' }}>
                        <div><strong>Phone:</strong> {ac.phone}</div>
                        <div><strong>Clinic / Office:</strong> {getTxt(ac.location)}</div>
                      </div>
                      <a href={`tel:${ac.phone}`} className="btn btn-secondary" style={{ textDecoration: 'none', marginTop: '6px' }}>
                        <Phone size={12} /> Call Officer
                      </a>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {activeTab === 'hospitality' && (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {(() => {
                const serviceCategories = [
                  { key: 'medical', labelKey: 'cat_medical', icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <line x1="12" y1="11" x2="12" y2="17" />
                      <line x1="9" y1="14" x2="15" y2="14" />
                    </svg>
                  ) },
                  { key: 'pesticide', labelKey: 'cat_pesticide', icon: <Sprout size={20} /> },
                  { key: 'dairy', labelKey: 'cat_dairy', icon: <Droplet size={20} /> },
                  { key: 'water-supplier', labelKey: 'cat_water_supplier', icon: <Droplet size={20} /> },
                  { key: 'wholesaler', labelKey: 'cat_wholesaler', icon: <Building2 size={20} /> },
                  { key: 'restaurant', labelKey: 'cat_restaurant', icon: <Utensils size={20} /> },
                  { key: 'laundry', labelKey: 'cat_laundry', icon: <UserCheck size={20} /> },
                  { key: 'hardware', labelKey: 'cat_hardware', icon: <Wrench size={20} /> },
                  { key: 'auto', labelKey: 'cat_auto', icon: <span style={{ fontSize: '1.25rem' }}>🛺</span> },
                  { key: 'drivers', labelKey: 'cat_drivers', icon: <span style={{ fontSize: '1.25rem' }}>👤</span> },
                  { key: 'car-rental', labelKey: 'cat_car_rental', icon: <Car size={20} /> },
                  { key: 'courier', labelKey: 'cat_courier', icon: <Package size={20} /> },
                  { key: 'stationery', labelKey: 'cat_stationery', icon: <FileText size={20} /> },
                  { key: 'tuitions', labelKey: 'cat_tuitions', icon: <GraduationCap size={20} /> },
                  { key: 'driving-school', labelKey: 'cat_driving_school', icon: <Compass size={20} /> },
                  { key: 'rentals', labelKey: 'cat_rentals', icon: <Home size={20} /> },
                  { key: 'boutique', labelKey: 'cat_boutique', icon: <UserCheck size={20} /> },
                  { key: 'clothing', labelKey: 'cat_clothing', icon: <Briefcase size={20} /> },
                  { key: 'event-rental', labelKey: 'cat_event_rental', icon: <Bell size={20} /> },
                  { key: 'banquet', labelKey: 'cat_banquet', icon: <Landmark size={20} /> },
                  { key: 'hotel', labelKey: 'cat_hotel', icon: <Compass size={20} /> },
                  { key: 'temple', labelKey: 'cat_temple', icon: <span style={{ fontSize: '1.25rem' }}>🛕</span> },
                  { key: 'mosque', labelKey: 'cat_mosque', icon: <span style={{ fontSize: '1.25rem' }}>🕌</span> },
                  { key: 'church', labelKey: 'cat_church', icon: <span style={{ fontSize: '1.25rem' }}>⛪</span> }
                ];

                const categoryStyles: Record<string, { bg: string, color: string }> = {
                  medical: { bg: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)', color: '#dc2626' },
                  pesticide: { bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', color: '#16a34a' },
                  dairy: { bg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', color: '#0284c7' },
                  'water-supplier': { bg: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)', color: '#00838f' },
                  wholesaler: { bg: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)', color: '#ea580c' },
                  restaurant: { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', color: '#d97706' },
                  laundry: { bg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)', color: '#7c3aed' },
                  hardware: { bg: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)', color: '#475569' },
                  auto: { bg: 'linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)', color: '#ca8a04' },
                  drivers: { bg: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)', color: '#0d9488' },
                  'car-rental': { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', color: '#b45309' },
                  courier: { bg: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)', color: '#4f46e5' },
                  stationery: { bg: 'linear-gradient(135deg, #fae8ff 0%, #f5d0fe 100%)', color: '#c084fc' },
                  tuitions: { bg: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', color: '#059669' },
                  'driving-school': { bg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', color: '#0369a1' },
                  rentals: { bg: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)', color: '#9333ea' },
                  boutique: { bg: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)', color: '#db2777' },
                  clothing: { bg: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)', color: '#e11d48' },
                  'event-rental': { bg: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)', color: '#d84315' },
                  banquet: { bg: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', color: '#d97706' },
                  hotel: { bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', color: '#166534' },
                  temple: { bg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', color: '#ea580c' },
                  mosque: { bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', color: '#166534' },
                  church: { bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', color: '#2563eb' }
                };

                if (selectedServiceCategory === null) {
                  return (
                    <div className="fade-in">
                      <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
                        <h4 style={{ fontSize: '0.85rem' }}>{t.servicesTitle}</h4>
                        <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>{t.servicesPrompt}</p>
                      </div>
                      <div className="services-menu-grid">
                        {serviceCategories.map((cat) => {
                          const catStyle = categoryStyles[cat.key] || { bg: 'hsl(var(--accent))', color: 'hsl(var(--primary))' };
                          return (
                            <div key={cat.key} className="services-menu-card" onClick={() => setSelectedServiceCategory(cat.key)}>
                              <div className="services-menu-icon" style={{ background: catStyle.bg, color: catStyle.color }}>
                                {cat.icon}
                              </div>
                              <span className="services-menu-label">
                                {(t as any)[cat.labelKey] || cat.key}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button className="btn btn-secondary" style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }} onClick={() => setSelectedServiceCategory(null)}>
                        ⬅️ {t.backToMenu}
                      </button>
                      {selectedServiceCategory === 'rentals' && (
                        <button className="btn btn-primary" style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }} onClick={() => setRentalFormOpen(!rentalFormOpen)}>
                          <Plus size={10} /> {t.addRental}
                        </button>
                      )}
                    </div>

                    {selectedServiceCategory === 'rentals' && rentalFormOpen && (
                      <div className="card" style={{ border: '1px dashed hsl(var(--primary))' }}>
                        <h4 style={{ fontSize: '0.78rem' }}>{t.addRental}</h4>
                        <form onSubmit={handlePostRental} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                          <div className="form-group">
                            <label className="form-label">Type</label>
                            <select className="form-input" value={newRental.type} onChange={(e) => setNewRental({ ...newRental, type: e.target.value })} aria-label="Rental Property Type Select">
                              <option value="house">House / Villa</option>
                              <option value="pg">Paying Guest (PG)</option>
                              <option value="room">Single Room</option>
                              <option value="commercial">Commercial Shop</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Rent (Rs. / month)</label>
                            <input type="number" className="form-input" value={newRental.rent} onChange={(e) => setNewRental({ ...newRental, rent: e.target.value })} required />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Deposit (Rs.)</label>
                            <input type="number" className="form-input" value={newRental.deposit} onChange={(e) => setNewRental({ ...newRental, deposit: e.target.value })} />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Owner Name</label>
                            <input type="text" className="form-input" value={newRental.contactName} onChange={(e) => setNewRental({ ...newRental, contactName: e.target.value })} required />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input type="tel" className="form-input" value={newRental.phone} onChange={(e) => setNewRental({ ...newRental, phone: e.target.value })} required />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Location / Area</label>
                            <input type="text" className="form-input" value={newRental.location} onChange={(e) => setNewRental({ ...newRental, location: e.target.value })} />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Amenities</label>
                            <textarea className="form-input" rows={2} value={newRental.details} onChange={(e) => setNewRental({ ...newRental, details: e.target.value })}></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">Publish Property</button>
                        </form>
                      </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {(() => {
                        const isWorship = ['temple', 'mosque', 'church'].includes(selectedServiceCategory || '');
                        
                        const filteredWorship = isWorship ? worshipPlaces.filter(wp => wp.type === selectedServiceCategory && (
                          searchQuery === '' ||
                          getTxt(wp.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
                          getTxt(wp.location).toLowerCase().includes(searchQuery.toLowerCase())
                        )) : [];

                        const filtered = isWorship ? [] : commercialShops.filter(shop => shop.category === selectedServiceCategory && (
                          searchQuery === '' ||
                          getTxt(shop.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
                          getTxt(shop.location).toLowerCase().includes(searchQuery.toLowerCase())
                        ));

                        const showRentals = selectedServiceCategory === 'rentals';

                        if (filtered.length === 0 && filteredWorship.length === 0 && (!showRentals || localRentals.length === 0)) {
                          return (
                            <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
                              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{t.noItems}</p>
                            </div>
                          );
                        }

                        return (
                          <>
                            {isWorship && filteredWorship.map(wp => (
                              <div key={wp.id} className="card" style={{ padding: '14px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <span className="badge badge-info" style={{ 
                                    fontSize: '0.6rem', 
                                    textTransform: 'capitalize', 
                                    background: wp.type === 'temple' ? '#fef08a' : wp.type === 'mosque' ? '#dcfce7' : '#dbeafe', 
                                    color: wp.type === 'temple' ? '#a16207' : wp.type === 'mosque' ? '#15803d' : '#1d4ed8' 
                                  }}>
                                    {wp.type === 'temple' ? 'Temple' : wp.type === 'mosque' ? 'Mosque' : 'Church'}
                                  </span>
                                  <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>Active: 6 AM - 8 PM</span>
                                </div>
                                <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', marginTop: '4px', marginBlockEnd: '2px' }}>{getTxt(wp.name)}</h4>
                                <div style={{ display: 'flex', gap: '4px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', alignItems: 'center' }}>
                                  <MapPin size={12} /> <span>{getTxt(wp.location)}</span>
                                </div>
                                <p style={{ fontSize: '0.7rem', margin: 0, color: 'hsl(var(--muted-foreground))', borderTop: '1px dashed hsl(var(--border))', paddingTop: '6px', marginTop: '6px' }}>
                                  {getTxt(wp.details)}
                                </p>
                              </div>
                            ))}
                            {filtered.map(shop => (
                              <div key={shop.id} className="card" style={{ padding: shop.image ? 0 : '14px' }}>
                                {shop.image && <img src={shop.image} alt={getTxt(shop.name)} className="rental-img" />}
                                <div style={{ padding: shop.image ? '12px' : 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(shop.name)}</h4>
                                    <span className="badge badge-success">{lang === 'en' ? 'Verified' : lang === 'te' ? 'ధృవీకరించబడింది' : 'సत्यापित'}</span>
                                  </div>

                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                                    <div><strong>{t.owner}:</strong> {getTxt(shop.owner)}</div>
                                    <div><strong>{t.timing}:</strong> {getTxt(shop.timing)}</div>
                                    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                      <MapPin size={10} /> <span>{getTxt(shop.location)}</span>
                                    </div>
                                  </div>

                                  {shop.stars && (
                                    <div style={{ display: 'flex', gap: '2px', alignItems: 'center', marginTop: '2px' }}>
                                      {Array.from({ length: shop.stars }).map((_, i) => <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />)}
                                      <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>({shop.stars} Star)</span>
                                    </div>
                                  )}

                                  {shop.capacity && (
                                    <div style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                                      <strong>{t.capacity}:</strong> {shop.capacity} {lang === 'en' ? 'Guests' : lang === 'te' ? 'అతిథులు' : 'अतिथि'}
                                    </div>
                                  )}

                                  {shop.priceRate && (
                                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>
                                      {getTxt(shop.priceRate)}
                                    </div>
                                  )}

                                  {shop.details && (
                                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                                      {getTxt(shop.details)}
                                    </p>
                                  )}

                                  <div className="action-bar">
                                    <a href={`tel:${shop.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}>
                                      <Phone size={10} /> {t.callNow}
                                    </a>
                                    <button className="btn btn-secondary" onClick={() => setSelectedShop(shop)}>
                                      {t.viewDetails}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {showRentals && localRentals.map(property => (
                              <div key={property.id} className="card" style={{ padding: 0 }}>
                                <img src={property.image} alt="Property preview" className="rental-img" />
                                <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className="badge badge-info" style={{ textTransform: 'uppercase' }}>{property.type}</span>
                                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>₹{property.rent.toLocaleString()}/mo</span>
                                  </div>
                                  <h4 style={{ fontSize: '0.8rem' }}>{getTxt(property.location)}</h4>
                                  <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>{getTxt(property.details)}</p>
                                  <div className="action-bar">
                                    <a href={`tel:${property.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Owner</a>
                                    <button className="btn btn-secondary" onClick={() => setSelectedRental(property)}>{t.viewDetails}</button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        );
                      })()}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}          {/* TAB 5: JOBS & BUSINESS COMMERCE */}
          {activeTab === 'jobs' && (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Jobs and Commerce Subtabs */}
              <div className="tabs-header">
                <button className={`tab-pill ${jobsCommerceSubTab === 'job' ? 'active' : ''}`} onClick={() => setJobsCommerceSubTab('job')}>
                  Job Board
                </button>
                <button className={`tab-pill ${jobsCommerceSubTab === 'labour' ? 'active' : ''}`} onClick={() => setJobsCommerceSubTab('labour')}>
                  Labour Registry
                </button>
              </div>

              {/* Sub-tab A: Job board */}
              {jobsCommerceSubTab === 'job' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>Industrial & Contract Jobs</h4>
                    <button className="btn btn-primary" style={{ padding: '4px 8px', fontSize: '0.65rem', flex: 'none' }} onClick={() => setJobFormOpen(!jobFormOpen)}>
                      <Plus size={10} /> {t.addJob}
                    </button>
                  </div>

                  {jobFormOpen && (
                    <div className="card" style={{ border: '1px dashed hsl(var(--primary))' }}>
                      <h4 style={{ fontSize: '0.78rem' }}>{t.addJob}</h4>
                      <form onSubmit={handlePostJob} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                        <div className="form-group">
                          <label className="form-label">{t.jobTitle}</label>
                          <input type="text" className="form-input" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">{t.compName}</label>
                          <input type="text" className="form-input" value={newJob.company} onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Job Type</label>
                          <select className="form-input" value={newJob.type} onChange={(e) => setNewJob({ ...newJob, type: e.target.value })} aria-label="Job Contract Type Selector">
                            <option value="full-time">Full-time Job</option>
                            <option value="contract">Contractual Work</option>
                            <option value="daily-wages">Daily Wages</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Salary Details</label>
                          <input type="text" className="form-input" value={newJob.salary} onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Requirements</label>
                          <input type="text" className="form-input" value={newJob.requirements} onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Job Description</label>
                          <textarea className="form-input" rows={2} value={newJob.desc} onChange={(e) => setNewJob({ ...newJob, desc: e.target.value })}></textarea>
                        </div>
                        <div className="form-group">
                          <label className="form-label">HR Phone</label>
                          <input type="tel" className="form-input" value={newJob.phone} onChange={(e) => setNewJob({ ...newJob, phone: e.target.value })} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Announce Position</button>
                      </form>
                    </div>
                  )}

                  {localJobs.map(j => (
                    <div key={j.id} className="card" style={{ padding: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(j.title)}</h4>
                          <div style={{ fontSize: '0.7rem', fontWeight: 600 }}>{getTxt(j.company)}</div>
                        </div>
                        <span className="badge badge-success" style={{ textTransform: 'capitalize' }}>{j.type.replace('-', ' ')}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>{getTxt(j.salary)}</div>
                      <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}><strong>Requirements:</strong> {getTxt(j.requirements)}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', marginTop: '4px' }}>
                        <span style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>{t.posted}: {j.postedDate}</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <a href={`tel:${j.phone}`} style={{ color: 'white', backgroundColor: 'hsl(var(--primary))', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.65rem', fontWeight: 700 }}><Phone size={10} /> Call HR</a>
                          <button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.65rem' }} onClick={() => setSelectedJob(j)}>Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab B: Labour Registry */}
              {jobsCommerceSubTab === 'labour' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>Labour Registry</h4>
                    <button className="btn btn-primary" style={{ padding: '4px 8px', fontSize: '0.65rem', flex: 'none' }} onClick={() => setLabourFormOpen(!labourFormOpen)}>
                      <Plus size={10} /> {t.addLabour}
                    </button>
                  </div>

                  {labourFormOpen && (
                    <div className="card" style={{ border: '1px dashed hsl(var(--primary))' }}>
                      <h4 style={{ fontSize: '0.78rem' }}>{t.addLabour}</h4>
                      <form onSubmit={handleRegisterLabour} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                        <div className="form-group">
                          <label className="form-label">Full Name</label>
                          <input type="text" className="form-input" value={newLabour.name} onChange={(e) => setNewLabour({ ...newLabour, name: e.target.value })} required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Trade / Skill</label>
                          <input type="text" className="form-input" value={newLabour.skill} onChange={(e) => setNewLabour({ ...newLabour, skill: e.target.value })} required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Expected daily rate</label>
                          <input type="text" className="form-input" value={newLabour.rate} onChange={(e) => setNewLabour({ ...newLabour, rate: e.target.value })} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input type="tel" className="form-input" value={newLabour.phone} onChange={(e) => setNewLabour({ ...newLabour, phone: e.target.value })} required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Location</label>
                          <input type="text" className="form-input" value={newLabour.location} onChange={(e) => setNewLabour({ ...newLabour, location: e.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                      </form>
                    </div>
                  )}

                  {localLabour.map(l => (
                    <div key={l.id} className="card" style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <h4 style={{ fontSize: '0.8rem' }}>{getTxt(l.name)}</h4>
                          <span style={{ fontSize: '0.7rem', color: 'hsl(var(--primary))', fontWeight: 600 }}>{getTxt(l.skill)}</span>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>{getTxt(l.rate)}</span>
                          <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>{getTxt(l.location)}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '6px', marginTop: '6px' }}>
                        <a href={`tel:${l.phone}`} style={{ color: 'white', backgroundColor: '#16a34a', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.65rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Phone size={10} /> Call Labour</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {/* TAB 6: HUB HIGHLIGHTS & INSIGHTS */}
          {activeTab === 'insights' && (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Back button & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid hsl(var(--border) / 0.8)', paddingBottom: '12px' }}>
                <button
                  className="btn btn-secondary"
                  style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                  onClick={() => setActiveTab('home')}
                >
                  ⬅️ {lang === 'en' ? "Back to Dashboard" : lang === 'te' ? "డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు" : "डैशबोर्ड पर वापस जाएं"}
                </button>
                <h3 style={{ margin: 0, fontSize: '0.92rem', color: 'hsl(var(--primary))', fontWeight: 800 }}>
                  💡 Orvakal Industrial Hub
                </h3>
              </div>

              {/* 1. Context on Industrial Presence */}
              <div className="card" style={{ borderLeft: '4px solid #be123c', padding: '14px' }}>
                <h4 style={{ fontSize: '0.82rem', color: '#be123c', fontWeight: 800, margin: 0 }}>
                  🏢 Context on Industrial Presence
                </h4>
                <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', lineHeight: 1.4, margin: '6px 0 0 0' }}>
                  It is important to distinguish between large-scale anchor industries and the numerous smaller engineering and manufacturing units already operating in the Kurnool district, many of which serve the regional industrial ecosystem.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px', paddingLeft: '8px', borderLeft: '2px solid hsl(var(--border))' }}>
                  <div>
                    <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Diverse Sectoral Base:</strong>
                    <span style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>
                      Historically, the area has hosted various small to medium-scale machinery manufacturers, foundries, and fabrication units. You may find local listings for entities involved in engineering, packaging, and industrial equipment supplying to the region.
                    </span>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Upcoming Growth:</strong>
                    <span style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>
                      The state government is actively marketing the hub to reach a massive investment target of ₹50,000 crore. Consequently, many more "registrations" and land allotments are expected as the infrastructure (power, water, and logistics) is finalized.
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Key Companies Recently Linked to Orvakal */}
              <div className="card" style={{ borderLeft: '4px solid #0369a1', padding: '14px' }}>
                <h4 style={{ fontSize: '0.82rem', color: '#0369a1', fontWeight: 800, margin: 0 }}>
                  🏭 Key Companies Recently Linked to Orvakal
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                  <div style={{ padding: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '6px' }}>
                    <strong style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))' }}>Virupaksha Organics Ltd</strong>
                    <p style={{ margin: '2px 0 0 0', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                      A Hyderabad-based company that has received approval for the allotment of over 100 acres in the Guttapadu Industrial Cluster. They are establishing a major manufacturing facility for Active Pharmaceutical Ingredients (APIs) and organic chemicals, with a substantial investment commitment (approx. ₹1,225 crore) creating 1,500+ jobs.
                    </p>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '6px' }}>
                    <strong style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))' }}>Sigachi Industries Ltd</strong>
                    <p style={{ margin: '2px 0 0 0', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                      Another Hyderabad-based firm specializing in pharmaceutical excipients, such as microcrystalline cellulose (MCC). They are expanding their operations to the Orvakal node to establish a facility for Bulk Drugs, Drug Intermediates, and Specialty Chemicals on approximately 25 acres (Plot A-10).
                    </p>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '6px' }}>
                    <strong style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))' }}>Sri Mandava Bio-Tech & Partners</strong>
                    <p style={{ margin: '2px 0 0 0', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                      Developing high-value agro-processing and biological packaging operations to leverage the local logistics networks and primary agricultural produce in the Kurnool district.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Key Infrastructure & Support Features */}
              <div className="card" style={{ borderLeft: '4px solid #15803d', padding: '14px' }}>
                <h4 style={{ fontSize: '0.82rem', color: '#15803d', fontWeight: 800, margin: 0 }}>
                  🔌 Key Infrastructure & Support Features
                </h4>
                <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', lineHeight: 1.4, margin: '6px 0 0 0' }}>
                  To attract investment, the Andhra Pradesh government provides a business-friendly environment at the Orvakal Industrial Hub by focusing on "plug-and-play" infrastructure and strategic policy support.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                  <div>
                    <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Power & Water:</strong>
                    <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      Dedicated, reliable power supply and water allocation (sourced from the Srisailam foreshore/Muchumarri project) are key priorities for industrial utility.
                    </p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Logistics:</strong>
                    <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      The hub is designed with integrated logistics zones, internal road networks, and storm drainage systems to support heavy and light manufacturing.
                    </p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Waste Management:</strong>
                    <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      Planned Common Effluent Treatment Plants (CETPs) and bio-waste disposal facilities are included in the master plan to meet environmental compliance standards.
                    </p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Sector-Specific Parks:</strong>
                    <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      The hub includes dedicated clusters like the Guttapadu MSME Park, which is specifically designed to provide smaller enterprises with ready-to-use land and supporting utilities at subsidized rates to encourage rapid scaling.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Policy Incentives & Land Allotment */}
              <div className="card" style={{ borderLeft: '4px solid #6d28d9', padding: '14px' }}>
                <h4 style={{ fontSize: '0.82rem', color: '#6d28d9', fontWeight: 800, margin: 0 }}>
                  ⚖️ Policy Incentives & Land Allotment
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                  <div>
                    <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• MSME Support:</strong>
                    <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                      Incentives for small and medium-sized enterprises are generally aligned with state industrial policies (such as the Industrial Development Policy), which often include subsidies on capital investment, power cost reimbursements, and interest subvention for loans.
                    </p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Land Allotment:</strong>
                    <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                      The Andhra Pradesh Industrial Infrastructure Corporation (APIIC) acts as the nodal agency, facilitating land allotment and ensuring that the land is properly cleared for industrial use.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Getting Started & Resources */}
              <div className="card" style={{ borderLeft: '4px solid #b45309', padding: '14px' }}>
                <h4 style={{ fontSize: '0.82rem', color: '#b45309', fontWeight: 800, margin: 0 }}>
                  🔗 Getting Started & Resources
                </h4>
                <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', margin: '4px 0' }}>
                  For companies interested in setting up operations, the following resources are typically used to access official incentive details and land application processes:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  <div style={{ fontSize: '0.7rem' }}>
                    <strong style={{ color: 'hsl(var(--foreground))' }}>APIIC (Andhra Pradesh Industrial Infrastructure Corporation):</strong>
                    <p style={{ margin: '2px 0 0 8px', color: 'hsl(var(--muted-foreground))' }}>
                      The primary authority for land allotments and infrastructure development. You can monitor their site for active RFPs (Requests for Proposal) and land availability.
                    </p>
                  </div>
                  <div style={{ fontSize: '0.7rem' }}>
                    <strong style={{ color: 'hsl(var(--foreground))' }}>Andhra Pradesh e-Procurement Portal:</strong>
                    <p style={{ margin: '2px 0 0 8px', color: 'hsl(var(--muted-foreground))' }}>
                      Often used for bidding on industrial projects or accessing tender documents related to the development of the Orvakal hub.
                    </p>
                  </div>
                  <div style={{ fontSize: '0.7rem' }}>
                    <strong style={{ color: 'hsl(var(--foreground))' }}>Invest India / India Investment Grid (IIG):</strong>
                    <p style={{ margin: '2px 0 0 8px', color: 'hsl(var(--muted-foreground))' }}>
                      A national platform that tracks major infrastructure projects and often lists specific investment opportunities and contact details for the project sponsors.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </main>

        {/* DETAILS OVERLAYS / MODALS */}
        
        {/* Officer Modal */}
        {selectedOfficer && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="card fade-in" style={{ width: '100%', backgroundColor: 'hsl(var(--card))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))' }}>{t.govt}</h3>
                <button className="icon-btn" onClick={() => setSelectedOfficer(null)} style={{ width: '24px', height: '24px' }}><X size={12} /></button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <h4 style={{ fontSize: '0.9rem' }}>{getTxt(selectedOfficer.name)}</h4>
                <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'hsl(var(--muted-foreground))' }}>{getTxt(selectedOfficer.designation)}</p>
                <div style={{ fontSize: '0.75rem' }}><strong>Department:</strong> {getTxt(selectedOfficer.department)}</div>
                <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
                  <div><strong>Phone:</strong> {selectedOfficer.phone}</div>
                  <div><strong>Email:</strong> {selectedOfficer.email}</div>
                  <div><strong>Office Location:</strong> {selectedOfficer.location ? getTxt(selectedOfficer.location) : "Orvakal Panchayat HQ"}</div>
                  {selectedOfficer.timings && <div><strong>Working Hours:</strong> {getTxt(selectedOfficer.timings)}</div>}
                </div>
                {selectedOfficer.servicesDescription && (
                  <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
                    <strong>Services Provided:</strong>
                    <p style={{ margin: '4px 0 0 0', lineHeight: 1.3, color: 'hsl(var(--muted-foreground))' }}>{getTxt(selectedOfficer.servicesDescription)}</p>
                  </div>
                )}
                <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px' }}>
                  <strong style={{ fontSize: '0.75rem' }}>Authorized Permissions:</strong>
                  <ul style={{ paddingLeft: '18px', fontSize: '0.7rem', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {selectedOfficer.permissions.map((p, idx) => <li key={idx}>{getTxt(p)}</li>)}
                  </ul>
                </div>
              </div>
              <a href={`tel:${selectedOfficer.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '10px' }}><Phone size={12} /> Call Office</a>
            </div>
          </div>
        )}

        {/* School Details Modal */}
        {selectedSchool && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="card fade-in" style={{ width: '100%', backgroundColor: 'hsl(var(--card))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))' }}>{lang === 'en' ? "School Details" : lang === 'te' ? "పాఠశాల వివరాలు" : "स्कूल विवरण"}</h3>
                <button className="icon-btn" onClick={() => setSelectedSchool(null)} style={{ width: '24px', height: '24px' }}><X size={12} /></button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <h4 style={{ fontSize: '0.9rem' }}>{getTxt(selectedSchool.name)}</h4>
                <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'hsl(var(--muted-foreground))' }}>{getTxt(selectedSchool.schoolName)}</p>
                <div style={{ fontSize: '0.75rem' }}><strong>Medium / Scope:</strong> {getTxt(selectedSchool.subject)}</div>
                <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
                  {selectedSchool.principal && <div><strong>Principal / In-charge:</strong> {getTxt(selectedSchool.principal)}</div>}
                  {selectedSchool.address && <div><strong>Address:</strong> {getTxt(selectedSchool.address)}</div>}
                  {selectedSchool.timings && <div><strong>School Timings:</strong> {getTxt(selectedSchool.timings)}</div>}
                  {selectedSchool.establishedYear && <div><strong>Established:</strong> {selectedSchool.establishedYear}</div>}
                  <div><strong>Phone:</strong> {selectedSchool.phone}</div>
                </div>
                {selectedSchool.facilities && selectedSchool.facilities.length > 0 && (
                  <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px' }}>
                    <strong style={{ fontSize: '0.75rem' }}>Facilities Available:</strong>
                    <ul style={{ paddingLeft: '18px', fontSize: '0.7rem', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {selectedSchool.facilities.map((f, idx) => <li key={idx}>{getTxt(f)}</li>)}
                    </ul>
                  </div>
                )}
              </div>
              <a href={`tel:${selectedSchool.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '10px' }}><Phone size={12} /> Contact School</a>
            </div>
          </div>
        )}

        {/* Job Modal */}
        {selectedJob && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="card fade-in" style={{ width: '100%', backgroundColor: 'hsl(var(--card))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))' }}>Job Details</h3>
                <button className="icon-btn" onClick={() => setSelectedJob(null)} style={{ width: '24px', height: '24px' }}><X size={12} /></button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <h4 style={{ fontSize: '0.9rem' }}>{getTxt(selectedJob.title)}</h4>
                <p style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{getTxt(selectedJob.company)}</p>
                <div style={{ fontSize: '0.75rem', color: 'hsl(var(--secondary))', fontWeight: 800 }}>{getTxt(selectedJob.salary)}</div>
                <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
                  <strong>Requirements:</strong>
                  <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>{getTxt(selectedJob.requirements)}</p>
                </div>
                <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
                  <strong>Description:</strong>
                  <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>{getTxt(selectedJob.description)}</p>
                </div>
              </div>
              <a href={`tel:${selectedJob.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '10px' }}><Phone size={12} /> Contact HR Office</a>
            </div>
          </div>
        )}
        {/* Shop / Services Modal */}
        {selectedShop && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="card fade-in" style={{ width: '100%', backgroundColor: 'hsl(var(--card))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))' }}>
                  {getShopCategoryName(selectedShop.category)}
                </h3>
                <button className="icon-btn" onClick={() => setSelectedShop(null)} style={{ width: '24px', height: '24px' }}><X size={12} /></button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <h4 style={{ fontSize: '0.9rem' }}>{getTxt(selectedShop.name)}</h4>
                
                {selectedShop.stars && (
                  <div style={{ display: 'flex', gap: '2px', alignItems: 'center', marginTop: '2px' }}>
                    {Array.from({ length: selectedShop.stars }).map((_, i) => <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />)}
                    <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>({selectedShop.stars} Star Stays)</span>
                  </div>
                )}

                {selectedShop.capacity && (
                  <div style={{ fontSize: '0.75rem' }}>
                    <strong>{t.capacity}:</strong> {selectedShop.capacity} {lang === 'en' ? 'Guests' : lang === 'te' ? 'అతిథులు' : 'अतिथि'}
                  </div>
                )}

                {selectedShop.priceRate && (
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>
                    {getTxt(selectedShop.priceRate)}
                  </div>
                )}

                <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
                  <div><strong>{t.owner}:</strong> {getTxt(selectedShop.owner)}</div>
                  <div><strong>{t.timing}:</strong> {getTxt(selectedShop.timing)}</div>
                  <div><strong>{t.address}:</strong> {getTxt(selectedShop.location)}</div>
                </div>

                {selectedShop.details && (
                  <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
                    <strong>Details:</strong>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>{getTxt(selectedShop.details)}</p>
                  </div>
                )}
              </div>
              <a href={`tel:${selectedShop.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '10px' }}>
                <Phone size={12} /> {t.callNow}
              </a>
            </div>
          </div>
        )}

        {/* Rental Property Modal */}
        {selectedRental && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="card fade-in" style={{ width: '100%', backgroundColor: 'hsl(var(--card))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))' }}>Rental Stay Details</h3>
                <button className="icon-btn" onClick={() => setSelectedRental(null)} style={{ width: '24px', height: '24px' }}><X size={12} /></button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'capitalize' }}>{selectedRental.type} for Rent</h4>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>₹{selectedRental.rent.toLocaleString()}/mo</div>
                <div style={{ fontSize: '0.75rem' }}><strong>Deposit:</strong> ₹{selectedRental.deposit.toLocaleString()}</div>
                <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
                  <div><strong>Owner / Contact:</strong> {getTxt(selectedRental.contactName)}</div>
                  <div><strong>Phone:</strong> {selectedRental.phone}</div>
                  <div><strong>Location:</strong> {getTxt(selectedRental.location)}</div>
                </div>
                {selectedRental.details && (
                  <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
                    <strong>Amenities / Details:</strong>
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>{getTxt(selectedRental.details)}</p>
                  </div>
                )}
              </div>
              <a href={`tel:${selectedRental.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '10px' }}><Phone size={12} /> Call Owner</a>
            </div>
          </div>
        )}

        {/* Industry Modal */}
        {selectedIndustry && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="card fade-in" style={{ width: '100%', backgroundColor: 'hsl(var(--card))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))' }}>Industrial Desk</h3>
                <button className="icon-btn" onClick={() => setSelectedIndustry(null)} style={{ width: '24px', height: '24px' }}><X size={12} /></button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <h4 style={{ fontSize: '0.9rem' }}>{getTxt(selectedIndustry.name)}</h4>
                <div style={{ fontSize: '0.75rem' }}><strong>Sector:</strong> {getTxt(selectedIndustry.sector)}</div>
                <div style={{ fontSize: '0.75rem' }}><strong>Location:</strong> {getTxt(selectedIndustry.location)}</div>
                <div style={{ fontSize: '0.75rem' }}><strong>Status:</strong> <span className="badge badge-success">{getTxt(selectedIndustry.status)}</span></div>
              </div>
              <a href={`tel:${selectedIndustry.hrContact}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '10px' }}><Phone size={12} /> Contact HR Office</a>
            </div>
          </div>
        )}

        {/* SOS Emergency Modal */}
        {sosModalOpen && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <div className="card fade-in" style={{ width: '100%', backgroundColor: 'hsl(var(--card))', border: '2px solid #fecaca', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.1rem', color: '#be123c', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                  <ShieldAlert size={20} /> emergency helplines
                </h2>
                <button className="icon-btn" onClick={() => setSosModalOpen(false)} style={{ borderColor: '#fca5a5', color: '#dc2626', backgroundColor: '#ffe4e6' }}><X size={12} /></button>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                {emergencies.map((emg) => (
                  <div key={emg.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '8px' }}>
                    <div>
                      <strong style={{ fontSize: '0.8rem', color: 'hsl(var(--foreground))' }}>{getTxt(emg.name)}</strong>
                      <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>{getTxt(emg.location)}</div>
                    </div>
                    <a href={`tel:${emg.phone}`} style={{ backgroundColor: '#ffe4e6', color: '#be123c', border: '1px solid #fecaca', padding: '6px 12px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Phone size={10} /> {emg.phone}
                    </a>
                  </div>
                ))}
              </div>
              
              <div style={{ fontSize: '0.65rem', textAlign: 'center', color: 'hsl(var(--muted-foreground))', marginTop: '10px' }}>
                Click to call directly. Free emergency service numbers function offline.
              </div>
            </div>
          </div>
        )}

        {/* Orvakal At A Glance / Hub Insights Details Modal */}
        {showOrvakalGlanceDetails && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <div className="card fade-in" style={{ width: '100%', maxWidth: '480px', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  💡 Hub Insights
                </h3>
                <button className="icon-btn" onClick={() => setShowOrvakalGlanceDetails(false)} style={{ width: '24px', height: '24px' }}><X size={12} /></button>
              </div>
              
              <div style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))', lineHeight: 1.4, maxHeight: '350px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', paddingRight: '4px' }}>
                <p style={{ margin: 0 }}>
                  The Orvakal Industrial Hub is in a significant phase of expansion, transitioning into a multi-sector industrial node. While many units are currently in the planning or foundational stages, several companies have been formally linked to the site, particularly in the pharmaceutical and food processing sectors.
                </p>
                
                <strong style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', borderBottom: '1px dashed hsl(var(--border) / 0.6)', paddingBottom: '4px', marginTop: '6px' }}>
                  Key Companies Recently Linked to Orvakal:
                </strong>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <strong style={{ color: 'hsl(var(--foreground))' }}>1. Virupaksha Organics Ltd:</strong>
                  <p style={{ margin: '0 0 0 8px', fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))' }}>
                    A Hyderabad-based company that has received approval for the allotment of over 100 acres in the Guttapadu Industrial Cluster. They are establishing a major manufacturing facility for Active Pharmaceutical Ingredients (APIs) and organic chemicals, with a substantial investment commitment.
                  </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <strong style={{ color: 'hsl(var(--foreground))' }}>2. Sigachi Industries Ltd:</strong>
                  <p style={{ margin: '0 0 0 8px', fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))' }}>
                    Another Hyderabad-based firm specializing in pharmaceutical excipients, such as microcrystalline cellulose (MCC). They are expanding their operations to the Orvakal node to serve pharmaceutical, food, and nutraceutical markets.
                  </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <strong style={{ color: 'hsl(var(--foreground))' }}>3. Sri Mandava Bio-Tech & Partners:</strong>
                  <p style={{ margin: '0 0 0 8px', fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))' }}>
                    Engaged in developing biological and agro-processing facilities to leverage local agricultural output and provide high-value organic supplements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Refactored Bottom Tab Navigation */}
        <nav className="app-nav">
          <button
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
            aria-label="Dashboard Tab"
          >
            <LayoutDashboard className="nav-icon" />
            <span>{t.home}</span>
          </button>
          
          <button
            className={`nav-item ${activeTab === 'directory' ? 'active' : ''}`}
            onClick={() => setActiveTab('directory')}
            aria-label="Govt & Schools Tab"
          >
            <Building2 className="nav-icon" />
            <span>{t.directory}</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'farmer' ? 'active' : ''}`}
            onClick={() => setActiveTab('farmer')}
            aria-label="Farmer Desk Tab"
          >
            <Sprout className="nav-icon" />
            <span>{t.rentals}</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'hospitality' ? 'active' : ''}`}
            onClick={() => setActiveTab('hospitality')}
            aria-label="Services Catalog Tab"
          >
            <Home className="nav-icon" />
            <span>{t.services}</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobs')}
            aria-label="Jobs & Local Business Tab"
          >
            <Briefcase className="nav-icon" />
            <span>{t.jobs}</span>
          </button>
        </nav>

      </div>
    </div>
  );
}

export default App;
