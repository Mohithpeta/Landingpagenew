import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Layout, Target, Users, Clock, Instagram, Linkedin } from 'lucide-react';
import image1 from './assets/1.jpg';
import image2 from './assets/2.png';
import image3 from './assets/3.jpg';
import logo from './assets/Lifecourse Logo.png';
import deepvitalLogo from './assets/Deepvital logo.png';

const carouselData = [
  {
    image: image1,
    title: "Postpartum Care Doesn't End at 6 Weeks - Your Recovery Matters",
    subtitle: "For too long, postpartum care has ended at six weeks, leaving millions of mothers without support as they navigate pain, depression, and long-term health risks.",
  },
  {
    image: image2,
    title: "Your Postpartum Journey Matters—Support Beyond 6 Weeks",
    subtitle: "Be the journey doesn't stop here, because the months after childbirth are just as critical as pregnancy itself, shaping both mother and child's future health.",
  },
  {
    image: image3,
    title: "LifeCourse: Expert-Guided Postpartum Support for Lifelong Wellness",
    subtitle: "Our LifeCourse platform is here for the long haul, providing continuous, evidence-based expert care signals to help you thrive in your postpartum journey.",
  }
];

const features = [
  {
    number: "1",
    title: "Postpartum Control Panel",
    description: "Videos, courses, and info targeting postpartum struggles—hypertension, pelvic floor prolapse, incontinence, painful sex. Body or mind, we've got it handled.",
    icon: Layout
  },
  {
    number: "2",
    title: "Precision Tools",
    description: "Pelvic floor exercises, cognitive behavioral therapy, and tracking—smart DTx built by maternal health pros.",
    icon: Target
  },
  {
    number: "3",
    title: "Personalized for You",
    description: "Your postpartum journey is unique. Our courses adapt to your specific needs.",
    icon: Users
  },
  {
    number: "4",
    title: "Lifelong Support",
    description: "Forget the 6-week cutoff. We're here for the months, years, or decades it takes to feel whole again—because your recovery doesn't have an expiration date.",
    icon: Clock
  }
];

const standaloneContent = [
  {
    title: "Your postpartum fight deserves a champion.",
    subtitle: "LifeCourse brings the experts to you.",
    gradient: "[--gradient-start:#5E17E8] [--gradient-end:#0CCDDF]"
  },
  {
    title: "Lifecourse isn't just another app—it's a digital therapeutics (DTx)",
    subtitle: "lifeline crafted specifically for postpartum mothers.",
    gradient: "[--gradient-start:#5E17E8] [--gradient-end:#0CCDDF]"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      setCurrentContent((prev) => (prev + 1) % standaloneContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="LifeCourse" className="h-8" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-[#5E17E8] hover:text-[#4912ba] font-medium">
                <a href="https://staging.d14hsruio5bh6z.amplifyapp.com/">Login as User</a>
              </button>
              <button className="px-4 py-2 bg-[#5E17E8] text-white rounded-lg hover:bg-[#4912ba] transition duration-150">
                <a href="https://staging.dcwtefwzmazk1.amplifyapp.com/">Login as Expert</a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <div className="relative h-[585px] mt-16">
        <div className="absolute inset-0 overflow-hidden">
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 flex">
                {/* Left side - Content */}
                <div className="w-1/2 bg-[#F3EDFF] flex items-center">
                  <div className="px-12 py-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#5E17E8] to-[#0CCDDF]">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
                {/* Right side - Image */}
                <div className="w-1/2 relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-700 w-8' : 'bg-blue-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-all"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-all"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>

      {/* Standalone Content */}
      <div className={`bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] ${standaloneContent[currentContent].gradient} py-16 transition-all duration-500`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {standaloneContent[currentContent].title}
          </h2>
          <p className="text-xl text-white/90">
            {standaloneContent[currentContent].subtitle}
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-purple-700 mb-12">WHAT SETS US APART?</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature) => (
            <div key={feature.number} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{feature.number}</span>
                </div>
              </div>
              <div>
                <h3 className="text-blue-500 text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-purple-700 text-2xl font-bold mb-1">
              Empowering your postpartum journey
            </p>
            <p className="text-blue-500 text-2xl font-bold mb-12">
              with expert care, always.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="text-gray-600 text-sm mb-8">
              <p>Address: 5 block, 9th floor, IITM RESEARCH PARK,</p>
              <p>Kanagam Rd, Kanagam, Taramani,</p>
              <p>HITEC Chennai, Tamil Nadu 600113</p>
              <p className="mt-2">E-mail: office@deepvital.in</p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img src={logo} alt="LifeCourse" className="h-8" />
              <img src={deepvitalLogo} alt="Deepvital" className="h-8" />
            </div>

            <p className="text-gray-400 text-sm mt-8">
              Copyright 2023 @ Deepvital Pvt Ltd | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;