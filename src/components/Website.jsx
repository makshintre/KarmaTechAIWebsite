import React, { useState, useEffect } from 'react';
import { AboutUs } from './AboutUs';
import {
    ChevronDown,
    ArrowRight,
    Code,
    Brain,
    Settings,
    BarChart,
    CheckCircle,
    Factory,
    Building2,
    Briefcase,
    Truck,
    Heart,
    LineChart,
    Menu,
    X,
    Droplets
} from 'lucide-react';

const Website = () => {
    const [activeService, setActiveService] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showAboutUsModal, setShowAboutUsModal] = useState(false);

    // Stats counter animation
    const [stats, setStats] = useState({
        costReduction: 0,
        efficiency: 0,
        implementations: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                costReduction: prev.costReduction < 40 ? prev.costReduction + 1 : 40,
                efficiency: prev.efficiency < 65 ? prev.efficiency + 1 : 65,
                implementations: prev.implementations < 100 ? prev.implementations + 1 : 100
            }));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Navigation items
    const navigationItems = [
        {
            label: 'What we do',
            items: ['Overview', 'Industries', 'Services', 'Products and Platforms', 'Research & Innovation']
        },
        {
            label: 'Who we are',
            items: ['About Us', 'Leadership', 'Partners', 'Global Presence', 'Culture']
        },
        {
            label: 'Insights',
            items: ['Blog', 'Case Studies', 'Whitepapers', 'Reports', 'Events']
        },
        {
            label: 'Careers',
            items: ['Open Positions', 'Life at Company', 'Benefits', 'Learning & Development']
        },
        {
            label: 'Newsroom',
            items: ['Press Releases', 'Media Coverage', 'Awards', 'Company News']
        },
        {
            label: 'Investors',
            items: ['Financial Reports', 'Corporate Governance', 'Stock Information', 'IR Calendar']
        }
    ];

    const services = [
        {
            title: "Digital Process Automation",
            icon: <Settings className="w-6 h-6" />,
            description: "Streamline workflows and automate repetitive tasks with custom solutions.",
            features: ["Workflow optimization", "Smart document processing", "Custom automation solutions"]
        },
        {
            title: "AI Integration",
            icon: <Brain className="w-6 h-6" />,
            description: "Enhance your operations with intelligent, AI-powered solutions.",
            features: ["Machine learning implementation", "Predictive analytics", "Intelligent automation"]
        },
        {
            title: "Legacy System Modernization",
            icon: <Code className="w-6 h-6" />,
            description: "Update and optimize your existing systems for better performance.",
            features: ["System updates", "Cloud migration", "Integration services"]
        }
    ];

    const caseStudies = [
        {
            title: "Manufacturing Efficiency",
            challenge: "Manual quality control causing delays",
            solution: "Automated AI-powered inspection system",
            results: "75% faster processing, 90% fewer errors"
        },
        {
            title: "Healthcare Optimization",
            challenge: "Complex patient scheduling system",
            solution: "Custom scheduling automation",
            results: "60% reduction in wait times"
        },
        {
            title: "Financial Services",
            challenge: "Slow document processing",
            solution: "Intelligent document automation",
            results: "85% faster processing time"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* About Us Modal */}
            {showAboutUsModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
                        <button 
                            onClick={() => setShowAboutUsModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <AboutUs />
                    </div>
                </div>
            )}

            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                YourLogo
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navigationItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    <button className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium flex items-center space-x-1">
                                        <span>{item.label}</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>

                                    {/* Dropdown */}
                                    <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                                        {item.items.map((subItem, subIndex) => (
                                            <button
                                                key={subIndex}
                                                onClick={() => {
                                                    if (subItem === 'About Us') {
                                                        setShowAboutUsModal(true);
                                                    }
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {subItem}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-blue-600"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        {navigationItems.map((item, index) => (
                            <div key={index} className="px-4 py-2">
                                <button
                                    className="flex items-center justify-between w-full text-gray-600"
                                    onClick={() => {
                                        // Handle mobile navigation
                                    }}
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </nav>

            {/* Main Content with padding for navbar */}
            <div className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-50 to-blue-100 pt-20 pb-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-6 text-gray-900">
                                Custom Software Development Solutions
                            </h1>
                            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                                We build exactly what you need - no more, no less. AI-powered solutions tailored to your business.
                            </p>
                            <div className="flex justify-center space-x-12 mb-12">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{stats.costReduction}%</div>
                                    <div className="text-gray-600">Cost Reduction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{stats.efficiency}%</div>
                                    <div className="text-gray-600">Efficiency Increase</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{stats.implementations}+</div>
                                    <div className="text-gray-600">Implementations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rest of the sections remain unchanged */}
                {/* Our Approach */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-16">Our Approach</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <BarChart className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Gap Analysis</h3>
                                <p className="text-gray-600">We analyze your current systems and identify exactly what you need</p>
                            </div>
                            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Settings className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Custom Solution Design</h3>
                                <p className="text-gray-600">Like a master tailor, we create solutions that fit perfectly</p>
                            </div>
                            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Implementation</h3>
                                <p className="text-gray-600">Seamless integration with your existing systems</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                    onClick={() => setActiveService(activeService === index ? null : index)}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    {activeService === index && (
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-600">
                                                    <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-16">Industries We Serve</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                                <Factory className="w-8 h-8 text-blue-600 mr-4" />
                                <div>
                                    <h3 className="font-semibold mb-1">Manufacturing</h3>
                                    <p className="text-sm text-gray-600">Streamline production processes</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                                <Heart className="w-8 h-8 text-blue-600 mr-4" />
                                <div>
                                    <h3 className="font-semibold mb-1">Healthcare</h3>
                                    <p className="text-sm text-gray-600">Optimize patient care systems</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                                <LineChart className="w-8 h-8 text-blue-600 mr-4" />
                                <div>
                                    <h3 className="font-semibold mb-1">Finance</h3>
                                    <p className="text-sm text-gray-600">Automate financial processes</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                                <Building2 className="w-8 h-8 text-blue-600 mr-4" />
                                <div>
                                    <h3 className="font-semibold mb-1">Real Estate</h3>
                                    <p className="text-sm text-gray-600">Streamline property management</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                                <Truck className="w-8 h-8 text-blue-600 mr-4" />
                                <div>
                                    <h3 className="font-semibold mb-1">Logistics</h3>
                                    <p className="text-sm text-gray-600">Optimize supply chain operations</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                                <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
                                <div>
                                    <h3 className="font-semibold mb-1">Professional Services</h3>
                                    <p className="text-sm text-gray-600">Enhance service delivery</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                                <Droplets className="w-8 h-8 text-blue-600 mr-4" />
                                <div>
                                    <h3 className="font-semibold mb-1">Water & Wastewater Treatment</h3>
                                    <p className="text-sm text-gray-600">Optimize treatment processes and monitoring</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Studies */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {caseStudies.map((study, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Challenge:</p>
                                            <p className="text-gray-700">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Solution:</p>
                                            <p className="text-gray-700">{study.solution}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Results:</p>
                                            <p className="text-gray-700">{study.results}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Website;
