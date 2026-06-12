import { Phone, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { postalServices } from '../data/directoryData';

export const PostalServices = () => {
  const { t, getTxt } = useLanguage();

  return (
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
  );
};
