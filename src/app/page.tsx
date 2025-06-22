import Header from \"../components/Header\";

export default function Home() {
  return (
    <main className=\"min-h-screen bg-black text-white\">
      <Header />
      
      {/* Hero Section */}
      <section id=\"hero\" className=\"relative flex items-center justify-center h-screen bg-black overflow-hidden\">
        <div className=\"absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80\"></div>
        <div className=\"relative z-10 text-center px-4\">
          <h1 className=\"text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight\">
            Automate Your Real Estate Success
          </h1>
          <p className=\"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8\">
            PropFlux is the all-in-one platform designed to streamline your operations, nurture leads, and close deals faster. Spend less time on paperwork and more time growing your business.
          </p>
          <a 
            href=\"https://calendly.com/propfluxmeeting/30min\" 
            target=\"_blank\" 
            rel=\"noopener noreferrer\"
            className=\"bg-gradient-to-br from-gray-300 to-gray-100 text-black py-3 px-8 rounded-full no-underline font-semibold text-sm uppercase tracking-wider transition-all duration-300 ease-out relative overflow-hidden border-2 border-transparent shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 whitespace-nowrap\"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section - High-Fidelity Clone */}
      <section id=\"services\" className=\"py-12 md:py-24 bg-black text-gray-200 overflow-hidden\">
        <div className=\"absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(20,20,30,0.8)_0%,_rgba(0,0,0,1)_70%)] opacity-50\"></div>
        <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12 md:mb-20\">
            <h2 className=\"text-4xl md:text-5xl font-extrabold tracking-tight text-white\">
              A Fully Automated Growth Engine
            </h2>
            <p className=\"mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-400\">
              PropFlux provides an all-in-one solution to streamline your operations, nurture leads, and close more deals.
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
            {/* Service Card 1: Social Media Automation */}
            <div className=\"group relative p-0.5 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]\">
              <div className=\"relative bg-gray-900 rounded-md p-6 h-full\">
                <div className=\"mb-4\">
                  {/* Icon Placeholder */}
                   <svg className=\"h-10 w-10 text-violet-400\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                    <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 019-9m-9 9a9 9 0 00-9 9\" />
                  </svg>
                </div>
                <h3 className=\"text-xl font-bold text-white mb-2\">Social Media Automation</h3>
                <p className=\"text-gray-400\">AI schedules content across all platforms at optimal times to keep your audience engaged and grow your presence.</p>
              </div>
            </div>
            
            {/* Service Card 2: Facebook Ads */}
            <div className=\"group relative p-0.5 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]\">
              <div className=\"relative bg-gray-900 rounded-md p-6 h-full\">
                <div className=\"mb-4\">
                   <svg className=\"h-10 w-10 text-violet-400\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                    <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3\" />
                  </svg>
                </div>
                <h3 className=\"text-xl font-bold text-white mb-2\">Facebook Ads on Autopilot</h3>
                <p className=\"text-gray-400\">Targeted campaigns that generate quality leads automatically, managed and optimized by our AI.</p>
              </div>
            </div>

            {/* Service Card 3: Intelligent Lead Routing */}
            <div className=\"group relative p-0.5 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]\">
              <div className=\"relative bg-gray-900 rounded-md p-6 h-full\">
                <div className=\"mb-4\">
                  <svg className=\"h-10 w-10 text-violet-400\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                    <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M13 10V3L4 14h7v7l9-11h-7z\" />
                  </svg>
                </div>
                <h3 className=\"text-xl font-bold text-white mb-2\">Intelligent Lead Routing</h3>
                <p className=\"text-gray-400\">Automatically route prospects to the right agent at the right time based on custom rules and availability.</p>
              </div>
            </div>

            {/* Service Card 4: AI Voice Assistant */}
            <div className=\"group relative p-0.5 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]\">
              <div className=\"relative bg-gray-900 rounded-md p-6 h-full\">
                <div className=\"mb-4\">
                  <svg className=\"h-10 w-10 text-violet-400\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                    <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z\" />
                  </svg>
                </div>
                <h3 className=\"text-xl font-bold text-white mb-2\">AI Voice Assistant</h3>
                <p className=\"text-gray-400\">A 24/7 calling system that qualifies leads and books appointments, sounding completely natural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id=\"packages\" className=\"min-h-screen flex items-center justify-center\">
        <h2 className=\"text-4xl font-bold\">Packages</h2>
      </section>

      {/* FAQ Section */}
      <section id=\"faq\" className=\"min-h-screen bg-gray-900 flex items-center justify-center\">
        <h2 className=\"text-4xl font-bold\">FAQ</h2>
      </section>

    </main>
  )
} 

