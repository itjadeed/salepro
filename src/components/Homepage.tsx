import React, { useState } from 'react';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  Shield, 
  CheckCircle, 
  Play,
  Quote,
  Mail,
  Lock,
  Zap,
  Target,
  BarChart3,
  Crown,
  Trophy,
  Medal
} from 'lucide-react';

const Homepage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const successStories = [
    {
      company: "TechFlow Solutions",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
      metrics: {
        revenue: "+340%",
        conversion: "+125%",
        roas: "4.8x"
      },
      challenge: "Struggling with low conversion rates and high customer acquisition costs",
      solution: "Implemented AI-driven pricing optimization and targeted marketing campaigns",
      quote: "SalesRescue transformed our entire sales strategy. We went from barely breaking even to our most profitable quarter ever.",
      client: {
        name: "Sarah Chen",
        position: "VP of Marketing",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
      }
    },
    {
      company: "EcoBeauty Co.",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
      metrics: {
        revenue: "+280%",
        conversion: "+95%",
        roas: "3.2x"
      },
      challenge: "Seasonal sales fluctuations and ineffective ad spend allocation",
      solution: "Developed dynamic pricing strategy and optimized multi-channel marketing approach",
      quote: "The expert consultation was a game-changer. Our revenue increased by 280% in just 6 months.",
      client: {
        name: "Marcus Rodriguez",
        position: "Founder & CEO",
        image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
      }
    },
    {
      company: "FitGear Pro",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
      metrics: {
        revenue: "+420%",
        conversion: "+180%",
        roas: "5.1x"
      },
      challenge: "High competition and declining market share in fitness equipment",
      solution: "Repositioned brand with premium pricing and influencer partnerships",
      quote: "SalesRescue didn't just improve our sales - they revolutionized our entire business model.",
      client: {
        name: "Emily Watson",
        position: "Head of Sales",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
      }
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      position: "E-commerce Director",
      company: "RetailMax",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      quote: "The ROI we've seen from SalesRescue is incredible. Our conversion rates improved by 150% in the first quarter alone.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Manager",
      company: "GrowthCorp",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      quote: "Finally, a platform that actually delivers on its promises. The expert insights are worth their weight in gold.",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "Founder",
      company: "StartupSuccess",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      quote: "SalesRescue helped us scale from $10K to $100K monthly revenue. The strategic guidance is unmatched.",
      rating: 5
    }
  ];

  const topPerformers = [
    {
      rank: 1,
      name: "Alex Chen",
      title: "E-commerce Strategist",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      metrics: {
        clientsHelped: 89,
        avgIncrease: "340%",
        successRate: "98%"
      },
      badge: "Diamond Expert",
      specialties: ["PPC Optimization", "Conversion Rate", "Analytics"]
    },
    {
      rank: 2,
      name: "Sarah Martinez",
      title: "Growth Marketing Expert",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      metrics: {
        clientsHelped: 76,
        avgIncrease: "285%",
        successRate: "96%"
      },
      badge: "Platinum Expert",
      specialties: ["Social Media", "Brand Strategy", "Customer Acquisition"]
    },
    {
      rank: 3,
      name: "Michael Johnson",
      title: "Revenue Optimization Specialist",
      avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
      metrics: {
        clientsHelped: 64,
        avgIncrease: "260%",
        successRate: "94%"
      },
      badge: "Gold Expert",
      specialties: ["Pricing Strategy", "Market Analysis", "ROI Optimization"]
    }
  ];

  const integrationPartners = [
    { name: "Shopify", logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" },
    { name: "Google Analytics", logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" },
    { name: "Facebook Ads", logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" },
    { name: "Mailchimp", logo: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" },
    { name: "Stripe", logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" },
    { name: "HubSpot", logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                <Zap className="w-4 h-4 mr-2" />
                Trusted by 10,000+ businesses worldwide
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sales Performance
                </span>
                in 30 Days
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Get expert-driven strategies that boost conversions by 200%+ and maximize your ROI. 
                Join thousands of businesses already scaling with SalesRescue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 text-lg font-semibold">
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-lg font-semibold">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://images.pexels.com/photos/${774909 + i}/pexels-photo-${774909 + i}.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2`}
                        alt="Customer"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-600">Join 10,000+ happy customers</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.9/5 rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="SalesRescue Dashboard"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                {/* Floating metrics */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-bold">+340% ROI</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                  <div className="flex items-center text-blue-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-bold">10K+ Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how companies like yours achieved extraordinary growth with our expert-driven strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={story.logo}
                      alt={story.company}
                      className="w-12 h-12 rounded-xl object-cover mr-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">{story.metrics.revenue}</div>
                      <div className="text-xs text-gray-600">Revenue</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{story.metrics.conversion}</div>
                      <div className="text-xs text-gray-600">Conversion</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">{story.metrics.roas}</div>
                      <div className="text-xs text-gray-600">ROAS</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600">{story.solution}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-start">
                      <Quote className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                        <div className="flex items-center">
                          <img
                            src={story.client.image}
                            alt={story.client.name}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{story.client.name}</div>
                            <div className="text-sm text-gray-600">{story.client.position}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses that trust SalesRescue for their growth
            </p>
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">SOC 2 Certified</div>
                <div className="text-sm text-gray-600">Enterprise Security</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Best E-commerce Tool</div>
                <div className="text-sm text-gray-600">2024 Award Winner</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
              <CheckCircle className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">99.9% Uptime</div>
                <div className="text-sm text-gray-600">Guaranteed Reliability</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
              <Users className="w-8 h-8 text-orange-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">10K+ Customers</div>
                <div className="text-sm text-gray-600">Worldwide Trust</div>
              </div>
            </div>
          </div>
          
          {/* Integration Partners */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Seamlessly Integrates With</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              {integrationPartners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Top Performing Experts
            </h2>
            <p className="text-xl text-gray-600">
              Learn from the best in the industry with proven track records
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPerformers.map((performer, index) => (
              <div key={index} className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Rank Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className={`flex items-center px-3 py-1 rounded-full text-sm font-bold ${
                    performer.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                    performer.rank === 2 ? 'bg-gray-100 text-gray-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {performer.rank === 1 ? <Crown className="w-4 h-4 mr-1" /> :
                     performer.rank === 2 ? <Trophy className="w-4 h-4 mr-1" /> :
                     <Medal className="w-4 h-4 mr-1" />}
                    #{performer.rank}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <img
                      src={performer.avatar}
                      alt={performer.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-900">{performer.name}</h3>
                    <p className="text-gray-600">{performer.title}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                      performer.badge === 'Diamond Expert' ? 'bg-blue-100 text-blue-800' :
                      performer.badge === 'Platinum Expert' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {performer.badge}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{performer.metrics.clientsHelped}</div>
                      <div className="text-xs text-gray-600">Clients Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{performer.metrics.avgIncrease}</div>
                      <div className="text-xs text-gray-600">Avg Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{performer.metrics.successRate}</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {performer.specialties.map((specialty, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Weekly Growth Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 50,000+ e-commerce professionals receiving actionable strategies, 
              case studies, and expert tips delivered to your inbox every week.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                <p className="text-green-100">✓ Thank you! Check your email for confirmation.</p>
              </div>
            )}
            
            <div className="flex items-center justify-center mt-6 text-blue-100">
              <Lock className="w-4 h-4 mr-2" />
              <span className="text-sm">We respect your privacy. Unsubscribe at any time.</span>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">🎁 Free Bonus</h3>
              <p className="text-blue-100">
                Get our "E-commerce Growth Playbook" (valued at $197) instantly when you subscribe!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Sales?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already scaling with SalesRescue. 
            Start your free analysis today and see results in 30 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 text-lg font-semibold">
              Start Free Analysis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-lg font-semibold">
              Schedule Demo Call
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • 30-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;