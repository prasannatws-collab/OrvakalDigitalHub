import { Bell } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { notices } from '../data/noticesData';

export const NoticeBoardList = () => {
  const { getTxt, lang } = useLanguage();

  const noticeBoardTitle = lang === 'en' ? "Notice Board" : lang === 'te' ? "సమాచార బోర్డు" : "सूचना पट्ट";

  return (
    <div className="card">
      <h3 className="section-title" style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Bell size={15} style={{ color: 'hsl(var(--primary))' }} /> {noticeBoardTitle}
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
  );
};
