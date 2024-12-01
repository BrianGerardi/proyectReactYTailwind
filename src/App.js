import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import OfficeList from "./components/OfficeList";
import OfficeDetails from "./components/OfficeDetails";
import Home from "./components/Home";
import offices from "./data/offices";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedOfficeId, setSelectedOfficeId] = useState(null);

  const handleSelectOffice = (officeId) => {
    setSelectedOfficeId(officeId);
  };

  const handleBack = () => {
    setSelectedOfficeId(null);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedOfficeId(null);
  };

  const renderContent = () => {
    if (selectedOfficeId) {
      return <OfficeDetails officeId={selectedOfficeId} onBack={handleBack} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'offices':
        return (
          <OfficeList 
            offices={offices}
            onSelectOffice={handleSelectOffice}
          />
        );
      case 'contact':
        return <div>Página de contacto en construcción</div>;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;