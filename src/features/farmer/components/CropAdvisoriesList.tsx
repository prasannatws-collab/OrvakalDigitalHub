import { useState } from 'react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { advisories, commercialCrops, fertilizerRecommendations } from '../data/farmerData';

export const CropAdvisoriesList = () => {
  const { t, getTxt, lang } = useLanguage();
  const [activeAdvisoryTab, setActiveAdvisoryTab] = useState<'advisories' | 'commercial' | 'fertilizer'>('advisories');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="tabs-header" style={{ marginBottom: '4px', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        <button className={`tab-pill ${activeAdvisoryTab === 'advisories' ? 'active' : ''}`} onClick={() => setActiveAdvisoryTab('advisories')}>
          🌱 {t.cropAdvisory}
        </button>
        <button className={`tab-pill ${activeAdvisoryTab === 'commercial' ? 'active' : ''}`} onClick={() => setActiveAdvisoryTab('commercial')}>
          💰 {lang === 'en' ? 'Commercial Crops' : lang === 'te' ? 'వాణిజ్య పంటలు' : 'वाणिज्यिक फसलें'}
        </button>
        <button className={`tab-pill ${activeAdvisoryTab === 'fertilizer' ? 'active' : ''}`} onClick={() => setActiveAdvisoryTab('fertilizer')}>
          🧪 {lang === 'en' ? 'Fertilizer Guide' : lang === 'te' ? 'ఎరువుల మార్గదర్శి' : 'उर्वरक गाइड'}
        </button>
      </div>

      {activeAdvisoryTab === 'advisories' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {advisories.map(adv => (
            <div key={adv.id} className="card" style={{ padding: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="badge badge-warning" style={{ textTransform: 'capitalize', fontSize: '0.6rem' }}>{adv.category}</span>
                <span style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>{adv.date}</span>
              </div>
              <h4 style={{ fontSize: '0.8rem', marginTop: '6px', color: 'hsl(var(--primary))' }}>{getTxt(adv.title)}</h4>
              <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', lineHeight: 1.3 }}>{getTxt(adv.content)}</p>
            </div>
          ))}
        </div>
      )}

      {activeAdvisoryTab === 'commercial' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {commercialCrops.map(crop => (
            <div key={crop.id} className="card" style={{ padding: '12px' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(crop.name)}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem', marginTop: '8px', borderTop: '1px dashed var(--glass-border)', paddingTop: '6px' }}>
                <div><strong>Soil Type:</strong> {getTxt(crop.soilType)}</div>
                <div><strong>Water Requirement:</strong> {getTxt(crop.waterRequirement)}</div>
                <div><strong>Duration:</strong> {getTxt(crop.duration)}</div>
                <div><strong>Expected Yield:</strong> {getTxt(crop.yield)}</div>
                <div><strong>Market Price:</strong> <span style={{ color: 'hsl(var(--secondary))', fontWeight: 800 }}>{getTxt(crop.marketPrice)}</span></div>
                <div><strong>Market Demand:</strong> {getTxt(crop.demand)}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeAdvisoryTab === 'fertilizer' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {fertilizerRecommendations.map(fer => (
            <div key={fer.id} className="card" style={{ padding: '12px' }}>
              <h4 style={{ fontSize: '0.82rem', color: 'hsl(var(--primary))' }}>{getTxt(fer.crop)}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem', marginTop: '6px', borderTop: '1px dashed var(--glass-border)', paddingTop: '6px' }}>
                <div><strong>Recommended Fertilizer:</strong> {getTxt(fer.fertilizer)}</div>
                <div><strong>Recommended Dosage:</strong> {getTxt(fer.dosage)}</div>
                <div><strong>Application Stage / Instructions:</strong>
                  <p style={{ margin: '2px 0 0 0', fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.3 }}>{getTxt(fer.stage)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
