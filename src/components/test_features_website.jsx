import React from 'react';
import { 
  BarChart, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Zap,
  Shield,
  Code,
  RefreshCw
} from 'lucide-react';

const EnhancedApproachSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We transform complex business processes into streamlined, AI-powered solutions through our proven methodology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Gap Analysis */}
          <div className="relative bg-white rounded-xl shadow-lg p-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-blue-600 rounded-full p-4 shadow-lg">
                <BarChart className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-center mb-4">Gap Analysis</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Thorough assessment of current workflows</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Stakeholder interviews and requirement gathering</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Identification of optimization opportunities</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 italic">
                "We analyze your current systems and identify exactly what you need"
              </p>
            </div>
          </div>

          {/* Custom Solution Design */}
          <div className="relative bg-white rounded-xl shadow-lg p-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-blue-600 rounded-full p-4 shadow-lg">
                <Settings className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-center mb-4">Custom Solution Design</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Code className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>AI-powered solution architecture</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Security and scalability planning</span>
                </li>
                <li className="flex items-start">
                  <Settings className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Customized workflow design</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 italic">
                "Like a master tailor, we create solutions that fit perfectly"
              </p>
            </div>
          </div>

          {/* Implementation */}
          <div className="relative bg-white rounded-xl shadow-lg p-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-blue-600 rounded-full p-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-center mb-4">Implementation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Phased deployment strategy</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Comprehensive team training</span>
                </li>
                <li className="flex items-start">
                  <RefreshCw className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Continuous optimization and support</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 italic">
                "Seamless integration with your existing systems"
              </p>
            </div>
          </div>
        </div>

        {/* Optional: Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Learn More About Our Process
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedApproachSection;