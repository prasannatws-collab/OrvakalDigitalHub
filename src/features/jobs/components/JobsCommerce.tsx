import { useState } from 'react';
import { Plus, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { useJobs } from '../hooks/useJobs';
import { useLabour } from '../hooks/useLabour';
import { industries } from '../data/jobsData';
import { Modal } from '../../../core/components/Modal';
import type { JobPost, IndustrialPlant } from '../../../types';

interface JobsCommerceProps {
  searchQuery: string;
  subTab: 'job' | 'labour' | 'industries';
  onSubTabChange: (subTab: 'job' | 'labour' | 'industries') => void;
}

export const JobsCommerce = ({
  searchQuery,
  subTab,
  onSubTabChange
}: JobsCommerceProps) => {
  const { t, getTxt } = useLanguage();
  const {
    localJobs,
    jobFormOpen,
    setJobFormOpen,
    newJob,
    setNewJob,
    handlePostJob
  } = useJobs();

  const {
    localLabour,
    labourFormOpen,
    setLabourFormOpen,
    newLabour,
    setNewLabour,
    handleRegisterLabour
  } = useLabour();

  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrialPlant | null>(null);

  // Filter Jobs
  const filteredJobs = localJobs.filter(j => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(j.title).toLowerCase().includes(query) ||
      getTxt(j.company).toLowerCase().includes(query) ||
      getTxt(j.requirements).toLowerCase().includes(query) ||
      getTxt(j.description).toLowerCase().includes(query)
    );
  });

  // Filter Labour
  const filteredLabour = localLabour.filter(l => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(l.name).toLowerCase().includes(query) ||
      getTxt(l.skill).toLowerCase().includes(query) ||
      getTxt(l.location).toLowerCase().includes(query)
    );
  });

  // Filter Industries
  const filteredIndustries = industries.filter(ind => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(ind.name).toLowerCase().includes(query) ||
      getTxt(ind.sector).toLowerCase().includes(query) ||
      getTxt(ind.location).toLowerCase().includes(query)
    );
  });

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* Jobs and Commerce Subtabs */}
      <div className="tabs-header">
        <button
          className={`tab-pill ${subTab === 'job' ? 'active' : ''}`}
          onClick={() => onSubTabChange('job')}
        >
          {t.jobBoard || "Job Board"}
        </button>
        <button
          className={`tab-pill ${subTab === 'labour' ? 'active' : ''}`}
          onClick={() => onSubTabChange('labour')}
        >
          {t.labourRegistry || "Labour Registry"}
        </button>
        <button
          className={`tab-pill ${subTab === 'industries' ? 'active' : ''}`}
          onClick={() => onSubTabChange('industries')}
        >
          {t.megaIndustries || "Mega Industries"}
        </button>
      </div>

      {/* Sub-tab A: Job board */}
      {subTab === 'job' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: 0 }}>Industrial & Contract Jobs</h4>
            <button
              className="btn btn-primary"
              style={{ padding: '4px 8px', fontSize: '0.65rem', flex: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
              onClick={() => setJobFormOpen(!jobFormOpen)}
            >
              <Plus size={10} /> {t.addJob}
            </button>
          </div>

          {jobFormOpen && (
            <div className="card" style={{ border: '1px dashed hsl(var(--primary))' }}>
              <h4 style={{ fontSize: '0.78rem', margin: '0 0 8px 0' }}>{t.addJob}</h4>
              <form onSubmit={handlePostJob} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="form-group">
                  <label className="form-label">{t.jobTitle}</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.compName}</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newJob.company}
                    onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Job Type</label>
                  <select
                    className="form-input"
                    value={newJob.type}
                    onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                    aria-label="Job Contract Type Selector"
                  >
                    <option value="full-time">Full-time Job</option>
                    <option value="contract">Contractual Work</option>
                    <option value="daily-wages">Daily Wages</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Salary Details</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newJob.salary}
                    onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Requirements</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newJob.requirements}
                    onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Job Description</label>
                  <textarea
                    className="form-input"
                    rows={2}
                    value={newJob.desc}
                    onChange={(e) => setNewJob({ ...newJob, desc: e.target.value })}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">HR Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={newJob.phone}
                    onChange={(e) => setNewJob({ ...newJob, phone: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Announce Position</button>
              </form>
            </div>
          )}

          {filteredJobs.length === 0 ? (
            <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>{t.noItems || "No jobs found matching your query."}</p>
            </div>
          ) : (
            filteredJobs.map(j => (
              <div key={j.id} className="card" style={{ padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', margin: 0 }}>{getTxt(j.title)}</h4>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, marginTop: '2px' }}>{getTxt(j.company)}</div>
                  </div>
                  <span className="badge badge-success" style={{ textTransform: 'capitalize' }}>
                    {j.type.replace('-', ' ')}
                  </span>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--secondary))', marginTop: '6px' }}>
                  {getTxt(j.salary)}
                </div>
                <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', margin: '6px 0 0 0' }}>
                  <strong>Requirements:</strong> {getTxt(j.requirements)}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>
                    {t.posted || "Posted"}: {j.postedDate}
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <a
                      href={`tel:${j.phone}`}
                      style={{ color: 'white', backgroundColor: 'hsl(var(--primary))', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.65rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Phone size={10} /> Call HR
                    </a>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '4px 8px', fontSize: '0.65rem' }}
                      onClick={() => setSelectedJob(j)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Sub-tab B: Labour Registry */}
      {subTab === 'labour' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: 0 }}>Labour Registry</h4>
            <button
              className="btn btn-primary"
              style={{ padding: '4px 8px', fontSize: '0.65rem', flex: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
              onClick={() => setLabourFormOpen(!labourFormOpen)}
            >
              <Plus size={10} /> {t.addLabour}
            </button>
          </div>

          {labourFormOpen && (
            <div className="card" style={{ border: '1px dashed hsl(var(--primary))' }}>
              <h4 style={{ fontSize: '0.78rem', margin: '0 0 8px 0' }}>{t.addLabour}</h4>
              <form onSubmit={handleRegisterLabour} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newLabour.name}
                    onChange={(e) => setNewLabour({ ...newLabour, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Trade / Skill</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newLabour.skill}
                    onChange={(e) => setNewLabour({ ...newLabour, skill: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Expected daily rate</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newLabour.rate}
                    onChange={(e) => setNewLabour({ ...newLabour, rate: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={newLabour.phone}
                    onChange={(e) => setNewLabour({ ...newLabour, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newLabour.location}
                    onChange={(e) => setNewLabour({ ...newLabour, location: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          )}

          {filteredLabour.length === 0 ? (
            <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>{t.noItems || "No workers found matching your query."}</p>
            </div>
          ) : (
            filteredLabour.map(l => (
              <div key={l.id} className="card" style={{ padding: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', margin: 0 }}>{getTxt(l.name)}</h4>
                    <span style={{ fontSize: '0.7rem', color: 'hsl(var(--primary))', fontWeight: 600, display: 'inline-block', marginTop: '2px' }}>
                      {getTxt(l.skill)}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>
                      {getTxt(l.rate)}
                    </span>
                    <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                      {getTxt(l.location)}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '6px', marginTop: '6px' }}>
                  <a
                    href={`tel:${l.phone}`}
                    style={{ color: 'white', backgroundColor: '#16a34a', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.65rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Phone size={10} /> Call Labour
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Sub-tab C: Mega Industries */}
      {subTab === 'industries' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: 0 }}>Active Mega Industries</h4>
          {filteredIndustries.length === 0 ? (
            <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>{t.noItems || "No industries found matching your query."}</p>
            </div>
          ) : (
            filteredIndustries.map(ind => (
              <div key={ind.id} className="card" style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', margin: 0 }}>{getTxt(ind.name)}</h4>
                  <span className="badge badge-success" style={{ fontSize: '0.6rem' }}>
                    {getTxt(ind.status).split(' ')[0]}
                  </span>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                  <strong>Sector:</strong> {getTxt(ind.sector)}
                </div>
                <div style={{ display: 'flex', gap: '4px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', alignItems: 'center' }}>
                  <MapPin size={12} /> <span>{getTxt(ind.location)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '8px', marginTop: '4px' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <a
                      href={`tel:${ind.hrContact}`}
                      style={{ color: 'white', backgroundColor: 'hsl(var(--primary))', padding: '4px 8px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.65rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Phone size={10} /> Call HR
                    </a>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '4px 8px', fontSize: '0.65rem' }}
                      onClick={() => setSelectedIndustry(ind)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Details Modals */}
      <Modal isOpen={selectedJob !== null} onClose={() => setSelectedJob(null)} title="Job Details">
        {selectedJob && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 style={{ fontSize: '0.9rem', margin: 0 }}>{getTxt(selectedJob.title)}</h4>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', margin: 0 }}>{getTxt(selectedJob.company)}</p>
            <div style={{ fontSize: '0.75rem', color: 'hsl(var(--secondary))', fontWeight: 800 }}>
              {getTxt(selectedJob.salary)}
            </div>
            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
              <strong>Requirements:</strong>
              <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', marginBlockEnd: 0 }}>
                {getTxt(selectedJob.requirements)}
              </p>
            </div>
            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
              <strong>Description:</strong>
              <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', marginBlockEnd: 0 }}>
                {getTxt(selectedJob.description)}
              </p>
            </div>
            <a
              href={`tel:${selectedJob.phone}`}
              className="btn btn-primary"
              style={{ textDecoration: 'none', marginTop: '10px', display: 'block', textAlign: 'center' }}
            >
              <Phone size={12} /> Contact HR Office
            </a>
          </div>
        )}
      </Modal>

      <Modal isOpen={selectedIndustry !== null} onClose={() => setSelectedIndustry(null)} title="Industrial Desk">
        {selectedIndustry && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 style={{ fontSize: '0.9rem', margin: 0 }}>{getTxt(selectedIndustry.name)}</h4>
            <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>
              <strong>Sector:</strong> {getTxt(selectedIndustry.sector)}
            </div>
            <div style={{ fontSize: '0.75rem' }}>
              <strong>Location:</strong> {getTxt(selectedIndustry.location)}
            </div>
            <div style={{ fontSize: '0.75rem' }}>
              <strong>Status:</strong> <span className="badge badge-success">{getTxt(selectedIndustry.status)}</span>
            </div>
            <a
              href={`tel:${selectedIndustry.hrContact}`}
              className="btn btn-primary"
              style={{ textDecoration: 'none', marginTop: '10px', display: 'block', textAlign: 'center' }}
            >
              <Phone size={12} /> Contact HR Office
            </a>
          </div>
        )}
      </Modal>

    </div>
  );
};
