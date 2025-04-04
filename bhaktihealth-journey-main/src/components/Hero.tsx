import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Heart, Activity, Calendar } from 'lucide-react';
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0
    });
  }, [controls]);
  return <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{
      opacity
    }}>
        <motion.div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-bhakti-100 blur-3xl opacity-50" animate={{
        x: [0, 10, 0],
        y: [0, -10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-bhakti-200 blur-3xl opacity-40" animate={{
        x: [0, -15, 0],
        y: [0, 15, 0]
      }} transition={{
        repeat: Infinity,
        duration: 10,
        ease: "easeInOut",
        delay: 1
      }} />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 pt-32 pb-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Text Content */}
          <motion.div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0" initial={{
          opacity: 0,
          y: 20
        }} animate={controls} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            <motion.span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide bg-bhakti-100 text-bhakti-700 rounded-full mb-4" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }}>
              Transformative Wellness Coaching
            </motion.span>
            
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-4 text-gray-900" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.3
          }}>
              Transform Your Life with Expert Health Coaching
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }}>Personalized wellness plans that reduce stress, manage weight, and create lasting health transformations with certified coaches with balanced diet plan.</motion.p>
            
            <motion.div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.5
          }}>
              <Link to="/plans" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-bhakti-600 text-white font-medium shadow-lg hover:bg-bhakti-700 transition-all duration-300 transform hover:-translate-y-1">
                View Plans
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-bhakti-600 font-medium border border-bhakti-200 shadow-sm hover:shadow-md hover:border-bhakti-300 transition-all duration-300 transform hover:-translate-y-1">
                Free Consultation
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Visual */}
          <motion.div className="md:w-1/2 relative" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <div className="relative mx-auto md:ml-auto md:mr-0 max-w-md">
              {/* Main Image */}
              <motion.div className="rounded-2xl overflow-hidden shadow-xl" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <img alt="Health coaching session" className="w-full h-auto" loading="lazy" src="/lovable-uploads/a9d1cfe9-c1f2-4bcb-b000-ea707a7a35b9.jpg" />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.8
            }} whileHover={{
              y: -5,
              transition: {
                duration: 0.3
              }
            }} className="absolute -left-6 -bottom-6 bg-white rounded-lg shadow-lg p-4 glass-panel my-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-bhakti-100 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-bhakti-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Stress Reduction</p>
                    <p className="text-xs text-gray-500">Expert techniques</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 1
            }} whileHover={{
              x: -5,
              transition: {
                duration: 0.3
              }
            }} className="absolute -right-4 top-1/4 bg-white rounded-lg shadow-lg p-4 glass-panel py-[9px] my-[90px] mx-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-bhakti-100 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-bhakti-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Weight Management</p>
                    <p className="text-xs text-gray-500">Sustainable results</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 glass-panel" initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 1.2
            }} whileHover={{
              y: -5,
              transition: {
                duration: 0.3
              }
            }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-bhakti-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-bhakti-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Custom Plans</p>
                    <p className="text-xs text-gray-500">Personalized for you</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Hero;