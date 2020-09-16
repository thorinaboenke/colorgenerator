import colorimage1 from './colorimage1.png';
import './App.css';
import React from 'react';
import RandomColorComponent from './RandomColorComponent';
import { ButtonMenu } from './ButtonMenu';

// parent of everything, get rendered in index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Image-container">
          <img
            src={colorimage1}
            style={{ width: '100%', height: '100%' }}
            alt="colorful pencils"
          />
        </div>
        <RandomColorComponent />
        <ButtonMenu />
      </header>
    </div>
  );
}

export default App;
