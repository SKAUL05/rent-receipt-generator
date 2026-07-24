import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import FormContainer from "./containers/FormContainer";
import PreviewPanel from "./components/PreviewPanel";
import { Analytics } from '@vercel/analytics/react';
import "./index.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('rrg_theme') || 'light';
  });

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rrg_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-wrapper">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="app-main">
        <div className="app-columns">
          <FormContainer onFormChange={setFormData} />
          <div className="preview-sticky">
            <PreviewPanel formData={formData} />
          </div>
        </div>
      </main>
      <Analytics />
    </div>
  );
}

export default App;
