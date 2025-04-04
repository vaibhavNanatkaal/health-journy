import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const links = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/#testimonials',
    scrollTo: 'testimonials'
  }, {
    name: 'Plans',
    path: '/#plans',
    scrollTo: 'plans'
  }, {
    name: 'Contact',
    path: '/contact'
  }];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, scrollTo?: string) => {
    if (scrollTo && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  // Mobile menu animations
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%"
    },
    open: {
      opacity: 1,
      y: 0
    }
  };
  return <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out", isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5")}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} className="flex items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/Bhakti_Logo.png" alt="Bhakti Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-bhakti-700">Bhakti Health & Wellness</span>
          </NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="hidden md:flex items-center space-x-8">
          {links.map(link => <NavLink key={link.path} to={link.path} onClick={(e) => handleNavClick(e, (link as any).scrollTo)} className={({
          isActive
        }) => cn("relative px-2 py-1 font-medium text-sm transition-colors duration-300", isActive ? "text-bhakti-700" : "text-gray-600 hover:text-bhakti-600")}>
              {({
            isActive
          }) => <>
                  {link.name}
                  {isActive && <motion.div layoutId="navIndicator" transition={{
              type: "spring",
              duration: 0.5
            }} className="absolute -bottom-1 left-0 w-full h-0.5 bg-bhakti-500 rounded-full" />}
                </>}
            </NavLink>)}
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600 focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial="closed" animate="open" exit="closed" variants={menuVariants} transition={{
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }} className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl">
            <div className="flex flex-col p-5 space-y-4">
              {links.map(link => <NavLink key={link.path} to={link.path} className={({
            isActive
          }) => cn("py-2 px-4 text-base font-medium rounded-md transition-colors duration-200", isActive ? "bg-bhakti-50 text-bhakti-700" : "text-gray-600 hover:bg-gray-50 hover:text-bhakti-600")}>
                  {link.name}
                </NavLink>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Navbar;