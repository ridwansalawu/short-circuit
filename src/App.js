import React from 'react';
import AutoLocation from './components/GoogleMaps'

import './App.css';
import Address from './components/Address';
import GoogleMaps from './components/GoogleMaps';
import Navigate from './components/Navigate';
import Weather from './components/Weather';




function App() {









  return (
    <div className="App">
    <Address />
    <GoogleMaps />
    <Navigate />
    <Weather />
    
    </div>
  );
}

export default App;