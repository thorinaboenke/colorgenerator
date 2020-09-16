import randomcolor from 'randomcolor';
import React, { useState } from 'react';
import RadioButton from './RadioButton';
//first line sets a state that gets updated on clicking the button
//the Button Menu gets
// 1) states for hue and luminosity
// 2) handlers for changing radio buttons that can then be accesed via this.radioChangeHandler
/// 3) a render function for the Radio selectors for hue and luminosity
export class ButtonMenu extends React.Component {
  state = {
    hue: 'unselected',
    lightness: 'unselected',
  };
  radioChangeHandlerHue = (event) => {
    this.setState({
      hue: event.target.value,
    });
  };
  radioChangeHandlerLightness = (event) => {
    this.setState({
      lightness: event.target.value,
    });
  };

  // The Selectors get 'changed' and 'hue' as props form the parent (Button Menu)
  render() {
    return (
      <div>
        <p>Select a hue:</p>
        <HueSelector
          changed={this.radioChangeHandlerHue}
          hue={this.state.hue}
        />
        {/* <h2 style={{ marginTop: '50px' }}>
          The selected radio button value is => {this.state.hue}
        </h2> */}
        <p>Select a luminosity: </p>
        <LightnessSelector
          changed={this.radioChangeHandlerLightness}
          lightness={this.state.lightness}
        />
        <DefinedColorComponent
          hue={this.state.hue}
          lightness={this.state.lightness}
        />
      </div>
    );
  }
}

//The selector functions map over an array with the allowed input values to create a radio button for each. the props were given in the class Button menu, so here we access them with props.hue and props.changed
function HueSelector(props) {
  // maps over the array of allowed input values
  const allRadioButtons = allowedInput.hue.map((item, index) => {
    return (
      <div>
        <RadioButton
          changed={props.changed}
          id={index}
          isSelected={props.hue === item}
          label={item}
          value={item}
        />
      </div>
    );
  });

  //this return statement displays the array of created radio buttons (allRadioButtons)
  return (
    <div className="Apps">
      <div className="radio-btn-container" style={{ display: 'flex' }}></div>
      {allRadioButtons}
    </div>
  );
}
function LightnessSelector(props) {
  const allRadioButtons = allowedInput.lightness.map((item, index) => {
    return (
      <div>
        <RadioButton
          changed={props.changed}
          id={index}
          isSelected={props.lightness === item}
          label={item}
          value={item}
        />
      </div>
    );
  });
  return (
    <div className="Apps">
      <div className="radio-btn-container" style={{ display: 'flex' }}></div>
      {allRadioButtons}
    </div>
  );
}

// first line sets a state that gets updated on clicking the button, the states of the parent get passed down as props, so the function must be called with props.
// hue and luminosity can then be accesed via props.hue and props.luminosity and used as arguments to generate the new defined color
function DefinedColorComponent(props) {
  const [definedColor, setDefinedColor] = useState(randomcolor());
  return (
    <div>
      <button
        onClick={() =>
          setDefinedColor(
            randomcolor({ hue: props.hue, luminosity: props.lightness }),
          )
        }
      >
        Pick Defined Color
      </button>
      <button onClick={() => navigator.clipboard.writeText(definedColor)}>
        Copy Defined Color
      </button>
      <p className="output" style={{ color: definedColor }}>
        Defined Color: {definedColor}
      </p>
    </div>
  );
}

// object with the allowed input values for randomcolor()
const allowedInput = {
  hue: [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'monochrome',
  ],
  lightness: ['light', 'dark'],
};
