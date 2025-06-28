import React, { useState } from 'react';
import { Lightbulb, TrendingUp, DollarSign, Target, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Recommendation } from '../types';

const Recommendations: React.FC = () => {
  const [recommendations] = useState<Recommendation[]>([
    {
      id: '1',
      productId: '1',
      expertId: '1',
      category: 'Marketing Strategy',
      title: 'Optimize Facebook Ad Targeting',
      description: 'Your current Facebook ads are targeting too broad an audience. Focus on lookalike audiences based on your existing customers and target specific interests related to audiophiles and music production.',
      priority: 'high',
      estimatedImpact: '25-40% increase in conversion rate',
      timeToImplement: '1-2 weeks',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      productId: '1',
      expertId: '1',
      category: 'Pricing Strategy',
      title: 'Implement Dynamic Pricing',
      description: 'Consider seasonal pricing adjustments and bundle offers. Your product is priced competitively but could benefit from strategic promotions during low-sales periods.',
      priority: 'medium',
      estimatedImpact: '15-25% increase in sales volume',
      timeToImplement: '2-3 weeks',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: '3',
      productId: '2',
      expertId: '2',
      category: 'Conversion Optimization',
      title: 'Enhance Product Page Content',
      description: 'Add more social proof, customer testimonials, and before/after photos. Include ingredient sourcing information and certifications to build trust with health-conscious consumers.',
      priority: 'high',
      estimatedImpact: '30-50% improvement in conversion rate',
      timeToImplement: '1 week',
      createdAt: new Date('2024-01-14'),
    },
    {
      id: '4',
      productId: '2',
      expertId: '3',
      category: 'Email Marketing',
      title: 'Develop Email Nurture Sequence',
      description: 'Create a 7-part email series focusing on skincare education, customer success stories, and product usage tips. This will help convert leads who aren\'t ready to purchase immediately.',
      priority: 'medium',
      estimatedImpact: '20-35% increase in lifetime value',
      timeToImplement: '2-4 weeks',
      createdAt: new Date('2024-01-14'),
    },
    {
      id: '5',
      productId: '1',
      expertId: '2',
      category: 'Budget Optimization',
      title: 'Reallocate Ad Spend',
      description: 'Move 30% of your Google Ads budget to TikTok and Instagram Reels advertising. Your target demographic is increasingly active on these platforms, and CPMs are currently lower.',
      priority: 'high',
      estimatedImpact: '40-60% improvement in ROAS',
      timeToImplement: '1 week',
      createdAt: new Date('2024-01-13'),
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const categories = ['all', 'Marketing Strategy', 'Pricing Strategy', 'Conversion Optimization', 'Email Marketing', 'Budget Optimization'];
  const priorities = ['all', 'high', 'medium', 'low'];

  const filteredRecommendations = recommendations.filter(rec => {
    const categoryMatch = selectedCategory === 'all' || rec.category === selectedCategory;
    const priorityMatch = selectedPriority === 'all' || rec.priority === selectedPriority;
    return categoryMatch && priorityMatch;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Marketing Strategy': return TrendingUp;
      case 'Pricing Strategy': return DollarSign;
      case 'Conversion Optimization': return Target;
      case 'Email Marketing': return CheckCircle;
      case 'Budget Optimization': return AlertCircle;
      default: return Lightbulb;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Expert Recommendations</h1>
        <p className="mt-2 text-gray-600">Actionable insights from verified e-commerce experts</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Priority</label>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {priorities.map(priority => (
                <option key={priority} value={priority}>
                  {priority === 'all' ? 'All Priorities' : priority.charAt(0).toUpperCase() + priority.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredRecommendations.map((recommendation) => {
          const CategoryIcon = getCategoryIcon(recommendation.category);
          
          return (
            <div key={recommendation.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <CategoryIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{recommendation.title}</h3>
                      <p className="text-sm text-gray-600">{recommendation.category}</p>
                    </div>
                  </div>
                  
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(recommendation.priority)}`}>
                    {recommendation.priority.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{recommendation.description}</p>
              </div>

              {/* Metrics */}
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Estimated Impact</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">{recommendation.estimatedImpact}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Time to Implement</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">{recommendation.timeToImplement}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Recommended {recommendation.createdAt.toLocaleDateString()}
                  </span>
                  
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      Ask Follow-up
                    </button>
                    <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Mark as Implemented
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Implementation Tracker */}
      <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Implementation Tracker</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">5</div>
              <div className="text-sm text-gray-600">Total Recommendations</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">2</div>
              <div className="text-sm text-gray-600">Implemented</div>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm text-gray-600">40%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;