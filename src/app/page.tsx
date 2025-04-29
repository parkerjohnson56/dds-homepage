'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Arizonia, Karla } from 'next/font/google';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const arizonia = Arizonia({ 
  weight: '400',
  subsets: ['latin'],
});

const karla = Karla({ 
  subsets: ['latin'],
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("xanoqblb");

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex py-4 justify-between items-center">
            <div className="flex-shrink-0">
              <img className="h-20 w-auto" src="/assets/logo.png" alt="Domain Driven Solutions" />
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex md:space-x-8">
                <a href="#" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>HOME</a>
                <a href="#" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>SERVICES</a>
                <a href="#" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>ABOUT</a>
                <a href="#" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>CONTACT</a>
                <a href="#" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>BLOG</a>
              </div>
              <a href="#" className={`bg-white text-gray-900 border-2 border-brand-red px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-50 transition-colors ${karla.className}`}>
                Free SEO Report
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative pt-16">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-full lg:flex lg:items-center lg:justify-between lg:gap-x-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left max-w-2xl"
              >
                <h1 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ${karla.className}`}>
                  Custom Web Development & SEO Solutions
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Tailored for Success, our custom web development solutions integrate cutting-edge design, secure infrastructure, and SEO strategies to elevate your digital presence.
                </p>
                <div className="mt-10 flex gap-x-6">
                  <button
                    onClick={() => setIsOpen(true)}
                    className={`rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 ${karla.className}`}
                  >
                    Contact Us
                  </button>
                  <button className={`rounded-full border border-black px-6 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 ${karla.className}`}>
                    Free SEO Report
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-16 lg:mt-0"
              >
                <img
                  src="/assets/hero.png"
                  alt="Web Development Illustration"
                  className="w-full max-w-xl mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="relative py-16 sm:py-20">
          <img 
            src="/assets/quote-section.png" 
            alt="Background pattern" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <blockquote>
                <p className={`text-3xl font-semibold leading-tight text-black sm:text-4xl sm:leading-tight ${karla.className}`}>
                  "What sets us apart is our ability to transform ideas into successful, scalable solutions together."
                </p>
                <div className="mt-10">
                  <div className="mx-auto w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-white">
                    <img
                      src="/assets/jeremy.png"
                      alt="Jeremy Jones"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-8 pb-6">
                    <p className={`text-6xl sm:text-7xl ${arizonia.className} text-[#F4A261]`}>J. Jones</p>
                    <p className={`mt-6 text-xl font-medium text-black ${karla.className}`}>Jeremy Jones - Chief Architect</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto text-center">
              <h2 className={`text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl ${karla.className}`}>Our Services</h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-16 gap-y-12 sm:mt-20 lg:mx-0 lg:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
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
                whileHover={{ scale: 1.02 }}
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
                whileHover={{ scale: 1.02 }}
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
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className={`text-4xl font-bold tracking-tight text-white sm:text-5xl mb-16 ${karla.className}`}>
                What Our Clients Are Saying
              </h2>
            </div>
            <div className="relative">
              <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="text-center px-32">
                      <blockquote>
                        <p style={{ fontStyle: 'italic' }} className={`text-xl sm:text-2xl font-medium text-white leading-relaxed ${karla.className}`}>
                          "Working with Domain Driven Solutions has completely transformed my online presence. My website is faster, more visible, and ranking higher than ever. Their expertise in SEO and custom optimization not only boosted my traffic but also directly impacted my book sales. I finally have a digital presence that works for me, not against me."
                        </p>
                        <footer className="mt-10">
                          <p className={`text-3xl text-[#F4A261] ${karla.className}`}>Paul Hollis</p>
                          <p className={`mt-2 text-lg text-gray-400 ${karla.className}`}>Bestselling Author The Hollow Man Series</p>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="text-center px-32">
                      <blockquote>
                        <p style={{ fontStyle: 'italic' }} className={`text-xl sm:text-2xl font-medium text-white leading-relaxed ${karla.className}`}>
                          "The team at DDS has been instrumental in our digital transformation. Their technical expertise and strategic approach have helped us achieve remarkable growth in our online presence."
                        </p>
                        <footer className="mt-10">
                          <p className={`text-3xl text-[#F4A261] ${karla.className}`}>Sarah Chen</p>
                          <p className={`mt-2 text-lg text-gray-400 ${karla.className}`}>CEO, TechStart Solutions</p>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="text-center px-32">
                      <blockquote>
                        <p style={{ fontStyle: 'italic' }} className={`text-xl sm:text-2xl font-medium text-white leading-relaxed ${karla.className}`}>
                          "Their attention to detail and commitment to delivering results sets them apart. We've seen a significant increase in our conversion rates since implementing their recommendations."
                        </p>
                        <footer className="mt-10">
                          <p className={`text-3xl text-[#F4A261] ${karla.className}`}>Michael Roberts</p>
                          <p className={`mt-2 text-lg text-gray-400 ${karla.className}`}>Marketing Director, Global Innovations</p>
                        </footer>
                      </blockquote>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
                  <CarouselPrevious className="relative -left-20 h-12 w-12 border-2 border-white/40 bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white" />
                  <CarouselNext className="relative -right-20 h-12 w-12 border-2 border-white/40 bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

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
                  <button className={`rounded-full border border-black px-6 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 ${karla.className}`}>
                    Free SEO Report
                  </button>
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
            <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-xl">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                Contact Us
              </Dialog.Title>
              {state.succeeded ? (
                <div className="mt-4">
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
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        // Reset form after closing
                        setTimeout(() => {
                          window.location.reload();
                        }, 100);
                      }}
                      className="w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="space-y-4">
                    <div>
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
                    </div>
                    <div>
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
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Company Info */}
            <div className="space-y-8">
              <img
                className="h-16"
                src="/assets/logo-white.png"
                alt="Domain Driven Solutions"
              />
              <p className="text-sm leading-6 text-gray-300">
                Transforming ideas into successful, scalable solutions. We specialize in custom web development, SEO optimization, and digital strategy.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className={`text-sm font-semibold leading-6 text-white ${karla.className}`}>Services</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Web Development</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">SEO Optimization</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Content Strategy</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Digital Marketing</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className={`text-sm font-semibold leading-6 text-white ${karla.className}`}>Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">About</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Careers</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className={`text-sm font-semibold leading-6 text-white ${karla.className}`}>Contact</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li className="text-sm leading-6 text-gray-300">
                      Nashville, TN
                    </li>
                    <li>
                      <a href="tel:+1234567890" className="text-sm leading-6 text-gray-300 hover:text-white">+1 (234) 567-890</a>
                    </li>
                    <li>
                      <a href="mailto:info@domaindriven.solutions" className="text-sm leading-6 text-gray-300 hover:text-white">info@domaindriven.solutions</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className={`text-sm font-semibold leading-6 text-white ${karla.className}`}>Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Cookie Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className={`text-xs leading-5 text-gray-400 ${karla.className}`}>
              &copy; {new Date().getFullYear()} Domain Driven Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 