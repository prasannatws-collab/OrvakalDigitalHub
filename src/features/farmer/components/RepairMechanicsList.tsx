import { Phone, Star } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { repairMechanics } from '../data/farmerData';

export const RepairMechanicsList = () => {
  const { t, getTxt } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
        <h4 style={{ fontSize: '0.8rem' }}>🔧 {t.repairSpecialists}</h4>
        <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
          Contact local mechanical experts for motor rewinding, tractor service, and borewell repairs.
        </p>
      </div>
      {repairMechanics.map(mech => (
        <div key={mech.id} className="card" style={{ padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ fontSize: '0.82rem', color: 'hsl(var(--foreground))', fontWeight: 800 }}>
                {getTxt(mech.name)}
              </h4>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'capitalize', marginTop: '2px', display: 'inline-block' }}>
                {mech.specialty} Specialist
              </span>
            </div>
            <span className={`badge ${mech.available ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.6rem' }}>
              {mech.available ? t.available : t.busy}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '2px', alignItems: 'center', marginTop: '4px' }}>
            {Array.from({ length: Math.round(mech.rating) }).map((_, i) => <Star key={i} size={10} fill="#f59e0b" color="#f59e0b" />)}
            <span style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>({mech.rating} Rating)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', borderTop: '1px dashed var(--glass-border)', paddingTop: '8px', fontSize: '0.7rem' }}>
            <div>
              <strong>Location: </strong> {getTxt(mech.location)}
            </div>
            <a href={`tel:${mech.phone}`} style={{ textDecoration: 'none', backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', padding: '4px 8px', borderRadius: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Phone size={10} /> Call Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
