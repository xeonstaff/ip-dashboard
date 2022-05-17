import './App.css';
import React, { useState } from 'react'
import CityInfo from './components/CityInfo'

import TopBar from './components/TopBar'
import Footer from './components/InfoFooter'



function App() {
  const [search, setSearch] = useState()

  return (
    <>
      <TopBar setSearch={setSearch} />
      <CityInfo search={search} />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
