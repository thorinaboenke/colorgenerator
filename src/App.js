import React, { useState } from 'react';
import './App.css';
import randomcolor from 'randomcolor';

// parent of everything, get rendered in index.js
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <RandomColor />
          <DefinedColor />
        </header>
      </div>
    </>
  );
}

export default App;

function RandomColor() {
  const [randomColor, setRandomColor] = useState(randomcolor());
  return (
    <div>
      <div style={{ backgroundColor: randomColor }} className="colorField">
        <p>{randomColor}</p>
      </div>
      <button
        onClick={() => {
          setRandomColor(randomcolor());
        }}
      >
        Generate Random Color
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(randomColor);
        }}
      >
        Copy Random Color
      </button>
    </div>
  );
}

function DefinedColor() {
  const [hue, setHue] = useState('red');
  const [luminosity, setLuminosity] = useState('dark');
  const [definedColor, setDefinedColor] = useState(
    randomcolor(hue, luminosity),
  );

  const handleHueChange = (e) => {
    setHue(e);
  };
  const handleLuminosityChange = (e) => {
    setLuminosity(e);
  };

  return (
    <>
      <div>
        <div style={{ backgroundColor: definedColor }} className="colorField">
          <p>{definedColor}</p>
        </div>
        <button
          onClick={() => {
            setDefinedColor(randomcolor({ hue: hue, luminosity: luminosity }));
            console.log(hue, luminosity);
          }}
        >
          Generate Defined Color
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(definedColor);
          }}
        >
          Copy Defined Color
        </button>
      </div>
      <div>Select a Hue and Luminosity:</div>
      <div className="selectorContainer">
        <HueSelector hue={hue} handleHueChange={handleHueChange} />
        <LuminositySelector
          luminosity={luminosity}
          handleLuminosityChange={handleLuminosityChange}
        />
      </div>
    </>
  );
}
function HueSelector(props) {
  return (
    <select
      value={props.hue}
      onChange={(e) => props.handleHueChange(e.currentTarget.value)}
    >
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="green">green</option>
      <option value="yellow">yellow</option>
      <option value="orange">orange</option>
      <option value="purple">purple</option>
      <option value="pink">pink</option>
    </select>
  );
}

function LuminositySelector(props) {
  return (
    <form>
      <select
        value={props.luminosity}
        onChange={(e) => props.handleLuminosityChange(e.currentTarget.value)}
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
      </select>
    </form>
  );
}
