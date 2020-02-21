import React from 'react';
import './App.css';
import Routers from './routes'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="app">
      <div className="box-form d-flex justify-content-center">
        <Routers />
      </div>
    </div>
  );
}

export default App;
