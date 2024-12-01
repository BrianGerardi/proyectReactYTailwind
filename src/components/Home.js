import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/api/placeholder/1200/600",
      title: "Espacio de trabajo moderno",
      description: "Un ambiente diseñado para inspirar y potenciar tu creatividad"
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Ubicación privilegiada",
      description: "En el corazón de la ciudad, cerca de todo lo que necesitas"
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Comunidad vibrante",
      description: "Únete a una red de profesionales innovadores y emprendedores"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section with Carousel */}
      <div className="relative h-[600px] overflow-hidden group">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center text-white text-center px-4">
          <div className="max-w-3xl transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Tu espacio de trabajo ideal</h1>
            <p className="text-xl mb-8">Descubre un ambiente profesional diseñado para impulsar tu productividad y creatividad</p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-xl active:scale-95">
              Agenda un recorrido
            </button>
          </div>
        </div>
        
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/50 hover:scale-110"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/50 hover:scale-110"
          >
            →
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-200 group">
              <svg className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Espacios Flexibles</h3>
            <p className="text-gray-600">Adapta tu espacio según tus necesidades, desde escritorios privados hasta oficinas completas</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-200 group">
              <svg className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunidad Activa</h3>
            <p className="text-gray-600">Conecta con otros profesionales y expande tu red de contactos</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-200 group">
              <svg className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Seguridad 24/7</h3>
            <p className="text-gray-600">Acceso controlado y vigilancia las 24 horas para tu tranquilidad</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-12 transform transition-all duration-500 hover:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-600 mb-8">
              Somos más que un espacio de trabajo compartido. Creemos en crear un ambiente donde las ideas florezcan, las colaboraciones surjan naturalmente y cada miembro de nuestra comunidad pueda alcanzar su máximo potencial.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg active:scale-95">
              Conoce más
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;