
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import TemplatesPage from './pages/TemplatesPage';
import ModulesPage from './pages/ModulesPage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import { Theme } from './types';
import { logoSrc } from './components/Logo';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme;
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = logoSrc;
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;