import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  delay?: number;
  period: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  delay = 0,
  period,
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        popular 
          ? 'shadow-xl border-2 border-bhakti-500 transform hover:-translate-y-1 hover:shadow-2xl' 
          : 'border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-bhakti-500 text-white px-4 py-1 text-sm font-semibold transform translate-x-6 translate-y-6 rotate-45">
          Popular
        </div>
      )}

      <div className={`p-6 ${popular ? 'bg-gradient-to-b from-white to-bhakti-50' : 'bg-white'}`}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-900">{price}</span>
            <span className="text-gray-500 ml-2">{period}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`rounded-full p-0.5 mr-2 ${feature.included ? 'bg-bhakti-100' : 'bg-gray-100'}`}>
                <Check className={`h-4 w-4 ${feature.included ? 'text-bhakti-600' : 'text-gray-400'}`} />
              </span>
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Link
          to="/#plans"
          className={`block text-center py-3 px-4 rounded-lg transition-colors duration-300 ${
            popular
              ? 'bg-bhakti-600 hover:bg-bhakti-700 text-white'
              : 'bg-white border border-bhakti-300 hover:bg-bhakti-50 text-bhakti-700'
          }`}
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;