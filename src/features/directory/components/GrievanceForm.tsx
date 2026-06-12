import { useLanguage } from '../../../core/context/LanguageContext';
import { useGrievances } from '../hooks/useGrievances';

export const GrievanceForm = () => {
  const { t } = useLanguage();
  const {
    grievances,
    grievanceForm,
    setGrievanceForm,
    showGrievanceSuccess,
    handleGrievanceSubmit
  } = useGrievances();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="card">
        <h4 style={{ fontSize: '0.8rem' }}>{t.reportIssue}</h4>
        <form onSubmit={handleGrievanceSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
          <div className="form-group">
            <label className="form-label">{t.issueName}</label>
            <input
              type="text"
              className="form-input"
              value={grievanceForm.name}
              onChange={(e) => setGrievanceForm({ ...grievanceForm, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t.issuePhone}</label>
            <input
              type="tel"
              className="form-input"
              value={grievanceForm.phone}
              onChange={(e) => setGrievanceForm({ ...grievanceForm, phone: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t.issueType}</label>
            <select
              className="form-input"
              value={grievanceForm.type}
              onChange={(e) => setGrievanceForm({ ...grievanceForm, type: e.target.value })}
              aria-label="Grievance Issue Type Select"
            >
              <option value="water">{t.water}</option>
              <option value="streetlights">{t.streetlights}</option>
              <option value="roads">{t.roads}</option>
              <option value="power">{t.power}</option>
              <option value="others">{t.others}</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">{t.issueDesc}</label>
            <textarea
              className="form-input"
              rows={2}
              value={grievanceForm.desc}
              onChange={(e) => setGrievanceForm({ ...grievanceForm, desc: e.target.value })}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">{t.submitIssue}</button>
        </form>
        {showGrievanceSuccess && (
          <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '6px', fontSize: '0.7rem' }}>
            {t.issueSuccess}
          </div>
        )}
      </div>

      <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'hsl(var(--muted-foreground))' }}>Active Grievance Tracking</h4>
      {grievances.map(g => (
        <div key={g.id} style={{ padding: '10px', backgroundColor: 'hsl(var(--card))', border: '1px solid var(--card-border)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem' }}>
          <div>
            <strong>{g.desc.substring(0, 30)}...</strong>
            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>{g.date} | Type: {g.type}</div>
          </div>
          <span className={`badge ${g.status === 'Submitted' ? 'badge-info' : 'badge-success'}`}>{g.status}</span>
        </div>
      ))}
    </div>
  );
};
