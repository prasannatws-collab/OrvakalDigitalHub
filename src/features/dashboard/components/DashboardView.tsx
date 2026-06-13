import { Bell } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { DashboardBanner } from './DashboardBanner';
import { WeatherClockCard } from './WeatherClockCard';
import { PersonaSelector } from './PersonaSelector';
import { TransitDesk } from './TransitDesk';
import { notices } from '../../notice-board/data/noticesData';
import { newsItems } from '../../directory/data/directoryData';
import { attractions } from '../../hospitality/data/hospitalityData';

interface DashboardViewProps {
  onShortcutClick: (tab: 'home' | 'directory' | 'farmer' | 'hospitality' | 'jobs' | 'insights', subTab?: string, query?: string) => void;
  onSosClick: () => void;
  onAirportClick: () => void;
}

export const DashboardView = ({
  onShortcutClick,
  onSosClick,
  onAirportClick
}: DashboardViewProps) => {
  const { t, getTxt, lang } = useLanguage();

  const handleTransportScroll = () => {
    onShortcutClick('home');
    setTimeout(() => {
      const el = document.querySelector('.transport-card');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Orvakal Banner */}
      <DashboardBanner onShortcutClick={onShortcutClick} onAirportClick={onAirportClick} />

      {/* Weather & Clock Card */}
      <WeatherClockCard />

      {/* Persona Search Deck */}
      <PersonaSelector
        onShortcutClick={onShortcutClick}
        onSosClick={onSosClick}
        onTransportScroll={handleTransportScroll}
      />

      {/* Bulletin Board Notice List */}
      <div className="card">
        <h3 className="section-title" style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Bell size={15} style={{ color: 'hsl(var(--primary))' }} />
          {lang === 'en' ? "Notice Board" : lang === 'te' ? "సమాచార బోర్డు" : "सूचना पट्ट"}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {notices.map((n) => (
            <div key={n.id} className={`notice-item ${n.type === 'alert' ? 'alert' : ''}`} style={{ margin: 0, borderLeftWidth: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>{getTxt(n.title)}</span>
                <span style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>{n.date}</span>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', lineHeight: 1.3, marginBlockEnd: 0 }}>
                {getTxt(n.content)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Transit & Transport Desk */}
      <TransitDesk />



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
              <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', lineHeight: 1.3, marginBlockEnd: 0 }}>
                {getTxt(news.summary)}
              </p>
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
                <h4 style={{ fontSize: '0.78rem', margin: 0 }}>{getTxt(att.name)}</h4>
                <p style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', height: '40px', overflow: 'hidden', margin: 0 }}>
                  {getTxt(att.description)}
                </p>
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
  );
};
