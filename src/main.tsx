import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './core/context/LanguageContext'
import { ThemeProvider } from './core/context/ThemeContext'
import { DomainDataProvider } from './core/context/DomainDataContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <DomainDataProvider>
          <App />
        </DomainDataProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
