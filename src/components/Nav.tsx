import Link from 'next/link';
import { Karla } from 'next/font/google';

const karla = Karla({ 
  subsets: ['latin'],
});

export default function Nav() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex py-4 justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-20 w-auto" src="/assets/updated-logo.png" alt="Domain Driven Solutions" />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex md:space-x-8">
              <Link href="/" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>HOME</Link>
              <Link href="/#services" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>SERVICES</Link>
              <Link href="/#about" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>ABOUT</Link>
              <Link href="/#contact" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>CONTACT</Link>
              <Link href="/blog" className={`text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium ${karla.className}`}>BLOG</Link>
            </div>
            <Link 
              href="/seo-report"
              className={`bg-white text-gray-900 border-2 border-brand-red px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-50 transition-colors ${karla.className}`}
            >
              Free SEO Report
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 