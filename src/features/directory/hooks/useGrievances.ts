import { useState } from 'react';

export const useGrievances = () => {
  const [grievances, setGrievances] = useState<any[]>([
    {
      id: "grv-1",
      name: "Prasanna Kumar",
      phone: "+91 9059123456",
      type: "water",
      desc: "Water pressure is very low near the high school lane since 2 days.",
      status: "In Progress",
      date: "2026-06-10"
    }
  ]);

  const [grievanceForm, setGrievanceForm] = useState({ name: '', phone: '', type: 'water', desc: '' });
  const [showGrievanceSuccess, setShowGrievanceSuccess] = useState(false);

  const handleGrievanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!grievanceForm.name || !grievanceForm.phone || !grievanceForm.desc) return;
    
    const newGrievance = {
      id: `grv-${Date.now()}`,
      name: grievanceForm.name,
      phone: grievanceForm.phone,
      type: grievanceForm.type,
      desc: grievanceForm.desc,
      status: "Submitted",
      date: new Date().toISOString().split('T')[0]
    };

    setGrievances([newGrievance, ...grievances]);
    setGrievanceForm({ name: '', phone: '', type: 'water', desc: '' });
    setShowGrievanceSuccess(true);
    setTimeout(() => setShowGrievanceSuccess(false), 5000);
  };

  return {
    grievances,
    grievanceForm,
    setGrievanceForm,
    showGrievanceSuccess,
    handleGrievanceSubmit
  };
};
