import React, { useState } from 'react';
import './PopupComponent.css';

export const PopupComponent = (props) => {
  let [hidden, setHidden] = useState(true);

  return (
    <div>
      <h1>{props.myElement(hidden, setHidden)}</h1>
      <div
        className={'backdrop ' + (hidden ? 'hidden' : '')}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            setHidden(true);
          }
        }}
      >
        <div className="wrapper-component1">{props.children}</div>
      </div>
    </div>
  );
};
