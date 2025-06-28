import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Target, Calendar, BarChart3 } from 'lucide-react';

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedProduct, setSelectedProduct] = useState('all');

  const periods = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' },
  ];

  const products = [
    { value: 'all', label: 'All Products' },
    { value: '1', label: 'Premium Wireless Headphones' },
    { value: '2', label: 'Organic Skincare Set' },
  ];

  // Mock data
  const kpiData = {
    totalRevenue: 45280,
    revenueChange: 12.5,
    totalOrders: 156,
    ordersChange: -5.2,
    averageOrderValue: 290.51,
    aovChange: 18.7,
    conversionRate: 3.4,
    conversionChange: 8.1,
  };

  const salesTrendData = [
    { month: 'Jan', sales: 32000, orders: 110 },
    { month: 'Feb', sales: 35000, orders: 121 },
    { month: 'Mar', sales: 28000, orders: 95 },
    { month: 'Apr', sales: 42000, orders: 145 },
    { month: 'May', sales: 38000, orders: 131 },
    { month: 'Jun', sales: 45280, orders: 156 },
  ];

  const channelPerformance = [
    { channel: 'Organic Search', revenue: 18500, percentage: 40.8, change: 15.2 },
    { channel: 'Facebook Ads', revenue: 12800, percentage: 28.3, change: -8.5 },
    { channel: 'Google Ads', revenue: 8200, percentage: 18.1, change: 22.1 },
    { channel: 'Email Marketing', revenue: 3900, percentage: 8.6, change: 35.7 },
    { channel: 'Direct Traffic', revenue: 1880, percentage: 4.2, change: -12.3 },
  ];

  const productPerformance = [
    { 
      name: 'Premium Wireless Headphones', 
      revenue: 31200, 
      units: 104, 
      conversionRate: 4.2,
      trend: 'up'
    },
    { 
      name: 'Organic Skincare Set', 
      revenue: 14080, 
      units: 158, 
      conversionRate: 2.8, 
      trend: 'down'
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="mt-2 text-gray-600">Track your sales performance and marketing effectiveness</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {periods.map(period => (
                <option key={period.value} value={period.value}>{period.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Filter</label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {products.map(product => (
                <option key={product.value} value={product.value}>{product.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(kpiData.totalRevenue)}</p>
            </div>
            <div className={`p-3 rounded-full ${kpiData.revenueChange > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
              <DollarSign className={`w-6 h-6 ${kpiData.revenueChange > 0 ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {kpiData.revenueChange > 0 ? (
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
            )}
            <span className={`text-sm font-medium ${kpiData.revenueChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatPercentage(kpiData.revenueChange)}
            </span>
            <span className="text-sm text-gray-600 ml-2">vs last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{kpiData.totalOrders}</p>
            </div>
            <div className={`p-3 rounded-full ${kpiData.ordersChange > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
              <ShoppingCart className={`w-6 h-6 ${kpiData.ordersChange > 0 ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {kpiData.ordersChange > 0 ? (
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
            )}
            <span className={`text-sm font-medium ${kpiData.ordersChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatPercentage(kpiData.ordersChange)}
            </span>
            <span className="text-sm text-gray-600 ml-2">vs last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Order Value</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(kpiData.averageOrderValue)}</p>
            </div>
            <div className={`p-3 rounded-full ${kpiData.aovChange > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
              <Target className={`w-6 h-6 ${kpiData.aovChange > 0 ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {kpiData.aovChange > 0 ? (
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
            )}
            <span className={`text-sm font-medium ${kpiData.aovChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatPercentage(kpiData.aovChange)}
            </span>
            <span className="text-sm text-gray-600 ml-2">vs last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{kpiData.conversionRate}%</p>
            </div>
            <div className={`p-3 rounded-full ${kpiData.conversionChange > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
              <Users className={`w-6 h-6 ${kpiData.conversionChange > 0 ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {kpiData.conversionChange > 0 ? (
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
            )}
            <span className={`text-sm font-medium ${kpiData.conversionChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatPercentage(kpiData.conversionChange)}
            </span>
            <span className="text-sm text-gray-600 ml-2">vs last period</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Trend Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Sales Trend</h3>
          </div>
          
          <div className="space-y-4">
            {salesTrendData.map((month, index) => (
              <div key={month.month} className="flex items-center">
                <span className="text-sm text-gray-600 w-8">{month.month}</span>
                <div className="flex-1 mx-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      {formatCurrency(month.sales)}
                    </span>
                    <span className="text-sm text-gray-600">{month.orders} orders</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(month.sales / 50000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Channel Performance</h3>
          </div>
          
          <div className="space-y-4">
            {channelPerformance.map((channel, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{channel.channel}</h4>
                  <div className="flex items-center">
                    {channel.change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${channel.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatPercentage(channel.change)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {formatCurrency(channel.revenue)}
                  </span>
                  <span className="text-sm text-gray-600">{channel.percentage}%</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${channel.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Product Performance</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units Sold</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productPerformance.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(product.revenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.units}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.conversionRate}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.trend === 'up' ? (
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;