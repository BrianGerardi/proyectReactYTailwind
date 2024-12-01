import React from 'react';
import offices from '../data/offices';

const OfficeDetails = ({ officeId, onBack }) => {
  const office = offices.find((o) => o.id === officeId);

  if (!office) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Oficina no encontrada
          </h2>
          <button
            onClick={onBack}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Volver al listado
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-64"
              src={office.image}
              alt={office.name}
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {office.name}
                </h2>
                <p className="text-green-600 font-bold text-xl mb-4">
                  {office.price}
                </p>
              </div>
              <button
                onClick={onBack}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Volver al listado
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">{office.description}</p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Características
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  WiFi de alta velocidad
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Sala de reuniones
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Café ilimitado
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Aire acondicionado
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
              Reservar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeDetails;