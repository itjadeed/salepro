import React, { useState } from 'react';
import { Plus, TrendingUp, TrendingDown, DollarSign, Target, Upload, Edit3, Zap, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      description: 'High-quality noise-canceling headphones',
      category: 'Electronics',
      currentPrice: 299,
      targetPrice: 249,
      monthlySales: 45,
      targetSales: 100,
      marketingSpend: 2500,
      profitMargin: 35,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'Organic Skincare Set',
      description: 'Natural skincare products bundle',
      category: 'Beauty',
      currentPrice: 89,
      targetPrice: 79,
      monthlySales: 23,
      targetSales: 60,
      marketingSpend: 1200,
      profitMargin: 60,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    category: '',
    currentPrice: 0,
    targetPrice: 0,
    monthlySales: 0,
    targetSales: 0,
    marketingSpend: 0,
    profitMargin: 0,
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.currentPrice) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name || '',
        description: newProduct.description || '',
        category: newProduct.category || '',
        currentPrice: newProduct.currentPrice || 0,
        targetPrice: newProduct.targetPrice || 0,
        monthlySales: newProduct.monthlySales || 0,
        targetSales: newProduct.targetSales || 0,
        marketingSpend: newProduct.marketingSpend || 0,
        profitMargin: newProduct.profitMargin || 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setProducts([...products, product]);
      setNewProduct({
        name: '',
        description: '',
        category: '',
        currentPrice: 0,
        targetPrice: 0,
        monthlySales: 0,
        targetSales: 0,
        marketingSpend: 0,
        profitMargin: 0,
      });
      setShowAddProduct(false);
    }
  };

  const totalRevenue = products.reduce((sum, product) => sum + (product.monthlySales * product.currentPrice), 0);
  const totalMarketingSpend = products.reduce((sum, product) => sum + product.marketingSpend, 0);
  const averageMargin = products.reduce((sum, product) => sum + product.profitMargin, 0) / products.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">Monitor your product performance and track key metrics with real-time insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2">Monthly Revenue</p>
              <p className="text-3xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
              <div className="mt-3 flex items-center text-sm">
                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600 font-medium">+12.5%</span>
                <span className="text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2">Marketing Spend</p>
              <p className="text-3xl font-bold text-gray-900">${totalMarketingSpend.toLocaleString()}</p>
              <div className="mt-3 flex items-center text-sm">
                <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                <span className="text-red-600 font-medium">-5.2%</span>
                <span className="text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2">Avg. Profit Margin</p>
              <p className="text-3xl font-bold text-gray-900">{averageMargin.toFixed(1)}%</p>
              <div className="mt-3 flex items-center text-sm">
                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600 font-medium">+8.1%</span>
                <span className="text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2">Active Products</p>
              <p className="text-3xl font-bold text-gray-900">{products.length}</p>
              <div className="mt-3 flex items-center text-sm">
                <span className="text-gray-600">Ready for optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200/50 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Products</h2>
              <p className="text-gray-600 mt-1">Manage and optimize your product portfolio</p>
            </div>
            <button
              onClick={() => setShowAddProduct(true)}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Add Product
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Current Sales</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Target Sales</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {products.map((product) => {
                  const performance = (product.monthlySales / product.targetSales) * 100;
                  const revenue = product.monthlySales * product.currentPrice;
                  
                  return (
                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-lg">{product.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-500">{product.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">{product.monthlySales}</div>
                        <div className="text-xs text-gray-500">units this month</div>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">{product.targetSales}</div>
                        <div className="text-xs text-gray-500">target goal</div>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                            <div
                              className={`h-2 rounded-full transition-all duration-500 ${
                                performance >= 100 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                performance >= 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                                'bg-gradient-to-r from-red-500 to-pink-500'
                              }`}
                              style={{ width: `${Math.min(performance, 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{performance.toFixed(1)}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">${revenue.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">monthly revenue</div>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Product Modal */}
        {showAddProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="px-8 py-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Add New Product</h3>
                <p className="text-gray-600 mt-1">Enter your product details to start optimization</p>
              </div>
              
              <div className="px-8 py-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter product name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <select
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Home">Home</option>
                      <option value="Sports">Sports</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter product description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Price ($)</label>
                    <input
                      type="number"
                      value={newProduct.currentPrice}
                      onChange={(e) => setNewProduct({ ...newProduct, currentPrice: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Target Price ($)</label>
                    <input
                      type="number"
                      value={newProduct.targetPrice}
                      onChange={(e) => setNewProduct({ ...newProduct, targetPrice: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Sales</label>
                    <input
                      type="number"
                      value={newProduct.monthlySales}
                      onChange={(e) => setNewProduct({ ...newProduct, monthlySales: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Target Sales</label>
                    <input
                      type="number"
                      value={newProduct.targetSales}
                      onChange={(e) => setNewProduct({ ...newProduct, targetSales: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Marketing Spend ($)</label>
                    <input
                      type="number"
                      value={newProduct.marketingSpend}
                      onChange={(e) => setNewProduct({ ...newProduct, marketingSpend: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Profit Margin (%)</label>
                    <input
                      type="number"
                      value={newProduct.profitMargin}
                      onChange={(e) => setNewProduct({ ...newProduct, profitMargin: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-6 border-t border-gray-200 flex justify-end space-x-4">
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="px-6 py-3 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProduct}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;