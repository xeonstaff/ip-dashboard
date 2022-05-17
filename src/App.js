import './App.css';
import React, { useState } from 'react'
import CityInfo from './components/CityInfo'

import TopBar from './components/TopBar'
import Footer from './components/InfoFooter'



function App() {
  const [ipsearch, setIPSearch] = useState()

  return (
    <>
      <TopBar setIPSearch={setIPSearch} />
      <CityInfo ipsearch={ipsearch} />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
