import { useState } from 'react';
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { postalServices } from '../../../data/postalData';

interface PostalServicesProps {
  searchQuery?: string;
}

export const PostalServices = ({ searchQuery = '' }: PostalServicesProps) => {
  const { lang, getTxt, t } = useLanguage();
  const [activePostId, setActivePostId] = useState<string | null>(null);

  // Filter post offices based on search query
  const filteredPostal = postalServices.filter(post => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(post.name).toLowerCase().includes(query) ||
      post.pincode.includes(query) ||
      getTxt(post.location).toLowerCase().includes(query)
    );
  });

  if (activePostId !== null) {
    const post = postalServices.find(p => p.id === activePostId);
    if (!post) return null;

    return (
      <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Back Button */}
        <button
          className="btn btn-secondary"
          style={{ alignSelf: 'flex-start', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          onClick={() => setActivePostId(null)}
        >
          ⬅️ {lang === 'en' ? "Back to Postal List" : lang === 'te' ? "పోస్టల్ జాబితాకు తిరిగి" : "डाक सूची पर वापस जाएं"}
        </button>

        {/* Post Office Details Card */}
        <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))', margin: 0 }}>
                {getTxt(post.name)}
              </h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                Pincode: {post.pincode}
              </span>
            </div>
            <span className="badge badge-success" style={{ fontSize: '0.55rem' }}>{t.verified}</span>
          </div>

          <div style={{ borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '10px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
            <div><strong>Postmaster:</strong> {getTxt(post.postmaster)}</div>
            <div className="info-row"><MapPin size={12} className="info-icon" /> <span>{getTxt(post.location)}</span></div>
            <div className="info-row"><Clock size={12} className="info-icon" /> <span>{getTxt(post.timing)}</span></div>
            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{post.phone}</span></div>
          </div>

          <div className="action-bar" style={{ marginTop: '10px' }}>
            <a href={`tel:${post.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={12} /> Call Postmaster</a>
          </div>
        </div>

        {/* Staff Directory Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          👤 {lang === 'en' ? "Postal Staff Directory" : lang === 'te' ? "పోస్టల్ సిబ్బంది వివరాలు" : "डाक कर्मचारी सूची"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {post.staff.map((member, idx) => (
            <div key={idx} className="card" style={{ padding: '12px', backgroundColor: 'hsl(var(--muted) / 0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h5 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: 0 }}>{getTxt(member.name)}</h5>
                  <span style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>{getTxt(member.role)}</span>
                </div>
                <a href={`tel:${member.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', padding: '4px 8px', fontSize: '0.65rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Phone size={10} /> Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          📝 {lang === 'en' ? "Postal Services Available" : lang === 'te' ? "అందుబాటులో ఉన్న పోస్టల్ సేవలు" : "उपलब्ध डाक सेवाएं"}
        </h4>
        <div className="card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {post.services.map((service, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '6px 8px', backgroundColor: 'hsl(var(--muted) / 0.3)', borderRadius: '6px' }}>
                <CheckCircle size={14} style={{ color: 'hsl(var(--primary))', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))', fontWeight: 600 }}>{getTxt(service)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schemes Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          📜 {lang === 'en' ? "Postal Savings & Welfare Schemes" : lang === 'te' ? "పోస్టల్ పొదుపు & సంక్షేమ పథకాలు" : "डाक बचत और कल्याण योजनाएं"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {post.schemes.map((scheme, idx) => (
            <div key={idx} className="card" style={{ padding: '14px', borderLeft: '3px solid hsl(var(--accent))' }}>
              <h5 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: '0 0 4px 0', fontWeight: 700 }}>
                {getTxt(scheme.name)}
              </h5>
              <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', margin: 0, lineHeight: 1.3 }}>
                {getTxt(scheme.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {filteredPostal.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', padding: '20px 0' }}>
          {lang === 'en' ? "No post offices found matching search query." : lang === 'te' ? "శోధనకు సరిపోయే పోస్ట్ ఆఫీసులు కనుగొనబడలేదు." : "खोज के अनुरूप कोई डाकघर नहीं मिला।"}
        </p>
      ) : (
        filteredPostal.map(post => (
          <div 
            key={post.id} 
            className="govt-menu-card" 
            onClick={() => setActivePostId(post.id)}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%', 
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flex: 1 }}>
              <div className="govt-menu-icon" style={{ fontSize: '1.4rem' }}>📯</div>
              <div className="govt-menu-info">
                <span className="govt-menu-title" style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                  {getTxt(post.name)}
                </span>
                <span className="govt-menu-desc" style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                  📍 {getTxt(post.location)} • Pin: {post.pincode}
                </span>
              </div>
            </div>
            <span className="badge badge-info" style={{ flexShrink: 0, marginLeft: '8px' }}>{t.verified}</span>
          </div>
        ))
      )}
    </div>
  );
};
