import React, { useState } from 'react';
import './GenericComponent.css';

export const GenericComponent = (props) => {
  let [hidden, setHidden] = useState(true);

  return (
    <div
      className="wrapper-component"
      //   onClick={() => setHidden(!hidden)}
    >
      <h1>{props.myElement(hidden, setHidden)}</h1>
      <div className={`generic-component ` + (hidden ? 'hidden' : '')}>
        {props.children}
      </div>
    </div>
  );
};
