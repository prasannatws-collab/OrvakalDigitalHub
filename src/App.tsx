import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Building2,
  Sprout,
  Home,
  Briefcase,
  Bell,
  Moon,
  Sun,
  Search,
  ShieldAlert,
  Phone
} from 'lucide-react';

// Contexts
import { useLanguage } from './core/context/LanguageContext';
import { useTheme } from './core/context/ThemeContext';

// Components
import { Modal } from './core/components/Modal';

// Features
import { DashboardView } from './features/dashboard/components/DashboardView';
import { DirectoryDesk } from './features/directory/components/DirectoryDesk';
import { FarmerDesk } from './features/farmer/components/FarmerDesk';
import { HospitalityCatalog } from './features/hospitality/components/HospitalityCatalog';
import { JobsCommerce } from './features/jobs/components/JobsCommerce';
import { InsightsView } from './features/dashboard/components/InsightsView';
import { NoticeDrawer } from './features/notice-board/components/NoticeDrawer';

// Data / Mocks / Types
import { emergencies } from './features/directory/data/directoryData';
import type { IndustrialPlant } from './types';

type ActiveTab = 'home' | 'directory' | 'farmer' | 'hospitality' | 'jobs' | 'insights';
type DirectorySubTab = 'govt' | 'education' | 'grievance' | 'postal' | 'banks' | 'police' | 'hospital' | 'schemes' | 'committees';
type FarmerSubTab = 'feeder' | 'mandi' | 'msp' | 'tractor' | 'advisory' | 'crop-holiday' | 'water' | 'repair' | 'agri-officer';
type JobsCommerceSubTab = 'job' | 'labour' | 'industries';

function App() {
  const { lang, setLang, t, getTxt } = useLanguage();
  const { theme, setTheme } = useTheme();

  // Root states
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSos, setShowSos] = useState(true);
  const [showNotificationDrawer, setShowNotificationDrawer] = useState(false);

  // Sub-tabs orchestrators
  const [directorySubTab, setDirectorySubTab] = useState<DirectorySubTab | null>(null);
  const [farmerSubTab, setFarmerSubTab] = useState<FarmerSubTab>('feeder');
  const [jobsCommerceSubTab, setJobsCommerceSubTab] = useState<JobsCommerceSubTab>('job');
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | null>(null);

  // Global overlay modals
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrialPlant | null>(null);

  // Reset scroll and SOS banner visibility on tab changes
  useEffect(() => {
    const mainEl = document.querySelector('.app-content');
    if (mainEl) {
      mainEl.scrollTop = 0;
    }
    setShowSos(true);
  }, [activeTab]);

  // Nav shortcuts
  const handleShortcutClick = (
    tabName: ActiveTab,
    subTabName?: string,
    query?: string
  ) => {
    setActiveTab(tabName);
    setSearchQuery(query || '');
    if (tabName === 'directory' && subTabName) {
      setDirectorySubTab(subTabName as DirectorySubTab);
    }
    if (tabName === 'farmer' && subTabName) {
      setFarmerSubTab(subTabName as FarmerSubTab);
    }
    if (tabName === 'hospitality') {
      setSelectedServiceCategory(subTabName || null);
    }
    if (tabName === 'jobs') {
      if (subTabName === 'business') {
        setActiveTab('hospitality');
        setSelectedServiceCategory(query || null);
        setSearchQuery('');
      } else {
        setJobsCommerceSubTab((subTabName || 'job') as JobsCommerceSubTab);
      }
    }
  };

  // Scroll Fade function for SOS strip
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
              <div
                className="app-logo-icon"
                style={{
                  background: 'transparent',
                  boxShadow: 'none',
                  padding: 0,
                  overflow: 'visible',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
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
                onChange={(e) => setLang(e.target.value as any)}
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
          <NoticeDrawer onClose={() => setShowNotificationDrawer(false)} />
        )}

        {/* Main Content Area */}
        <main className="app-content" onScroll={handleScroll}>
          {activeTab === 'home' && (
            <DashboardView
              onShortcutClick={handleShortcutClick}
              onSosClick={() => setSosModalOpen(true)}
              onIndustrySelect={setSelectedIndustry}
            />
          )}

          {activeTab === 'directory' && (
            <DirectoryDesk
              searchQuery={searchQuery}
              subTab={directorySubTab}
              onSubTabChange={setDirectorySubTab}
            />
          )}

          {activeTab === 'farmer' && (
            <FarmerDesk
              subTab={farmerSubTab}
              onSubTabChange={setFarmerSubTab}
            />
          )}

          {activeTab === 'hospitality' && (
            <HospitalityCatalog
              searchQuery={searchQuery}
              selectedServiceCategory={selectedServiceCategory}
              setSelectedServiceCategory={setSelectedServiceCategory}
            />
          )}

          {activeTab === 'jobs' && (
            <JobsCommerce
              searchQuery={searchQuery}
              subTab={jobsCommerceSubTab}
              onSubTabChange={setJobsCommerceSubTab}
            />
          )}

          {activeTab === 'insights' && (
            <InsightsView onBackClick={() => setActiveTab('home')} />
          )}
        </main>

        {/* Bottom Tab Navigation */}
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

        {/* Global Modals */}

        {/* SOS Emergency Modal */}
        <Modal
          isOpen={sosModalOpen}
          onClose={() => setSosModalOpen(false)}
          title={
            <h2 style={{ fontSize: '1.1rem', color: '#be123c', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
              <ShieldAlert size={20} /> emergency helplines
            </h2>
          }
          innerStyle={{ border: '2px solid #fecaca', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
          closeButtonIconColor="#dc2626"
          closeButtonStyle={{ borderColor: '#fca5a5', color: '#dc2626', backgroundColor: '#ffe4e6' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
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
        </Modal>

        {/* Global Mega Industry Details Modal */}
        <Modal
          isOpen={selectedIndustry !== null}
          onClose={() => setSelectedIndustry(null)}
          title="Industrial Desk"
        >
          {selectedIndustry && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h4 style={{ fontSize: '0.9rem', margin: 0 }}>{getTxt(selectedIndustry.name)}</h4>
              <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                <strong>Sector:</strong> {getTxt(selectedIndustry.sector)}
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <strong>Location:</strong> {getTxt(selectedIndustry.location)}
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <strong>Status:</strong> <span className="badge badge-success">{getTxt(selectedIndustry.status)}</span>
              </div>
              <a
                href={`tel:${selectedIndustry.hrContact}`}
                className="btn btn-primary"
                style={{ textDecoration: 'none', marginTop: '10px', display: 'block', textAlign: 'center' }}
              >
                <Phone size={12} /> Contact HR Office
              </a>
            </div>
          )}
        </Modal>

      </div>
    </div>
  );
}

export default App;
