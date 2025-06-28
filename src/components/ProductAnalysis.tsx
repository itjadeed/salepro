import React, { useState } from 'react';
import { BarChart, Calendar, DollarSign, TrendingUp, Users, Target } from 'lucide-react';

const ProductAnalysis: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState('1');
  const [analysisData, setAnalysisData] = useState({
    monthlySalesData: [
      { month: 'Jan', sales: 45, revenue: 13455, units: 45 },
      { month: 'Feb', sales: 52, revenue: 15548, units: 52 },
      { month: 'Mar', sales: 38, revenue: 11362, units: 38 },
      { month: 'Apr', sales: 61, revenue: 18239, units: 61 },
      { month: 'May', sales: 44, revenue: 13156, units: 44 },
      { month: 'Jun', sales: 58, revenue: 17342, units: 58 },
    ],
    budgetBreakdown: {
      socialMedia: 40,
      googleAds: 35,
      emailMarketing: 15,
      influencers: 10,
    },
    marketingChannels: [
      { name: 'Facebook Ads', spend: 1000, conversions: 25, roi: 2.5 },
      { name: 'Google Ads', spend: 875, conversions: 18, roi: 2.1 },
      { name: 'Instagram', spend: 375, conversions: 8, roi: 1.8 },
      { name: 'Email Marketing', spend: 250, conversions: 12, roi: 4.2 },
    ],
    competitorPricing: {
      competitor1: 279,
      competitor2: 319,
      competitor3: 295,
      marketAverage: 298,
    }
  });

  const [formData, setFormData] = useState({
    targetAudience: '',
    customerDemographics: '',
    seasonalFactors: '',
    competitorAnalysis: '',
    uniqueSellingPoints: '',
    customerFeedback: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Analysis</h1>
        <p className="mt-2 text-gray-600">Deep dive into your product performance and market positioning</p>
      </div>

      {/* Product Selection */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Product for Analysis</h2>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="1">Premium Wireless Headphones</option>
          <option value="2">Organic Skincare Set</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <BarChart className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Sales Performance</h3>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-xl font-bold text-blue-600">58</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Last Month</p>
                <p className="text-xl font-bold text-green-600">44</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600">Growth</p>
                <p className="text-xl font-bold text-orange-600">+31.8%</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">6-Month Sales Trend</h4>
              <div className="space-y-2">
                {analysisData.monthlySalesData.map((month, index) => (
                  <div key={month.month} className="flex items-center">
                    <span className="text-sm text-gray-600 w-8">{month.month}</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(month.sales / 70) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12">{month.sales}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Channel Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Marketing Channels</h3>
          </div>
          
          <div className="space-y-4">
            {analysisData.marketingChannels.map((channel, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">{channel.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    channel.roi >= 3 ? 'bg-green-100 text-green-800' :
                    channel.roi >= 2 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    ROI: {channel.roi}x
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Spend</p>
                    <p className="font-medium">${channel.spend}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Conversions</p>
                    <p className="font-medium">{channel.conversions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Analysis */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <DollarSign className="w-5 h-5 text-purple-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Budget Breakdown</h3>
          </div>
          
          <div className="space-y-4">
            <div className="text-center mb-6">
              <p className="text-3xl font-bold text-gray-900">$2,500</p>
              <p className="text-gray-600">Monthly Marketing Budget</p>
            </div>
            
            {Object.entries(analysisData.budgetBreakdown).map(([channel, percentage]) => (
              <div key={channel} className="flex items-center">
                <span className="text-sm text-gray-600 w-24 capitalize">{channel.replace(/([A-Z])/g, ' $1').trim()}</span>
                <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-12">{percentage}%</span>
                <span className="text-sm text-gray-600 w-16">${(2500 * percentage / 100).toFixed(0)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Analysis */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Target className="w-5 h-5 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Competitor Pricing</h3>
          </div>
          
          <div className="space-y-4">
            <div className="text-center mb-6">
              <p className="text-3xl font-bold text-gray-900">$299</p>
              <p className="text-gray-600">Your Current Price</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Competitor A</span>
                <span className="font-medium">${analysisData.competitorPricing.competitor1}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Competitor B</span>
                <span className="font-medium">${analysisData.competitorPricing.competitor2}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Competitor C</span>
                <span className="font-medium">${analysisData.competitorPricing.competitor3}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                <span className="text-blue-700 font-medium">Market Average</span>
                <span className="font-bold text-blue-700">${analysisData.competitorPricing.marketAverage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analysis Form */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <Users className="w-5 h-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Market & Customer Analysis</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience Description</label>
            <textarea
              value={formData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your ideal customers, their demographics, interests, and buying behavior..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Customer Demographics</label>
            <textarea
              value={formData.customerDemographics}
              onChange={(e) => handleInputChange('customerDemographics', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Age range, gender, income level, location, education..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Seasonal Factors & Trends</label>
            <textarea
              value={formData.seasonalFactors}
              onChange={(e) => handleInputChange('seasonalFactors', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="How do seasons, holidays, or trends affect your sales..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Competitive Landscape</label>
            <textarea
              value={formData.competitorAnalysis}
              onChange={(e) => handleInputChange('competitorAnalysis', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Key competitors, their strengths/weaknesses, market positioning..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Unique Selling Points</label>
            <textarea
              value={formData.uniqueSellingPoints}
              onChange={(e) => handleInputChange('uniqueSellingPoints', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="What makes your product unique and valuable to customers..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Customer Feedback & Reviews</label>
            <textarea
              value={formData.customerFeedback}
              onChange={(e) => handleInputChange('customerFeedback', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Common customer feedback, review themes, satisfaction scores..."
            />
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Generate Analysis Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalysis;