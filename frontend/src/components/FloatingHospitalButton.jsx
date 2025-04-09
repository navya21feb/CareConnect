// src/components/FloatingHospitalButton.jsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const FloatingHospitalButton = () => {
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const query = `https://www.google.com/maps/search/hospital/@${latitude},${longitude},14z`;
          window.open(query, '_blank');
        },
        () => {
          alert("Location access denied or unavailable.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="fixed bottom-[162px] right-10 z-50">
      <div className="relative group">
        <button
          onClick={handleClick}
          className="text-white p-3 rounded-full shadow-lg transition-all duration-300"
          style={{ backgroundColor: "#3A79D1" }}
          title="Find Nearest Hospital"
        >
          <FaMapMarkerAlt size={24} />
        </button>

        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow transition-opacity duration-300 whitespace-nowrap">
          Find Nearest Hospital
        </span>
      </div>
    </div>
  );
};

export default FloatingHospitalButton;







