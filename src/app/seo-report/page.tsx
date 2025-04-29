'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Dialog } from '@headlessui/react';
import { Karla } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';

const karla = Karla({ 
  subsets: ['latin'],
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function SEOReport() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("xrbqeapw");
  const [url, setUrl] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="lg:flex lg:items-center lg:gap-x-16 lg:justify-between">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-2xl"
            >
              <motion.h1 
                variants={fadeInUp}
                className={`text-4xl font-bold tracking-tight text-red-700 sm:text-5xl ${karla.className}`}
              >
                Get a Free Website Audit & Fix SEO Issues Holding You Back!
              </motion.h1>
              <motion.ul 
                variants={staggerChildren}
                className="mt-8 space-y-3"
              >
                <motion.li variants={fadeInUp} className="flex items-center gap-x-3">
                  <svg className="h-5 w-5 flex-none text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Uncover SEO mistakes</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-x-3">
                  <svg className="h-5 w-5 flex-none text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Boost rankings, and improve site health.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-x-3">
                  <svg className="h-5 w-5 flex-none text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Get a detailed site audit report—100% free!</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-x-3">
                  <svg className="h-5 w-5 flex-none text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">See exactly what's hurting website's performance.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-x-3">
                  <svg className="h-5 w-5 flex-none text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Claim your <em>free</em> audit now!</span>
                </motion.li>
              </motion.ul>
              <motion.div 
                variants={fadeInUp}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(true)}
                  className="rounded-md bg-red-700 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-600"
                >
                  Get My Free SEO Report!
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 lg:mt-0"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="/assets/seo-hero-section.png"
                alt="SEO Report and Website Analysis"
                className="w-full max-w-xl rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Red Banner Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px]"
        >
          <img 
            src="/assets/geometric.png" 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-700/65"></div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.img 
                variants={scaleIn}
                src="/assets/shape.png"
                alt=""
                className="w-[800px]"
              />
              <motion.div variants={fadeInUp} className="text-center">
                <h2 className={`text-5xl font-bold mb-6 text-white ${karla.className}`}>
                  IDENTIFY CRITICAL SITE ERRORS FREE!
                </h2>
                <p className="text-2xl text-white">
                  FAST & FREE WEBSITE AUDIT WITH SEO ANALYSIS
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* What You'll Get Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="py-32 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.h2 
              variants={fadeInUp}
              className={`text-7xl font-bold tracking-tight text-red-700 text-center mb-24 ${karla.className}`}
            >
              WHAT YOU'LL GET
            </motion.h2>
            <div className="grid grid-cols-1 gap-16 max-w-6xl mx-auto">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-x-8"
              >
                <svg className="w-16 h-16 text-red-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 12L9.89075 14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3 className="text-3xl text-gray-900">Full site health check (errors, speed, mobile-friendliness)</h3>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-x-8"
              >
                <svg className="w-16 h-16 text-red-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-3xl text-gray-900">Keyword and ranking insights</h3>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-x-8"
              >
                <svg className="w-16 h-16 text-red-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-3xl text-gray-900">Technical SEO fixes & optimization tips</h3>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-x-8"
              >
                <svg className="w-16 h-16 text-red-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.423 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9548 8.33397 21.9434 7.02299C21.932 5.71201 21.4061 4.45794 20.4791 3.5309C19.5521 2.60386 18.298 2.07802 16.987 2.06663C15.676 2.05523 14.413 2.55921 13.47 3.47L11.75 5.18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11C13.5705 10.4259 13.0226 9.95083 12.3934 9.60707C11.7642 9.26331 11.0684 9.05889 10.3533 9.00768C9.63816 8.95646 8.92037 9.05964 8.24871 9.31023C7.57704 9.56082 6.96691 9.95294 6.46 10.46L3.46 13.46C2.54921 14.403 2.04524 15.666 2.05663 16.977C2.06802 18.288 2.59387 19.5421 3.52091 20.4691C4.44795 21.3961 5.70201 21.922 7.013 21.9334C8.32398 21.9448 9.58699 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-3xl text-gray-900">Backlink analysis and recommendations</h3>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="bg-white py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-x-16">
              <motion.div variants={fadeInUp} className="max-w-2xl">
                <div className="relative inline-block">
                  <h2 className={`text-5xl font-bold tracking-tight text-gray-900 ${karla.className}`}>
                    Get a Free SEO Report & Unlock<br />
                    Your Website's Potential
                  </h2>
                  <div className="absolute -bottom-4 left-0 w-full h-1 bg-red-700"></div>
                </div>
                <motion.p variants={fadeInUp} className="mt-12 text-xl text-gray-600 leading-relaxed">
                  Your website might look great, but is it really optimized for search engines? If your traffic is low, rankings are slipping, or conversions aren't happening, our Free SEO Report will uncover exactly what's holding you back.
                </motion.p>
                <motion.p variants={fadeInUp} className="mt-8 text-xl text-gray-600 leading-relaxed">
                  With a comprehensive site audit, you'll get insights into technical SEO issues, on-page optimization gaps, keyword opportunities, and site performance bottlenecks—all in an easy-to-understand report. No guesswork, no fluff—just actionable data you can use to improve rankings and visibility.
                </motion.p>
              </motion.div>
              <motion.div 
                variants={scaleIn}
                className="mt-16 lg:mt-0 lg:max-w-md flex justify-center"
              >
                <div className="flex flex-col items-center space-y-8">
                  <h3 className={`text-6xl font-bold text-red-700 text-center ${karla.className}`}>
                    INSTANT<br />
                    SEO INSIGHTS
                  </h3>
                  <div className="w-full space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(true)}
                      className="w-full rounded-lg bg-red-700 px-8 py-4 text-xl font-semibold text-white shadow-sm hover:bg-red-600"
                    >
                      Get My FREE SEO Report now!
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(true)}
                      className="w-full rounded-lg border-2 border-red-700 px-8 py-4 text-xl font-semibold text-red-700 shadow-sm hover:bg-red-50"
                    >
                      Request More Information
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final Text Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-32 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-4xl text-gray-900 leading-relaxed">
                This 100% free, no-obligation report gives you real data so you can make smart decisions for better search rankings. Claim yours now and start driving more traffic today!
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/" className="text-sm leading-6 text-gray-300 hover:text-white">Home</Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className={`text-center text-xs leading-5 text-gray-400 ${karla.className}`}>
              &copy; {new Date().getFullYear()} Domain Driven Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal with animation */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full"
          >
            <Dialog.Panel className="mx-auto w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-lg bg-white p-6 sm:p-8 shadow-xl">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                Get Your Free SEO Report
              </Dialog.Title>
              {state.succeeded ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                >
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsOpen(false);
                        setTimeout(() => {
                          window.location.reload();
                        }, 100);
                      }}
                      className="w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="mt-4"
                >
                  <div className="space-y-4">
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        required
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                      <ValidationError prefix="URL" field="url" errors={state.errors} />
                    </motion.div>
                  </div>
                  <motion.div 
                    variants={fadeInUp}
                    className="mt-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={state.submitting}
                      className="w-full rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Sending...' : 'Get My Free SEO Report'}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </Dialog.Panel>
          </motion.div>
        </div>
      </Dialog>
    </div>
  );
} 