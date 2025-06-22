import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            PropFlux
          </h1>
          <p className="text-xl text-gray-300">
            The future of property management.
          </p>
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
