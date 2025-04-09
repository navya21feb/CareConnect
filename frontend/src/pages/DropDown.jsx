import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RouteDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const routes = [
    { name: 'Audio Record', path: '/audio' },
    { name: 'New Page', path: '/new' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Medication Reminder', path: '/med-reminder' },
    { name: 'Health Journal', path: '/health-journal' },
    { name: 'Posture Checker', path: '/posture-checker' },
    { name: 'Speech to English', path: '/speech-english' },
    { name: 'Prescription List', path: '/prescription-list' },
  ];

  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Navigate Pages
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg z-10">
          {routes.map((route, index) => (
            <button
              key={index}
              onClick={() => handleSelect(route.path)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {route.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RouteDropdown;
