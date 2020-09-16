import React, { useState } from 'react';
import randomcolor from 'randomcolor';

function RandomColorComponent() {
  const [color, setColor] = useState(randomcolor());
  return (
    <div>
      <button onClick={() => setColor(randomcolor())}>Pick Random Color</button>
      <button onClick={() => navigator.clipboard.writeText(color)}>
        Copy Random Color
      </button>
      <p className="output" style={{ color: color }}>
        Random Color: {color}
      </p>
    </div>
  );
}

export default RandomColorComponent;
