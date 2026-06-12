import { useState } from 'react';
import type { FormEvent } from 'react';
import { useDomainData } from '../../../core/context/DomainDataContext';
import { useLanguage } from '../../../core/context/LanguageContext';
import type { JobPost } from '../../../types';

export const useJobs = () => {
  const { localJobs, setLocalJobs } = useDomainData();
  const { t } = useLanguage();
  const [jobFormOpen, setJobFormOpen] = useState(false);
  const [newJob, setNewJob] = useState({ title: '', company: '', type: 'full-time', salary: '', requirements: '', desc: '', phone: '' });

  const handlePostJob = (e: FormEvent) => {
    e.preventDefault();
    if (!newJob.title || !newJob.company || !newJob.phone) return;

    const jobItem: JobPost = {
      id: `job-${Date.now()}`,
      title: { en: newJob.title, te: newJob.title, hi: newJob.title },
      company: { en: newJob.company, te: newJob.company, hi: newJob.company },
      type: newJob.type as any,
      salary: { en: newJob.salary || 'Negotiable', te: newJob.salary || 'చర్చించబడుతుంది', hi: newJob.salary || 'बातचीत के अनुसार' },
      requirements: { en: newJob.requirements || 'N/A', te: newJob.requirements || 'సమాచారం లేదు', hi: newJob.requirements || 'उपलब्ध नहीं' },
      description: { en: newJob.desc || 'N/A', te: newJob.desc || 'సమాచారం లేదు', hi: newJob.desc || 'उपलब्ध नहीं' },
      phone: newJob.phone,
      postedDate: new Date().toISOString().split('T')[0]
    };

    setLocalJobs([jobItem, ...localJobs]);
    setNewJob({ title: '', company: '', type: 'full-time', salary: '', requirements: '', desc: '', phone: '' });
    setJobFormOpen(false);
    alert(t.registerSuccess);
  };

  return {
    localJobs,
    jobFormOpen,
    setJobFormOpen,
    newJob,
    setNewJob,
    handlePostJob
  };
};
