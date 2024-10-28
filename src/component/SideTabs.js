import React, { useState } from 'react';
import '../styles/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('lexicon');
  const [dropdownContent, setDropdownContent] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setDropdownContent(''); // Reset dropdown content when switching tabs
  };

  const handleDropdownClick = (content) => {
    setDropdownContent(content);
  };

  return (
    <div className="app-container">
      {/* Sidebar with Tabs */}
      <div className="tabs-container">
        <button className={`tab-button ${activeTab === 'lexicon' ? 'active' : ''}`} onClick={() => handleTabClick('lexicon')}>
          <span className="icon">📘</span> Immobilienlexikon
          <span className="ki-badge">KI</span>
          <p className="description">Den Wert Ihres Hauses schätzen lassen.</p>
        </button>
        <button className={`tab-button ${activeTab === 'valuation' ? 'active' : ''}`} onClick={() => handleTabClick('valuation')}>
          <span className="icon">📘</span> Preisschätzung
          <span className="ki-badge">KI</span>
          <p className="description">Den Wert Ihres Hauses schätzen lassen.</p>
        </button>
        <button className={`tab-button ${activeTab === 'checklist' ? 'active' : ''}`} onClick={() => handleTabClick('checklist')}>
          <span className="icon">📄</span> Checklisten
          <span className="pdf-badge">PDF</span>
          <p className="description">Praktische Checklisten für jeden Schritt.</p>
        </button>
        <button className={`tab-button ${activeTab === 'advisor' ? 'active' : ''}`} onClick={() => handleTabClick('advisor')}>
          <span className="icon">📘</span> Ratgeber
          <p className="description">Immobilien-Expertenrat für Eigentümer.</p>
        </button>
        <button className={`tab-button ${activeTab === 'navigator' ? 'active' : ''}`} onClick={() => handleTabClick('navigator')}>
          <span className="icon">📘</span> Mandatsnavigator
          <p className="description">Verständlich zum Verkaufsabschluss.</p>
        </button>
        <button className={`tab-button ${activeTab === 'dreamFinder' ? 'active' : ''}`} onClick={() => handleTabClick('dreamFinder')}>
          <span className="icon">📘</span> Wohntraumfinder
          <span className="ki-badge">KI</span>
          <p className="description">Zum Traumheim mit KI-Unterstützung.</p>
        </button>
      </div>

      {/* Right Side Content */}
      <div className="content-container">
        <h2>{activeTab === 'lexicon' && 'Immobilienlexikon'}
            {activeTab === 'valuation' && 'Preisschätzung'}
            {activeTab === 'checklist' && 'Checklisten'}
            {activeTab === 'advisor' && 'Ratgeber'}
            {activeTab === 'navigator' && 'Mandatsnavigator'}
            {activeTab === 'dreamFinder' && 'Wohntraumfinder'}
        </h2>

        {/* Dropdown Buttons */}
        <div className="dropdowns">
          <div className="dropdown">
            <button className="dropdown-button">Option 1</button>
            <div className="dropdown-content">
              <button onClick={() => handleDropdownClick('Option 1 Content')}>Option 1.1</button>
              <button onClick={() => handleDropdownClick('Option 1 Content')}>Option 1.2</button>
              <button onClick={() => handleDropdownClick('Option 1 Content')}>Option 1.3</button>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Option 2</button>
            <div className="dropdown-content">
              <button onClick={() => handleDropdownClick('Option 2 Content')}>Option 2.1</button>
              <button onClick={() => handleDropdownClick('Option 2 Content')}>Option 2.2</button>
              <button onClick={() => handleDropdownClick('Option 2 Content')}>Option 2.3</button>
            </div>
          </div>
        </div>

        {/* Display Dropdown Content */}
        <p>{dropdownContent}</p>
      </div>
    </div>
  );
};

export default Tabs;
