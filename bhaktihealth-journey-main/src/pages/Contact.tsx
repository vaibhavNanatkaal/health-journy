
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <PageTransition>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-bhakti-50">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-bhakti-100 text-bhakti-700 rounded-full mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Start Your Wellness Journey Today
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified coaches are ready to help you achieve your health goals. Schedule a free consultation or reach out through any of our channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-bhakti-100 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-bhakti-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Mon-Fri from 8am to 6pm</p>
              <a href="https://api.whatsapp.com/send/?phone=919998805082&text=Hello,+I+would+like+more+information+on+weightloss+and+overall+well-being&type=phone_number&app_absent=0" className="text-bhakti-600 hover:text-bhakti-700 font-medium">
                +91 99988 05082
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-bhakti-100 rounded-lg flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-bhakti-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">24/7 Support</p>
              <a href="mailto:contact@bhaktihealth.com" className="text-bhakti-600 hover:text-bhakti-700 font-medium">
                contact@bhaktihealth.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-bhakti-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-bhakti-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-gray-600 mb-4">Visit us at</p>
              <address className="text-bhakti-600 not-italic">
                123 Wellness Street<br />
                Health Valley, CA 90210
              </address>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-bhakti-600 hover:bg-bhakti-700 text-white px-8 py-3 rounded-lg text-lg">
              <a href="https://calendly.com/dr-priyankamodi5/30min">Schedule Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
