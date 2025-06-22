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
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Everything You Need to Succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              We provide a comprehensive suite of tools to automate your real estate business from end to end.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 019-9m-9 9a9 9 0 00-9 9" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Social Media Automation</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  AI schedules content across all platforms at optimal times to keep your audience engaged and grow your presence.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Facebook Ads on Autopilot</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  Targeted campaigns that generate quality leads automatically, managed and optimized by our AI.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Intelligent Lead Routing</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  Automatically route prospects to the right agent at the right time based on custom rules and availability.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">AI Voice Assistant</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  A 24/7 calling system that qualifies leads and books appointments, sounding completely natural.
                </dd>
              </div>
            </dl>
          </div>
        </div>
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
