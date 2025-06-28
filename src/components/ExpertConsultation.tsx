import React, { useState } from 'react';
import { Star, Clock, DollarSign, Calendar, MessageCircle, Shield, Award, Users } from 'lucide-react';
import { Expert } from '../types';

const ExpertConsultation: React.FC = () => {
  const [experts] = useState<Expert[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'E-commerce Growth Strategist',
      specialization: ['PPC Advertising', 'Conversion Optimization', 'Amazon FBA'],
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 150,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Helped 200+ brands scale from 6 to 7 figures through data-driven marketing strategies.',
      successStories: 89,
      yearsExperience: 8,
      isVerified: true,
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      title: 'Performance Marketing Expert',
      specialization: ['Facebook Ads', 'Google Ads', 'Attribution Modeling'],
      rating: 4.8,
      reviewCount: 203,
      hourlyRate: 175,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Former Google Ads specialist with expertise in multi-million dollar ad spend optimization.',
      successStories: 156,
      yearsExperience: 12,
      isVerified: true,
    },
    {
      id: '3',
      name: 'Emily Watson',
      title: 'Conversion Rate Optimization Specialist',
      specialization: ['A/B Testing', 'UX/UI Design', 'Customer Journey'],
      rating: 4.9,
      reviewCount: 98,
      hourlyRate: 125,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Specializes in increasing conversion rates by 25-300% through scientific testing methods.',
      successStories: 67,
      yearsExperience: 6,
      isVerified: true,
    },
  ]);

  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    date: '',
    time: '',
    duration: 60,
    productId: '',
    goals: '',
    specificQuestions: '',
  });

  const handleBookConsultation = () => {
    // Handle booking logic here
    console.log('Booking consultation:', { expert: selectedExpert, form: bookingForm });
    setShowBooking(false);
    setSelectedExpert(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Expert Consultation</h1>
        <p className="mt-2 text-gray-600">Connect with verified e-commerce experts to boost your sales</p>
      </div>

      {/* Expert Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <div key={expert.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
            {/* Expert Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
                    {expert.isVerified && (
                      <Shield className="w-4 h-4 text-blue-500 ml-2" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{expert.title}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(expert.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-900">{expert.rating}</span>
                  <span className="ml-1 text-sm text-gray-600">({expert.reviewCount} reviews)</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">{expert.bio}</p>
              
              {/* Specializations */}
              <div className="flex flex-wrap gap-2 mb-4">
                {expert.specialization.map((spec, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Expert Stats */}
            <div className="p-6 border-b border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">{expert.successStories}</p>
                  <p className="text-xs text-gray-600">Success Stories</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">{expert.yearsExperience}</p>
                  <p className="text-xs text-gray-600">Years Experience</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">${expert.hourlyRate}</p>
                  <p className="text-xs text-gray-600">Per Hour</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6">
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setSelectedExpert(expert);
                    setShowBooking(true);
                  }}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Book Consultation
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Consultations */}
      <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Consultations</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2"
                alt="Sarah Chen"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Sarah Chen</h4>
                    <p className="text-sm text-gray-600">Premium Wireless Headphones - Marketing Strategy</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Completed</p>
                    <p className="text-sm text-gray-600">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <img
                src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2"
                alt="Marcus Rodriguez"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Marcus Rodriguez</h4>
                    <p className="text-sm text-gray-600">Organic Skincare Set - PPC Optimization</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">Scheduled</p>
                    <p className="text-sm text-gray-600">Tomorrow 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && selectedExpert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Book Consultation with {selectedExpert.name}
              </h3>
            </div>
            
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={bookingForm.duration}
                    onChange={(e) => setBookingForm({ ...bookingForm, duration: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={90}>1.5 hours</option>
                    <option value={120}>2 hours</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product to Discuss
                  </label>
                  <select
                    value={bookingForm.productId}
                    onChange={(e) => setBookingForm({ ...bookingForm, productId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select product</option>
                    <option value="1">Premium Wireless Headphones</option>
                    <option value="2">Organic Skincare Set</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Consultation Goals
                </label>
                <textarea
                  value={bookingForm.goals}
                  onChange={(e) => setBookingForm({ ...bookingForm, goals: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What do you hope to achieve from this consultation?"
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specific Questions
                </label>
                <textarea
                  value={bookingForm.specificQuestions}
                  onChange={(e) => setBookingForm({ ...bookingForm, specificQuestions: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any specific questions or challenges you'd like to discuss?"
                />
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Total Cost:</span>
                  <span className="text-lg font-bold text-gray-900">
                    ${(selectedExpert.hourlyRate * (bookingForm.duration / 60)).toFixed(0)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowBooking(false);
                  setSelectedExpert(null);
                }}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleBookConsultation}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertConsultation;