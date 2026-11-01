/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { PricingCalculatorPage } from './pages/PricingCalculatorPage';
import { BookTourPage } from './pages/BookTourPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ContactPage } from './pages/ContactPage';
import { SavedWorkspacesPage } from './pages/SavedWorkspacesPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on hash route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans selection:bg-amber-100 selection:text-amber-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:slug" element={<LocationDetailPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="/calculator" element={<PricingCalculatorPage />} />
            <Route path="/pricing" element={<PricingCalculatorPage />} />
            <Route path="/quote" element={<PricingCalculatorPage />} />
            <Route path="/book-tour" element={<BookTourPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/saved" element={<SavedWorkspacesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
