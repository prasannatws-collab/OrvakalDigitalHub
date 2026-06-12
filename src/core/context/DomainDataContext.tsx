import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { JobPost, Labour, RentalProperty } from '../../types';
import { jobs as initialJobs, labourRegistry as initialLabour, rentals as initialRentals } from '../../features/jobs/data/jobsData';

interface DomainDataContextProps {
  localJobs: JobPost[];
  setLocalJobs: React.Dispatch<React.SetStateAction<JobPost[]>>;
  localLabour: Labour[];
  setLocalLabour: React.Dispatch<React.SetStateAction<Labour[]>>;
  localRentals: RentalProperty[];
  setLocalRentals: React.Dispatch<React.SetStateAction<RentalProperty[]>>;
}

const DomainDataContext = createContext<DomainDataContextProps | undefined>(undefined);

export const DomainDataProvider = ({ children }: { children: ReactNode }) => {
  const [localJobs, setLocalJobs] = useState<JobPost[]>(initialJobs);
  const [localLabour, setLocalLabour] = useState<Labour[]>(initialLabour);
  const [localRentals, setLocalRentals] = useState<RentalProperty[]>(initialRentals);

  return (
    <DomainDataContext.Provider value={{
      localJobs,
      setLocalJobs,
      localLabour,
      setLocalLabour,
      localRentals,
      setLocalRentals
    }}>
      {children}
    </DomainDataContext.Provider>
  );
};

export const useDomainData = () => {
  const context = useContext(DomainDataContext);
  if (!context) {
    throw new Error('useDomainData must be used within a DomainDataProvider');
  }
  return context;
};
