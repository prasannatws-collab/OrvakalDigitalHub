import { useLanguage } from '../../../core/context/LanguageContext';
import { waterReservoirs } from '../data/farmerData';

export const WaterReservoirsList = () => {
  const { t, getTxt } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="card" style={{ borderLeft: '4px solid hsl(var(--secondary))' }}>
        <h4 style={{ fontSize: '0.8rem' }}>💧 {t.waterLevels}</h4>
        <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
          Real-time water levels and storage capacities of local canals and reservoirs.
        </p>
      </div>
      {waterReservoirs.map(res => (
        <div key={res.id} className="card" style={{ padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>{getTxt(res.reservoirName)}</span>
            <span className={`badge ${getTxt(res.status) === 'Stable' || getTxt(res.status) === 'స్థిరంగా ఉంది' ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: '0.6rem' }}>
              {getTxt(res.status)}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.68rem', marginTop: '6px', borderTop: '1px dashed var(--glass-border)', paddingTop: '6px' }}>
            <div><strong>{t.level}:</strong> {getTxt(res.levelInfo)}</div>
            <div><strong>{t.reservoirCapacity}:</strong> {getTxt(res.capacityInfo)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
