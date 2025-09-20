import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import DestinationCards from './components/sections/DestinationCards'
import Features from './components/sections/Features'
import Contacts from './components/sections/Contacts'
import NotFoundPage from './components/sections/NotFound'
import { useRef } from 'react'
import WhatsAppFloat from './components/sections/WhatsAppFloat'

function App() {
  const destinationsRef = useRef(null);

  const scrollToDestinations = () => {
    destinationsRef.current?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  return (
    <Router>
      <Routes>
        {/* Pages with Layout (normal pages) */}
        <Route path="/" element={
          <Layout>
            <Hero onExploreClick={scrollToDestinations}/>
            <DestinationCards ref={destinationsRef} />
            <Features />
          </Layout>
        } />
        
        <Route path="/contacts" element={
          <Layout>
            <Contacts />
          </Layout>
        } />

        {/* 404 - No Layout (full screen) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
       <WhatsAppFloat 
        phoneNumber="916362040932" 
        message="Hello! I'm interested in your travel services."
      />
    </Router>
  )
}

export default App
