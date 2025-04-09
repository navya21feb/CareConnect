// src/components/EmergencySection.jsx
import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const EmergencySection = () => {
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("Help! I need assistance.");
  const [saveContact, setSaveContact] = useState(false);
  const [savedContacts, setSavedContacts] = useState([]);
  const [useNewContact, setUseNewContact] = useState(true);
  const [hovered, setHovered] = useState(false);

  const messages = [
    "Help!",
    "I had an accident and I'm going to the hospital.",
    "Please call me immediately.",
  ];

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
    setSavedContacts(contacts);
  }, []);

  const saveToLocalStorage = (number) => {
    let updated = [...savedContacts, number];
    updated = [...new Set(updated)];
    localStorage.setItem("emergencyContacts", JSON.stringify(updated));
    setSavedContacts(updated);
  };

  const handleSendLocation = () => {
    if (!phone || phone.length !== 10 || isNaN(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const fullPhone = `+91${phone}`;
    const waPhone = `91${phone}`;
    const encodedMessage = encodeURIComponent(message || "I need help. Please track my location.");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const finalMessage = `${decodeURIComponent(encodedMessage)} My location: ${mapsLink}`;

        const whatsappLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(finalMessage)}`;
        const smsLink = `sms:${fullPhone}?body=${encodeURIComponent(finalMessage)}`;

        window.open(whatsappLink, "_blank");
        window.location.href = smsLink;

        setTimeout(() => {
          alert("WhatsApp and SMS opened. Please press 'Send' in both apps to notify your emergency contact.");
        }, 1500);

        if (saveContact && !savedContacts.includes(phone)) {
          saveToLocalStorage(phone);
        }
      },
      (error) => {
        console.error("Location error:", error);
        alert("Unable to fetch your location. Please enable location services or grant permission.");
      }
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "99px",
        right: "35px",
        zIndex: 999,
      }}
    >
      <button
        onClick={() => setShowForm(!showForm)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: "#3A79D1",
          color: "white",
          height: "50px",
          width: hovered ? "160px" : "50px",
          padding: "10px 15px",
          borderRadius: "50px",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row-reverse",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          cursor: "pointer",
          transition: "width 0.3s ease, padding 0.3s ease",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <FaLocationArrow size={20} style={{ marginLeft: hovered ? "8px" : "0px" }} />
        {hovered && <span>Send Location</span>}
      </button>

      {showForm && (
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "260px",
          }}
        >
          {savedContacts.length > 0 && (
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontWeight: "bold" }}>Use saved contact:</label>
              <select
                onChange={(e) => {
                  setPhone(e.target.value);
                  setUseNewContact(false);
                }}
                style={{ width: "100%", padding: "5px", marginTop: "5px" }}
              >
                <option value="">-- Select Saved Contact --</option>
                {savedContacts.map((num, idx) => (
                  <option key={idx} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <div style={{ marginTop: "5px" }}>
                <input
                  type="checkbox"
                  checked={useNewContact}
                  onChange={(e) => {
                    setUseNewContact(e.target.checked);
                    if (e.target.checked) setPhone("");
                  }}
                />{" "}
                Use new number
              </div>
            </div>
          )}

          {useNewContact && (
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ marginBottom: "10px", width: "100%", padding: "5px" }}
            />
          )}

          <select
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ marginBottom: "10px", width: "100%", padding: "5px" }}
          >
            {messages.map((msg, idx) => (
              <option key={idx} value={msg}>
                {msg}
              </option>
            ))}
          </select>

          {useNewContact && (
            <div style={{ marginBottom: "10px" }}>
              <input
                type="checkbox"
                checked={saveContact}
                onChange={(e) => setSaveContact(e.target.checked)}
              />{" "}
              Save this contact as emergency contact
            </div>
          )}

          <button
            onClick={handleSendLocation}
            style={{
              backgroundColor: "#3A79D1",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            Send via WhatsApp & SMS
          </button>
        </div>
      )}
    </div>
  );
};

export default EmergencySection;














