import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Activity, Calendar, Check, Scale, User, UserPlus, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import PageTransition from '@/components/PageTransition';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    scrollYProgress
  } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // For various sections
  const aboutRef = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const planRef = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const approachRef = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const testimonialRef = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const ctaRef = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const features = [{
    title: "Sustainable Success",
    description: "Holistic approach to achieving and maintaining long-term health transformations.",
    icon: Scale
  }, {
    title: "Whole-body Wellness",
    description: "Comprehensive strategies for physical, mental, and emotional health integration.",
    icon: Heart
  }, {
    title: "Coaching, Your Way",
    description: "Personalized strategies tailored to your unique health journey and goals. NBC-HWC & AFPA Approved.",
    icon: Calendar
  }, {
    title: "Certified Expertise",
    description: "Work with highly trained health professionals with NBC-HWC & AFPA Approved specialized knowledge.",
    icon: User
  }];
  const approaches = [{
    title: "Initial Assessment",
    description: "We start with a comprehensive evaluation of your health history, lifestyle, and goals.",
    icon: Zap
  }, {
    title: "Custom Plan Creation",
    description: "Your coach develops a tailored wellness plan addressing your specific needs.",
    icon: Calendar
  }, {
    title: "Regular Check-ins",
    description: "Consistent sessions to track progress, make adjustments, and ensure accountability.",
    icon: Clock
  }, {
    title: "Community Support",
    description: "Access to group sessions and community resources to enhance your journey.",
    icon: UserPlus
  }];
  const testimonials = [{
    quote: "BhaktiHealth helped me achieve what felt impossible. My diabetes is now under control, and I've lost 30 pounds through their personalized approach.",
    name: "Sophia Rodriguez",
    title: "Type 2 Diabetes Patient",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces&auto=format",
    bgColor: "bg-white"
  }, {
    quote: "The stress management techniques my coach taught me have transformed my life. My blood pressure is lower than it's been in 10 years.",
    name: "Michael Chen",
    title: "Hypertension Patient",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bgColor: "bg-bhakti-50"
  }, {
    quote: "As a teenager struggling with weight, I finally found a program that doesn't shame me but empowers me. I've gained confidence and healthy habits.",
    name: "Emma Washington",
    title: "Teen Client",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bgColor: "bg-white"
  }, {
    quote: "The postpartum program was exactly what I needed. They understood my challenges and helped me regain my strength and balance.",
    name: "Jessica Taylor",
    title: "Postpartum Client",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    bgColor: "bg-bhakti-50"
  }];
  return <PageTransition>
      <div className="relative">
        <Navbar />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Trusted By Section */}
        
        
        {/* Features Section */}
        <section className="py-20 bg-white" id="features">
          <div className="container mx-auto px-6 md:px-12">
            <div ref={aboutRef.ref as React.RefObject<HTMLDivElement>} className="text-center max-w-3xl mx-auto mb-16">
              <motion.span initial={{
              opacity: 0
            }} animate={aboutRef.isIntersecting ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              duration: 0.5
            }} className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-bhakti-100 text-bhakti-700 rounded-full mb-4">
                OUR SOLUTIONS
              </motion.span>
              
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={aboutRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Personalized Health Solutions for Every Need
              </motion.h2>
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={aboutRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-lg text-gray-600">
                Our comprehensive approach addresses the unique challenges of diabetes, hypertension, obesity, and postpartum recovery through expert coaching and customized plans.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} delay={index} />)}
            </div>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-white to-bhakti-50" id="approach">
          <div className="container mx-auto px-6 md:px-12">
            <div ref={approachRef.ref as React.RefObject<HTMLDivElement>} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Image side */}
              <motion.div className="lg:w-1/2 relative" initial={{
              opacity: 0,
              x: -30
            }} animate={approachRef.isIntersecting ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -30
            }} transition={{
              duration: 0.7,
              delay: 0.1
            }}>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img alt="Coach working with client" className="w-full h-auto" loading="lazy" src="/lovable-uploads/4ee5a828-eda1-41a4-abb3-e46eaef7b3d9.jpg" />
                </div>
                <div className="absolute w-full h-full top-0 -left-4 -z-10 rounded-2xl bg-bhakti-200 opacity-30 transform -rotate-3" />
                <div className="absolute w-full h-full top-4 -right-4 -z-10 rounded-2xl bg-bhakti-300 opacity-20 transform rotate-3" />
              </motion.div>
              
              {/* Content side */}
              <div className="lg:w-1/2">
                <motion.span initial={{
                opacity: 0
              }} animate={approachRef.isIntersecting ? {
                opacity: 1
              } : {
                opacity: 0
              }} transition={{
                duration: 0.5
              }} className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-bhakti-100 text-bhakti-700 rounded-full mb-4">
                  OUR METHODOLOGY
                </motion.span>
                
                <motion.h2 initial={{
                opacity: 0,
                y: 20
              }} animate={approachRef.isIntersecting ? {
                opacity: 1,
                y: 0
              } : {
                opacity: 0,
                y: 20
              }} transition={{
                duration: 0.6,
                delay: 0.1
              }} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How Bhakti Health and Wellness Transforms Your Lifestyle</motion.h2>
                
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={approachRef.isIntersecting ? {
                opacity: 1,
                y: 0
              } : {
                opacity: 0,
                y: 20
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} className="text-lg text-gray-600 mb-8">
                  Our proven four-step approach ensures that every client receives personalized care and achievable health goals, leading to sustainable results.
                </motion.p>
                
                <div className="space-y-6">
                  {approaches.map((approach, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 20
                }} animate={approachRef.isIntersecting ? {
                  opacity: 1,
                  y: 0
                } : {
                  opacity: 0,
                  y: 20
                }} transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1
                }} className="flex items-start">
                      <div className="rounded-lg bg-white p-2 shadow-md mr-4">
                        <approach.icon className="h-6 w-6 text-bhakti-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{approach.title}</h3>
                        <p className="text-gray-600">{approach.description}</p>
                      </div>
                    </motion.div>)}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white" id="testimonials">
          <div className="container mx-auto px-6 md:px-12">
            <div ref={testimonialRef.ref as React.RefObject<HTMLDivElement>} className="text-center max-w-3xl mx-auto mb-16">
              <motion.span initial={{
              opacity: 0
            }} animate={testimonialRef.isIntersecting ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              duration: 0.5
            }} className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-bhakti-100 text-bhakti-700 rounded-full mb-4">
                SUCCESS STORIES
              </motion.span>
              
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={testimonialRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Real Results from Real People
              </motion.h2>
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={testimonialRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-lg text-gray-600">
                Hear from clients who have transformed their health with our personalized coaching approach.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} name={testimonial.name} title={testimonial.title} avatar={testimonial.avatar} bgColor={testimonial.bgColor} delay={index} />)}
            </div>
          </div>
        </section>
        
        {/* Quick Plan Preview */}
        <section id="plans" ref={planRef.ref as React.RefObject<HTMLDivElement>} className="py-20 bg-gradient-to-br from-white to-bhakti-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span initial={{
              opacity: 0
            }} animate={planRef.isIntersecting ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              duration: 0.5
            }} className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-bhakti-100 text-bhakti-700 rounded-full mb-4">
                PRICING PLANS
              </motion.span>
              
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={planRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Choose the Perfect Plan for Your Journey
              </motion.h2>
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={planRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-lg text-gray-600 mb-8">
                We offer flexible options for individuals, groups, and corporate clients.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Single Session */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={planRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 30
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Single Session</h3>
                  <div className="text-bhakti-600 text-2xl font-bold mb-4">₹700</div>
                  <p className="text-gray-600 mb-6">Perfect for those wanting to try our services or needing specific guidance.</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">60-minute coaching session</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Digital session notes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Action plan creation</span>
                    </li>
                  </ul>
                  
                  <Link to="/plans" className="block text-center py-2 px-4 rounded-lg bg-white border border-bhakti-300 hover:bg-bhakti-50 text-bhakti-700 transition-colors duration-200">
                    View Details
                  </Link>
                </div>
              </motion.div>
              
              {/* 6-Month */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={planRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 30
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="bg-white rounded-xl shadow-xl border-2 border-bhakti-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-bhakti-500 text-white px-3 py-1 text-xs font-semibold">
                  Popular
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">6-Month Program</h3>
                  <div className="text-bhakti-600 text-2xl font-bold mb-4">$399<span className="text-sm font-normal text-gray-600">/month</span></div>
                  <p className="text-gray-600 mb-6">Comprehensive support for significant health transformations.</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Weekly coaching sessions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Personalized wellness plan</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Nutrition guidance</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Monthly progress review</span>
                    </li>
                  </ul>
                  
                  <Link to="/plans" className="block text-center py-2 px-4 rounded-lg bg-bhakti-600 hover:bg-bhakti-700 text-white transition-colors duration-200">
                    View Details
                  </Link>
                </div>
              </motion.div>
              
              {/* 12-Month */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={planRef.isIntersecting ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 30
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">12-Month Program</h3>
                  <div className="text-bhakti-600 text-2xl font-bold mb-4">$349<span className="text-sm font-normal text-gray-600">/month</span></div>
                  <p className="text-gray-600 mb-6">Complete lifestyle transformation with extended support.</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Bi-weekly coaching</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Comprehensive health plan</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Priority email support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-bhakti-500 mr-2" />
                      <span className="text-gray-700">Quarterly health assessments</span>
                    </li>
                  </ul>
                  
                  <Link to="/plans" className="block text-center py-2 px-4 rounded-lg bg-white border border-bhakti-300 hover:bg-bhakti-50 text-bhakti-700 transition-colors duration-200">
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center mt-12">
              
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section ref={ctaRef.ref as React.RefObject<HTMLDivElement>} className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={ctaRef.isIntersecting ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 30
          }} transition={{
            duration: 0.7
          }} className="max-w-4xl mx-auto text-center bg-gradient-to-br from-bhakti-600 to-bhakti-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-12 md:px-12 md:py-16 relative z-10">
                <div className="absolute inset-0 overflow-hidden z-0">
                  <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-white opacity-10"></div>
                  <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-white opacity-10"></div>
                </div>
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-white/20 text-white rounded-full mb-4">
                    START TODAY
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Begin Your Transformation Journey
                  </h2>
                  
                  <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                    Our certified coaches are ready to help you achieve your health goals with personalized plans that fit your unique needs.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to="/contact" className="px-6 py-3 rounded-lg bg-white text-bhakti-700 font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                      Schedule a Free Consultation
                    </Link>
                    <Link to="/#plans" className="px-6 py-3 rounded-lg bg-transparent border border-white/40 text-white font-medium hover:bg-white/10 transition-colors duration-200">
                      View Pricing Plans
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </PageTransition>;
};
export default Index;