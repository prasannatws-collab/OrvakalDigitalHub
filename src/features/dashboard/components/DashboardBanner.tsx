import { useState } from 'react';
import { Plane, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { Modal } from '../../../core/components/Modal';

export const DashboardBanner = () => {
  const { lang } = useLanguage();
  const [isAirportModalOpen, setIsAirportModalOpen] = useState(false);

  return (
    <>
      <div className="card banner-card" style={{ padding: '20px', borderRadius: '20px' }}>
        <div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Orvakal Hub</h2>
          <p style={{ fontSize: '0.78rem', opacity: 0.95, marginTop: '4px', lineHeight: '1.4' }}>
            {lang === 'en' && "Andhra Pradesh's fast-growing mega industrial hub. Solar parks, flight transit, and agricultural services at your fingertips."}
            {lang === 'te' && "ఆంధ్రప్రదేశ్ అత్యంత వేగంగా ఎదుగుతున్న పారిశ్రామిక గ్రామం. విమానాశ్రయం, సోలార్ పార్కులు మరియు రైతు సేవలు."}
            {lang === 'hi' && "आंध्र प्रदेश का सबसे तेजी से बढ़ता औद्योगिक ग्राम। हवाई अड्डा, सोलर पार्क और किसान सेवाएं आपके हाथ में।"}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(220, 252, 231, 0.2)', color: '#dcfce7', border: '1px solid rgba(34, 197, 94, 0.4)', padding: '4px 10px' }}>
            <span className="pulse-dot-green"></span> Active Panchayat
          </span>
          <button 
            className="badge badge-info" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              backgroundColor: 'rgba(224, 242, 254, 0.2)', 
              color: '#e0f2fe', 
              border: '1px solid rgba(14, 165, 233, 0.4)', 
              padding: '4px 10px',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
              fontWeight: 700
            }}
            onClick={() => setIsAirportModalOpen(true)}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(224, 242, 254, 0.35)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(224, 242, 254, 0.2)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            <Plane size={11} /> Airport KJB
          </button>
        </div>
      </div>

      {/* Airport flight transit modal */}
      <Modal
        isOpen={isAirportModalOpen}
        onClose={() => setIsAirportModalOpen(false)}
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plane size={18} style={{ color: 'hsl(var(--primary))' }} />
            <span style={{ fontWeight: 800, fontSize: '0.92rem', fontFamily: 'var(--font-heading)' }}>
              Uyyalawada Narasimha Reddy Airport (KJB)
            </span>
          </div>
        }
        backdropFilter={true}
        innerStyle={{ maxWidth: '420px', padding: '16px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
          <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.4, margin: 0 }}>
            {lang === 'en' ? 'Orvakal airport connects Kurnool district directly to major cities under the UDAN regional connectivity scheme.' : 
             lang === 'te' ? 'ఉడాన్ కనెక్టివిటీ స్కీమ్ కింద కర్నూలు జిల్లాను ప్రధాన నగరాలకు అనుసంధానించే ఓర్వకల్లు విమానాశ్రయం.' : 
             'उड़ान योजना के तहत कर्नूल जिले को प्रमुख शहरों से जोड़ने वाला ओर्वकल हवाई अड्डा।'}
          </p>

          <div style={{ borderTop: '1px dashed hsl(var(--border))', paddingTop: '10px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              📋 Weekly Flight Schedule
            </span>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
              <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid hsl(var(--border) / 0.3)' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700 }}>Kurnool (KJB) ➜ Bengaluru (BLR)</div>
                  <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>Indigo • Daily • 02:15 PM</div>
                </div>
                <span className="badge badge-success" style={{ fontSize: '0.55rem', padding: '2px 6px', height: 'fit-content' }}>Active</span>
              </div>

              <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid hsl(var(--border) / 0.3)' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700 }}>Kurnool (KJB) ➜ Hyderabad (HYD)</div>
                  <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>Indigo • Daily • 10:30 AM</div>
                </div>
                <span className="badge badge-success" style={{ fontSize: '0.55rem', padding: '2px 6px', height: 'fit-content' }}>Active</span>
              </div>

              <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid hsl(var(--border) / 0.3)' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700 }}>Kurnool (KJB) ➜ Chennai (MAA)</div>
                  <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>Indigo • Tue, Thu, Sat • 04:45 PM</div>
                </div>
                <span className="badge badge-success" style={{ fontSize: '0.55rem', padding: '2px 6px', height: 'fit-content' }}>Active</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', backgroundColor: 'hsl(var(--secondary) / 0.1)', padding: '8px', borderRadius: '8px', marginTop: '4px', border: '1px solid hsl(var(--secondary) / 0.15)' }}>
            <AlertCircle size={13} style={{ color: 'hsl(var(--secondary))', flexShrink: 0 }} />
            <span style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500 }}>
              Note: Reach airport 90 minutes before flight departure.
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};
