import React from 'react';
import { BarChart3, Users, MessageCircle, TrendingUp, Settings, User, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'analysis', label: 'Product Analysis', icon: TrendingUp },
    { id: 'experts', label: 'Expert Consultation', icon: Users },
    { id: 'recommendations', label: 'Recommendations', icon: MessageCircle },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SalesRescue
              </h1>
            </div>
            <div className="hidden md:block ml-12">
              <div className="flex items-baseline space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSectionChange(item.id)}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-200">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-200">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-xl">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                }`}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;