import React from 'react';
import AutoLocation from './components/GoogleMaps'
import { Provider } from 'react-redux'

import './App.css';
import Address from './components/Address';
import GoogleMaps from './components/GoogleMaps';
import Navigate from './components/Navigate';
import Weather from './components/Weather';
import store from './store'


// const store = createStore(() => [], {}, applyMiddleware())


function App() {









  return (
    <Provider store={store}>
      <div className="App">
        <Address />
        <GoogleMaps />
        <Navigate />
        <Weather />
      </div>
    </Provider>
  );
}

export default App;