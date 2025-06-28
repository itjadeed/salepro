import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import ProductAnalysis from './components/ProductAnalysis';
import ExpertConsultation from './components/ExpertConsultation';
import Recommendations from './components/Recommendations';
import Analytics from './components/Analytics';

function App() {
  const [activeSection, setActiveSection] = useState('homepage');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'homepage':
        return <Homepage />;
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
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {activeSection !== 'homepage' && (
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      )}
      <main>
        {renderActiveSection()}
      </main>
      
      {/* Homepage Navigation Overlay */}
      {activeSection === 'homepage' && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SalesRescue
                </h1>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                <button 
                  onClick={() => setActiveSection('dashboard')}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;