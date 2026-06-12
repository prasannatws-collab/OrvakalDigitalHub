import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../../types';
import { translations } from '../../data/mockData';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
  getTxt: (textObj: any) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (translations[lang] || translations.en) as typeof translations.en;

  const getTxt = (textObj: any) => {
    if (!textObj) return '';
    return textObj[lang] || textObj['en'] || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getTxt }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
