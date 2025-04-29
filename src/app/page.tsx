'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Arizonia, Karla } from 'next/font/google';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Link from 'next/link';

const arizonia = Arizonia({ 
  weight: '400',
  subsets: ['latin'],
});

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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("xanoqblb");

  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <div className="relative pt-16">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-full lg:flex lg:items-center lg:justify-between lg:gap-x-16">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="text-left max-w-2xl"
              >
                <motion.h1 
                  variants={fadeInUp}
                  className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ${karla.className}`}
                >
                  Custom Web Development & SEO Solutions
                </motion.h1>
                <motion.p 
                  variants={fadeInUp}
                  className="mt-6 text-lg leading-8 text-gray-600"
                >
                  Tailored for Success, our custom web development solutions integrate cutting-edge design, secure infrastructure, and SEO strategies to elevate your digital presence.
                </motion.p>
                <motion.div 
                  variants={fadeInUp}
                  className="mt-10 flex gap-x-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className={`rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 ${karla.className}`}
                  >
                    Contact Us
                  </motion.button>
                  <Link 
                    href="/seo-report"
                    className={`rounded-full border border-black px-6 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 ${karla.className}`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      Free SEO Report
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16 lg:mt-0"
              >
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/assets/hero.png"
                  alt="Web Development Illustration"
                  className="w-full max-w-xl mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-16 sm:py-20"
        >
          <img 
            src="/assets/quote-section.png" 
            alt="Background pattern" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="mx-auto max-w-5xl text-center"
            >
              <blockquote>
                <motion.p 
                  variants={fadeInUp}
                  className={`text-3xl font-semibold leading-tight text-black sm:text-4xl sm:leading-tight ${karla.className}`}
                >
                  "What sets us apart is our ability to transform ideas into successful, scalable solutions together."
                </motion.p>
                <motion.div variants={fadeInUp} className="mt-10">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mx-auto w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-white"
                  >
                    <img
                      src="/assets/jeremy.png"
                      alt="Jeremy Jones"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp} className="mt-8 pb-6">
                    <p className={`text-6xl sm:text-7xl ${arizonia.className} text-[#F4A261]`}>J. Jones</p>
                    <p className={`mt-6 text-xl font-medium text-black ${karla.className}`}>Jeremy Jones - Chief Architect</p>
                  </motion.div>
                </motion.div>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              variants={fadeInUp}
              className="mx-auto text-center"
            >
              <h2 className={`text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl ${karla.className}`}>Our Services</h2>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-16 gap-y-12 sm:mt-20 lg:mx-0 lg:grid-cols-3">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center text-center"
              >
                <img 
                  src="/assets/content.png" 
                  alt="Content Authoring" 
                  className="h-64 w-auto mb-8"
                />
                <h3 className={`text-2xl font-semibold text-gray-900 mb-4 ${karla.className}`}>Content Authoring</h3>
                <p className="text-gray-600 max-w-sm">High-quality, engaging content tailored to your audience. From blog posts to web copy, we create clear, impactful messaging that drives results.</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center text-center"
              >
                <img 
                  src="/assets/basic-seo.png" 
                  alt="Basic & Full SEO" 
                  className="h-64 w-auto mb-8"
                />
                <h3 className={`text-2xl font-semibold text-gray-900 mb-4 ${karla.className}`}>Basic & Full SEO</h3>
                <p className="text-gray-600 max-w-sm">Comprehensive SEO strategy covering on-page, technical, and off-page SEO. Includes audits, content optimization, backlink building, and performance tracking for better visibility.</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center text-center"
              >
                <img 
                  src="/assets/development.png" 
                  alt="Custom Development" 
                  className="h-64 w-auto mb-8"
                />
                <h3 className={`text-2xl font-semibold text-gray-900 mb-4 ${karla.className}`}>Custom Development</h3>
                <p className="text-gray-600 max-w-sm">Custom digital solutions built to fit your business needs. From web applications to enterprise software, we develop secure, scalable, and efficient systems.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className={`text-4xl font-bold tracking-tight text-white sm:text-5xl mb-16 ${karla.className}`}>
                What Our Clients Are Saying
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center px-32"
                    >
                      <blockquote>
                        <p style={{ fontStyle: 'italic' }} className={`text-xl sm:text-2xl font-medium text-white leading-relaxed ${karla.className}`}>
                          "Working with Domain Driven Solutions has completely transformed my online presence. My website is faster, more visible, and ranking higher than ever. Their expertise in SEO and custom optimization not only boosted my traffic but also directly impacted my book sales. I finally have a digital presence that works for me, not against me."
                        </p>
                        <footer className="mt-10">
                          <p className={`text-3xl text-[#F4A261] ${karla.className}`}>Paul Hollis</p>
                          <p className={`mt-2 text-lg text-gray-400 ${karla.className}`}>Bestselling Author The Hollow Man Series</p>
                        </footer>
                      </blockquote>
                    </motion.div>
                  </CarouselItem>
                  <CarouselItem>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center px-32"
                    >
                      <blockquote>
                        <p style={{ fontStyle: 'italic' }} className={`text-xl sm:text-2xl font-medium text-white leading-relaxed ${karla.className}`}>
                          "The team at DDS has been instrumental in our digital transformation. Their technical expertise and strategic approach have helped us achieve remarkable growth in our online presence."
                        </p>
                        <footer className="mt-10">
                          <p className={`text-3xl text-[#F4A261] ${karla.className}`}>Sarah Chen</p>
                          <p className={`mt-2 text-lg text-gray-400 ${karla.className}`}>CEO, TechStart Solutions</p>
                        </footer>
                      </blockquote>
                    </motion.div>
                  </CarouselItem>
                  <CarouselItem>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center px-32"
                    >
                      <blockquote>
                        <p style={{ fontStyle: 'italic' }} className={`text-xl sm:text-2xl font-medium text-white leading-relaxed ${karla.className}`}>
                          "Their attention to detail and commitment to delivering results sets them apart. We've seen a significant increase in our conversion rates since implementing their recommendations."
                        </p>
                        <footer className="mt-10">
                          <p className={`text-3xl text-[#F4A261] ${karla.className}`}>Michael Roberts</p>
                          <p className={`mt-2 text-lg text-gray-400 ${karla.className}`}>Marketing Director, Global Innovations</p>
                        </footer>
                      </blockquote>
                    </motion.div>
                  </CarouselItem>
                </CarouselContent>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CarouselPrevious className="hidden lg:flex" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CarouselNext className="hidden lg:flex" />
                </motion.div>
              </Carousel>
            </motion.div>
          </div>
        </motion.div>

        {/* Dominate Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:gap-x-16 lg:justify-between">
              <div className="max-w-xl">
                <h2 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ${karla.className}`}>
                  Dominate Your Digital Presence & Optimize Your Business with Custom Digital Solutions
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Tailored for Enterprise Success, our custom web development solutions integrate cutting-edge design, secure infrastructure, and SEO strategies to elevate your digital presence.
                </p>
                <div className="mt-10 flex gap-x-6">
                  <button
                    onClick={() => setIsOpen(true)}
                    className={`rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 ${karla.className}`}
                  >
                    Contact Us
                  </button>
                  <Link 
                    href="/seo-report"
                    className={`rounded-full border border-black px-6 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 ${karla.className}`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      Free SEO Report
                    </motion.span>
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-16 lg:mt-0"
              >
                <img
                  src="/assets/dominate.png"
                  alt="Digital Solutions Illustration"
                  className="w-full max-w-xl mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
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
                <Dialog.Title className={`text-lg font-medium leading-6 text-gray-900 ${karla.className}`}>
                  Contact Us
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
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
                        className="w-full rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {state.submitting ? 'Sending...' : 'Send Message'}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </Dialog.Panel>
            </motion.div>
          </div>
        </Dialog>
      </main>

      {/* Footer */}
      <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Services</a>
            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">About</a>
            <button
              onClick={() => setIsOpen(true)}
              className="text-sm leading-6 text-gray-300 hover:text-white"
            >
              Contact
            </button>
            <Link 
              href="/seo-report"
              className="text-sm leading-6 text-gray-300 hover:text-white"
            >
              Free SEO Report
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className={`text-center text-xs leading-5 text-gray-400 ${karla.className}`}>
              &copy; {new Date().getFullYear()} Domain Driven Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 