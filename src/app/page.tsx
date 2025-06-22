import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Automate Your Real Estate Success
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            PropFlux is the all-in-one platform designed to streamline your operations, nurture leads, and close deals faster. Spend less time on paperwork and more time growing your business.
          </p>
          <a 
            href="https://calendly.com/propfluxmeeting/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-gray-300 to-gray-100 text-black py-3 px-8 rounded-full no-underline font-semibold text-sm uppercase tracking-wider transition-all duration-300 ease-out relative overflow-hidden border-2 border-transparent shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 whitespace-nowrap"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl font-bold">Services</h2>
      </section>

      {/* Packages Section */}
      <section id="packages" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Packages</h2>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl font-bold">FAQ</h2>
      </section>

    </main>
  )
}
