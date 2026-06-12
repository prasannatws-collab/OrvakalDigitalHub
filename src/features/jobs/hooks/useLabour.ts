import { useState } from 'react';
import type { FormEvent } from 'react';
import { useDomainData } from '../../../core/context/DomainDataContext';
import { useLanguage } from '../../../core/context/LanguageContext';
import type { Labour } from '../../../types';

export const useLabour = () => {
  const { localLabour, setLocalLabour } = useDomainData();
  const { t } = useLanguage();
  const [labourFormOpen, setLabourFormOpen] = useState(false);
  const [newLabour, setNewLabour] = useState({ name: '', skill: '', rate: '', phone: '', location: '' });

  const handleRegisterLabour = (e: FormEvent) => {
    e.preventDefault();
    if (!newLabour.name || !newLabour.skill || !newLabour.phone) return;

    const labourItem: Labour = {
      id: `lab-${Date.now()}`,
      name: { en: newLabour.name, te: newLabour.name, hi: newLabour.name },
      skill: { en: newLabour.skill, te: newLabour.skill, hi: newLabour.skill },
      rate: { en: newLabour.rate || 'Negotiable', te: newLabour.rate || 'చర్చించబడుతుంది', hi: newLabour.rate || 'बातचीत के अनुसार' },
      phone: newLabour.phone,
      location: { en: newLabour.location || 'Orvakal', te: newLabour.location || 'ఓర్వకల్లు', hi: newLabour.location || 'ओरवाकल' }
    };

    setLocalLabour([labourItem, ...localLabour]);
    setNewLabour({ name: '', skill: '', rate: '', phone: '', location: '' });
    setLabourFormOpen(false);
    alert(t.registerSuccess);
  };

  return {
    localLabour,
    labourFormOpen,
    setLabourFormOpen,
    newLabour,
    setNewLabour,
    handleRegisterLabour
  };
};
