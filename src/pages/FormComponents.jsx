import React from 'react';
import { InputEmail } from 'components/custom/InputEmail/InputEmail';
import { SearchBox } from 'components/custom/SearchBox/SearchBox';
import { ToggleSwitch } from 'components/custom/ToggleSwitch/ToggleSwitch';

export const FormComponents = () => (
  <div className="container">
    <InputEmail />
    <div
      className="main"
      style={{
        position: 'relative',
        background: 'white',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        height: '70px',
      }}
    >
      <SearchBox />
    </div>
    <div
      style={{
        position: 'relative',
        background: 'white',
        margin: '0',
        marginTop: '10px',
        padding: '0',
        boxSizing: 'border-box',
        height: '70px',
      }}
    >
      <ToggleSwitch />
    </div>
  </div>
);
