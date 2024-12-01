import React from "react";

function OfficeCard({ office, onSelect }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <img
        src={office.image}
        alt={office.name}
        className="rounded-md w-full h-32 object-cover"
      />
      <h3 className="text-xl font-bold mt-2">{office.name}</h3>
      <p className="text-gray-700">{office.description}</p>
      <p className="text-green-600 font-bold mt-2">{office.price}</p>
      <button
        onClick={() => onSelect(office.id)}
        className="mt-4 block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg"
      >
        Ver detalles
      </button>
    </div>
  );
}

export default OfficeCard;