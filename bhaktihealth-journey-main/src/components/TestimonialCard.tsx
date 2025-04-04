import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  bgColor?: string;
  delay?: number;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  avatar,
  bgColor = 'bg-white',
  delay = 0
}) => {
  const {
    ref,
    isIntersecting
  } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  return <motion.div ref={ref as React.RefObject<HTMLDivElement>} initial={{
    opacity: 0,
    y: 30
  }} animate={isIntersecting ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 30
  }} transition={{
    duration: 0.6,
    delay: delay * 0.2
  }} className={`${bgColor} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
      <div className="mb-6 flex-grow">
        <svg className="h-8 w-8 text-bhakti-300 mb-1" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700 italic text-base">{quote}</p>
      </div>
      <div className="flex items-center mt-4">
        <div className="rounded-full h-10 w-10 overflow-hidden mr-3">
          <img src={avatar} alt={name} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </motion.div>;
};
export default TestimonialCard;