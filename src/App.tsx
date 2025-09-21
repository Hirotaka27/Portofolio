import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppPrelander from './WaPreleander'; 
import AdsenseArticle from '../src/view/AdsenseArticle';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WhatsAppPrelander />} /> 
        <Route path="/adsense-article" element={<AdsenseArticle />} />
      </Routes>
    </Router>
  );
}

export default App;