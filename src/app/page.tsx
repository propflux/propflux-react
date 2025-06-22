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

      {/* Packages Section - High-Fidelity Clone */}
      <section id=\"packages\" className=\"py-12 md:py-24 bg-black\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12 md:mb-20\">
            <h2 className=\"text-4xl md:text-5xl font-extrabold tracking-tight text-white\">
              Choose Your Plan
            </h2>
            <p className=\"mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-400\">
              Simple, transparent pricing for businesses of all sizes.
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
            {/* Package 1: Core */}
            <div className=\"border border-gray-700 rounded-lg p-8 flex flex-col text-center shadow-lg hover:shadow-violet-500/20 transition-shadow duration-300\">
              <h3 className=\"text-2xl font-semibold text-white\">CORE</h3>
              <p className=\"mt-2 text-gray-400\">Perfect for solo agents getting started.</p>
              <div className=\"mt-6\">
                <span className=\"text-5xl font-bold text-white\">$299</span>
                <span className=\"text-lg text-gray-400\">/mo</span>
              </div>
              <ul className=\"mt-8 space-y-4 text-left\">
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Essential automation tools</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Lead reactivation & follow-up</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>CRM integration</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Community support</li>
              </ul>
              <div className=\"mt-auto pt-8\">
                <a href=\"https://calendly.com/propfluxmeeting/30min\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300\">Get Started</a>
              </div>
            </div>

            {/* Package 2: Premier */}
            <div className=\"border-2 border-violet-500 rounded-lg p-8 flex flex-col text-center shadow-2xl shadow-violet-500/20 scale-105\">
              <h3 className=\"text-2xl font-semibold text-white\">PREMIER</h3>
              <p className=\"mt-2 text-violet-400\">For growing teams scaling up.</p>
              <div className=\"mt-6\">
                <span className=\"text-5xl font-bold text-white\">$599</span>
                <span className=\"text-lg text-gray-400\">/mo</span>
              </div>
              <ul className=\"mt-8 space-y-4 text-left\">
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Everything in Core</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Social media automation suite</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Facebook ad management</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Monthly strategy calls</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Priority support</li>
              </ul>
              <div className=\"mt-auto pt-8\">
                <a href=\"https://calendly.com/propfluxmeeting/30min\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"w-full bg-violet-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-violet-600 transition-colors duration-300\">Get Started</a>
              </div>
            </div>

            {/* Package 3: Enterprise */}
            <div className=\"border border-gray-700 rounded-lg p-8 flex flex-col text-center shadow-lg hover:shadow-violet-500/20 transition-shadow duration-300\">
              <h3 className=\"text-2xl font-semibold text-white\">ENTERPRISE</h3>
              <p className=\"mt-2 text-gray-400\">For large organizations requiring custom solutions.</p>
              <div className=\"mt-6\">
                <span className=\"text-4xl font-bold text-white\">Custom</span>
              </div>
              <ul className=\"mt-8 space-y-4 text-left\">
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Everything in Premier</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>AI Chat Bot included</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Bi-weekly strategy calls</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>3-hour response time</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Custom-built features</li>
                <li className=\"flex items-center\"><svg className=\"w-6 h-6 text-green-500 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>Dedicated account manager</li>
              </ul>
              <div className=\"mt-auto pt-8\">
                <a href=\"https://calendly.com/propfluxmeeting/30min\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300\">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id=\"faq\" className=\"min-h-screen bg-gray-900 flex items-center justify-center\">
        <h2 className=\"text-4xl font-bold\">FAQ</h2>
      </section>

    </main>
  )
} 

