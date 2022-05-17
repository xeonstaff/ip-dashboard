import './App.css';
import React, { useState } from 'react'

import TopBar from './components/TopBar'
import CityInfo from './components/CityInfo'
import InfoGrid from './components/InfoGrid'
import Footer from './components/InfoFooter'

function App() {
  const [ipsearch, setIPSearch] = useState()
  const [location, setLocation] = useState()

  return (
    <>
      <TopBar setIPSearch={setIPSearch} />
      <CityInfo ipsearch={ipsearch} setLocation={setLocation}/>
      <div className="footer">
      <InfoGrid location={location} />
      <Footer />
      </div>
    </>
  );
}

export default App;
