'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-out h-20 border-b border-gray-300/10 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl shadow-lg border-gray-300/15' 
          : 'bg-black/85 backdrop-blur-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full relative">
          <a href="#" className="flex items-center relative z-10 p-2 rounded-xl transition-all duration-300 ease-out cursor-pointer select-none hover:translate-x-1">
            <img 
              src="https://propflux.solutions/wp-content/uploads/2024/12/PropFlux-Logo-White.png" 
              alt="PropFlux" 
              className="h-38 w-auto object-contain object-center transition-transform duration-300 ease-out filter drop-shadow-lg hover:scale-105 hover:drop-shadow-2xl"
            />
          </a>

          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center gap-10 bg-white/5 px-10 py-2 rounded-full border border-gray-300/10 backdrop-blur-lg">
            <a 
              href="#hero" 
              className="text-white/70 no-underline font-normal text-sm relative transition-all duration-300 ease-out cursor-pointer uppercase tracking-wider py-2 px-5 rounded-full overflow-hidden whitespace-nowrap hover:text-gray-300 hover:-translate-y-0.5 active:scale-95"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('hero')
              }}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-white/70 no-underline font-normal text-sm relative transition-all duration-300 ease-out cursor-pointer uppercase tracking-wider py-2 px-5 rounded-full overflow-hidden whitespace-nowrap hover:text-gray-300 hover:-translate-y-0.5 active:scale-95"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('services')
              }}
            >
              Services
            </a>
            <a 
              href="#packages" 
              className="text-white/70 no-underline font-normal text-sm relative transition-all duration-300 ease-out cursor-pointer uppercase tracking-wider py-2 px-5 rounded-full overflow-hidden whitespace-nowrap hover:text-gray-300 hover:-translate-y-0.5 active:scale-95"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('packages')
              }}
            >
              Packages
            </a>
            <a 
              href="#faq" 
              className="text-white/70 no-underline font-normal text-sm relative transition-all duration-300 ease-out cursor-pointer uppercase tracking-wider py-2 px-5 rounded-full overflow-hidden whitespace-nowrap hover:text-gray-300 hover:-translate-y-0.5 active:scale-95"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('faq')
              }}
            >
              FAQ
            </a>
          </nav>

          <a 
            href="https://calendly.com/propfluxmeeting/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:block bg-gradient-to-br from-gray-300 to-gray-100 text-black py-3 px-8 rounded-full no-underline font-semibold text-sm uppercase tracking-wider transition-all duration-300 ease-out relative overflow-hidden border-2 border-transparent shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 whitespace-nowrap"
          >
            Get Started
          </a>

          <button 
            className={`lg:hidden flex flex-col justify-around w-8 h-6 bg-transparent border-none cursor-pointer p-0 z-10 ${
              isMobileMenuOpen ? 'open' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300 linear relative origin-left"></span>
            <span className="w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300 linear relative origin-left"></span>
            <span className="w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300 linear relative origin-left"></span>
          </button>
        </div>
      </header>

      <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 pt-24 ${
        isMobileMenuOpen ? 'flex flex-col items-center gap-8' : 'hidden'
      }`}>
        <a 
          href="#hero" 
          className="text-white no-underline text-2xl font-medium uppercase tracking-wider transition-all duration-300 ease-in py-4 px-8 rounded-full bg-white/5 border border-gray-300/10 hover:bg-gray-300/10 hover:-translate-y-0.5"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('hero')
          }}
        >
          Home
        </a>
        <a 
          href="#services" 
          className="text-white no-underline text-2xl font-medium uppercase tracking-wider transition-all duration-300 ease-in py-4 px-8 rounded-full bg-white/5 border border-gray-300/10 hover:bg-gray-300/10 hover:-translate-y-0.5"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('services')
          }}
        >
          Services
        </a>
        <a 
          href="#packages" 
          className="text-white no-underline text-2xl font-medium uppercase tracking-wider transition-all duration-300 ease-in py-4 px-8 rounded-full bg-white/5 border border-gray-300/10 hover:bg-gray-300/10 hover:-translate-y-0.5"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('packages')
          }}
        >
          Packages
        </a>
        <a 
          href="#faq" 
          className="text-white no-underline text-2xl font-medium uppercase tracking-wider transition-all duration-300 ease-in py-4 px-8 rounded-full bg-white/5 border border-gray-300/10 hover:bg-gray-300/10 hover:-translate-y-0.5"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('faq')
          }}
        >
          FAQ
        </a>
        <a 
          href="https://calendly.com/propfluxmeeting/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline text-2xl font-medium uppercase tracking-wider transition-all duration-300 ease-in py-4 px-8 rounded-full bg-white/5 border border-gray-300/10 hover:bg-gray-300/10 hover:-translate-y-0.5"
        >
          Get Started
        </a>
      </div>
    </>
  )
}
