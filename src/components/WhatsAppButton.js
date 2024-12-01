import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "XXXXXXXXXX"; // Reemplaza con el número del coworking
  const message = encodeURIComponent("¡Hola! Me gustaría agendar un recorrido por el coworking.");
  
  const getWhatsAppLink = () => {
    // Detecta si el dispositivo es móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Construye el enlace según el dispositivo
    return isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-xl active:scale-95"
    >
      Agenda un recorrido
    </a>
  );
};

export default WhatsAppButton;