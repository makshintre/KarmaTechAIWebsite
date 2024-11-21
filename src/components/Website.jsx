import React, { useState, useEffect } from 'react';
import { AboutUs } from './AboutUs';
import companyLogo from '../assets/company_logo.jpg';
import stressedImage from '../assets/stressed.png';
import napkinImage2 from '../assets/napkin-image 2.png';
// import napkinImage3 from '../assets/napkin-image 3.png';
import napkinImage5 from '../assets/napkin-image 5.png';

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
    Droplets,
    Globe,
    Shield,
    Network
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

    // Navigation items remain the same
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

    const industries = [
        {
            icon: <Factory />,
            title: "Manufacturing",
            description: "Streamline production processes"
        },
        {
            icon: <Heart />,
            title: "Healthcare",
            description: "Optimize patient care systems"
        },
        {
            icon: <LineChart />,
            title: "Finance",
            description: "Automate financial processes"
        },
        {
            icon: <Building2 />,
            title: "Real Estate",
            description: "Streamline property management"
        },
        {
            icon: <Truck />,
            title: "Logistics",
            description: "Optimize supply chain operations"
        },
        {
            icon: <Briefcase />,
            title: "Professional Services",
            description: "Enhance service delivery"
        },
        {
            icon: <Droplets />,
            title: "Water Treatment",
            description: "Optimize treatment processes"
        },
        {
            icon: <Globe />,
            title: "Global Trade",
            description: "International trade solutions"
        },
        {
            icon: <Shield />,
            title: "Cybersecurity",
            description: "Protect digital assets"
        },
        {
            icon: <Network />,
            title: "Telecommunications",
            description: "Enhance connectivity solutions"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* About Us Modal remains the same */}
            {showAboutUsModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-gray-900 rounded-lg w-full max-h-[90vh] overflow-y-auto relative mx-4">
                        <button
                            onClick={() => setShowAboutUsModal(false)}
                            className="absolute top-4 right-4 text-gray-300 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <AboutUs />
                    </div>
                </div>
            )}

            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
                <div className="w-full px-4">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                src={companyLogo}
                                alt="Company Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            {navigationItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    <button className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium flex items-center space-x-1">
                                        <span>{item.label}</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>

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

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t w-full">
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

            {/* Main Content */}
            <div className="pt-20 w-full">
                {/* Hero Section */}
                <section className="bg-black pt-24 pb-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center">
                            {/* Company Name and Headline */}
                            <div className="mb-6">
                                <h1 className="text-6xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                        Karma Tech
                                    </span>
                                </h1>
                                <h2 className="text-4xl font-semibold text-white mb-4">
                                    Custom Software Solutions
                                </h2>
                            </div>

                            {/* Main Value Proposition */}
                            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Your Application. Your Control. Made Possible with KarmaTech
                            </p>

                            {/* Descriptive Subtext */}
                            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                We transform your business processes with AI-powered custom software solutions,
                                giving you complete ownership and control of your digital future.
                            </p>

                            {/* Call to Action Buttons */}
                            <div className="flex justify-center gap-6 mb-16">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center group">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="border-2 border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                                    Learn More
                                </button>
                            </div>

                            {/* Stats Section */}
                            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">{stats.costReduction}%</div>
                                    <div className="text-gray-300">Cost Reduction</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">{stats.efficiency}%</div>
                                    <div className="text-gray-300">Efficiency Increase</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">{stats.implementations}+</div>
                                    <div className="text-gray-300">Implementations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Remaining sections with black background and adjusted text colors */}
                <div className='w-full flex flex-row justify-center items-center space-x-4 py-8 bg-black'>
                    <img
                        src={stressedImage}
                        alt="Stressed Image"
                        className="w-1/4 object-contain"
                    />
                    <img
                        src={napkinImage2}
                        alt="Napkin Image 2"
                        className="w-1/4 object-contain"
                    />
                    {/* <img
                        src={napkinImage3}
                        alt="Napkin Image 3"
                        className="w-[400px] h-[300px] object-contain"
                    /> */}
                    <img
                        src={napkinImage5}
                        alt="Napkin Image 5"
                        className="w-[400px] h-[450px] object-contain"
                    />
                </div>

                {/* Our Approach */}
                <section className="w-full py-20 bg-black">
                    <div className="w-full px-4">
                        <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Approach</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                            {/* Approach cards with black background and white/gray text */}
                            <div className="text-center p-8 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors">
                                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <BarChart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-white">Gap Analysis</h3>
                                <p className="text-gray-400">We analyze your current systems and identify exactly what you need</p>
                            </div>
                            <div className="text-center p-8 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors">
                                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Settings className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-white">Custom Solution Design</h3>
                                <p className="text-gray-400">Like a master tailor, we create solutions that fit perfectly</p>
                            </div>
                            <div className="text-center p-8 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors">
                                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-white">Implementation</h3>
                                <p className="text-gray-400">Seamless integration with your existing systems</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="w-full py-20 bg-black">
                    <div className="w-full px-4">
                        <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
                                    onClick={() => setActiveService(activeService === index ? null : index)}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="bg-gray-800 p-3 rounded-lg mr-4">
                                            <div className="text-white">{service.icon}</div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-400 mb-4">{service.description}</p>
                                    {activeService === index && (
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-400">
                                                    <CheckCircle className="w-4 h-4 mr-2 text-white" />
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
                <section className="w-full py-20 bg-black">
                    <div className="w-full px-4">
                        <h2 className="text-3xl font-bold text-center mb-16 text-white">Industries We Serve</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
                            {industries.map((industry, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors">
                                        <div className="text-white">
                                            {industry.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-center mb-2 text-white">{industry.title}</h3>
                                    <p className="text-sm text-gray-400 text-center">{industry.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Studies */}
                <section className="w-full py-20 bg-black">
                    <div className="w-full px-4">
                        <h2 className="text-3xl font-bold text-center mb-16 text-white">Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-white">Manufacturing Efficiency</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Challenge:</p>
                                        <p className="text-gray-300">Manual quality control causing delays</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Solution:</p>
                                        <p className="text-gray-300">Automated AI-powered inspection system</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Results:</p>
                                        <p className="text-gray-300">75% faster processing, 90% fewer errors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-white">Healthcare Optimization</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Challenge:</p>
                                        <p className="text-gray-300">Complex patient scheduling system</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Solution:</p>
                                        <p className="text-gray-300">Custom scheduling automation</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Results:</p>
                                        <p className="text-gray-300">60% reduction in wait times</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-white">Financial Services</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Challenge:</p>
                                        <p className="text-gray-300">Slow document processing</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Solution:</p>
                                        <p className="text-gray-300">Intelligent document automation</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Results:</p>
                                        <p className="text-gray-300">85% faster processing time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Website;
