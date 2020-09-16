import logo from './logo.svg';
import colorimage1 from './colorimage1.jpg';
import './App.css';
import randomcolor from 'randomcolor';
import React, { useState } from 'react';
import RadioButton from './RadioButton';

const randomColor = randomcolor();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Image-container">
          <img src={colorimage1} style={{ width: '100%', height: '100%' }} />
        </div>
        <ColorComponent />
        <ButtonMenu />
      </header>
    </div>
  );
}

function ColorComponent() {
  const [color, setColor] = useState(randomcolor());
  return (
    <div>
      <p style={{ color: color }}>A random Color: {color}</p>
      <button onClick={() => setColor(randomcolor())}>Pick Random Color</button>
    </div>
  );
}

class ButtonMenu extends React.Component {
  state = {
    hue: 'unselected',
  };

  radioChangeHandler = (event) => {
    this.setState({
      hue: event.target.value,
    });
  };

  render() {
    return (
      <div className="Apps">
        <div className="radio-btn-container" style={{ display: 'flex' }}>
          <RadioButton
            changed={this.radioChangeHandler}
            id="1"
            isSelected={this.state.hue === 'red'}
            label="red"
            value="red"
          />

          <RadioButton
            changed={this.radioChangeHandler}
            id="2"
            isSelected={this.state.hue === 'blue'}
            label="blue"
            value="blue"
          />
          <RadioButton
            changed={this.radioChangeHandler}
            id="2"
            isSelected={this.state.hue === 'green'}
            label="green"
            value="green"
          />
        </div>

        <h2 style={{ marginTop: '50px' }}>
          The selected radio button value is => {this.state.hue}
        </h2>
      </div>
    );
  }
}

export default App;
