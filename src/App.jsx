import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import Footer3 from './components/Footer3'
import PrivacyPolicy from './components/Privacypolicy'
import TermsOfService from './components/TermsAndConditions'
import ContactComponent from './components/Contact'


function App() {
  return (
    <Router>
     

      <Routes>
        
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsOfService />} />
      </Routes>

     
    </Router>
  )
}

export default App
