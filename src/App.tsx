import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import ProductAnalysis from './components/ProductAnalysis';
import ExpertConsultation from './components/ExpertConsultation';
import Recommendations from './components/Recommendations';
import Analytics from './components/Analytics';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'analysis':
        return <ProductAnalysis />;
      case 'experts':
        return <ExpertConsultation />;
      case 'recommendations':
        return <Recommendations />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;