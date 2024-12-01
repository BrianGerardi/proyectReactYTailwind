import React, { useState } from "react";
import OfficeCard from "./OfficeCard";

function OfficeList({ offices, onSelectOffice }) {
  const [search, setSearch] = useState("");

  const filteredOffices = offices.filter((office) =>
    office.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar oficinas..."
          className="border rounded-lg p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffices.map((office) => (
          <OfficeCard 
            key={office.id} 
            office={office} 
            onSelect={onSelectOffice}  // Pasamos directamente la función
          />
        ))}
      </div>
    </div>
  );
}

export default OfficeList;