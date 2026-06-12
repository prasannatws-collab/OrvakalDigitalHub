import { Bell, X } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { notices } from '../data/noticesData';

interface NoticeDrawerProps {
  onClose: () => void;
}

export const NoticeDrawer = ({ onClose }: NoticeDrawerProps) => {
  const { getTxt } = useLanguage();

  return (
    <div className="card fade-in" style={{ margin: '12px', zIndex: 90, backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--primary))' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Bell size={16} /> Notice Board ({notices.length})
        </h3>
        <button className="icon-btn" onClick={onClose} style={{ width: '20px', height: '20px' }} aria-label="Close Notice Board">
          <X size={10} />
        </button>
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
  );
};
