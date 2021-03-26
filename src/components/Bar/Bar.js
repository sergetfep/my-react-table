import React from 'react';
import { GenericComponent } from '../GenericComponent/GenericComponent';
import { PopupComponent } from '../PopupComponent/PopupComponent';
import './Bar.css';

export const Bar = () => {
  return (
    <div className="flex1 bar">
      <PopupComponent
        myElement={(hidden, setHidden) => (
          <div onClick={() => setHidden(!hidden)}>Modal</div>
        )}
      >
        Modal window
      </PopupComponent>
      <GenericComponent
        myElement={(hidden, setHidden) => (
          <div onClick={() => setHidden(!hidden)}>Popup</div>
        )}
      >
        childrenText
      </GenericComponent>
      {/* <div>popup</div> */}
    </div>
  );
};
