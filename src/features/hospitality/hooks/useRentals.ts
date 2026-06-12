import { useState } from 'react';
import type { FormEvent } from 'react';
import { useDomainData } from '../../../core/context/DomainDataContext';
import { useLanguage } from '../../../core/context/LanguageContext';
import type { RentalProperty } from '../../../types';

export const useRentals = () => {
  const { localRentals, setLocalRentals } = useDomainData();
  const { t } = useLanguage();
  const [rentalFormOpen, setRentalFormOpen] = useState(false);
  const [newRental, setNewRental] = useState({ type: 'house', rent: '', deposit: '', contactName: '', phone: '', details: '', location: '' });

  const handlePostRental = (e: FormEvent) => {
    e.preventDefault();
    if (!newRental.contactName || !newRental.rent || !newRental.phone) return;

    const rentalItem: RentalProperty = {
      id: `rnt-${Date.now()}`,
      type: newRental.type as any,
      rent: parseInt(newRental.rent) || 0,
      deposit: parseInt(newRental.deposit) || 0,
      contactName: { en: newRental.contactName, te: newRental.contactName, hi: newRental.contactName },
      phone: newRental.phone,
      details: { en: newRental.details || 'Contact for details', te: newRental.details || 'వివరాల కోసం సంప్రదించండి', hi: newRental.details || 'विवरण के लिए संपर्क करें' },
      location: { en: newRental.location || 'Orvakal', te: newRental.location || 'ఓర్వకల్లు', hi: newRental.location || 'ओरवाकल' },
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80"
    };

    setLocalRentals([rentalItem, ...localRentals]);
    setNewRental({ type: 'house', rent: '', deposit: '', contactName: '', phone: '', details: '', location: '' });
    setRentalFormOpen(false);
    alert(t.registerSuccess);
  };

  return {
    localRentals,
    rentalFormOpen,
    setRentalFormOpen,
    newRental,
    setNewRental,
    handlePostRental
  };
};
