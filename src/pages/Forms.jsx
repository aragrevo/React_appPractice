/* eslint-disable arrow-body-style */
import React from 'react';
import { GlassSignup } from 'components/custom/GlassSignup/GlassSignup';

export const Forms = () => {
  const glassContent = {
    height: '500px',
    position: 'relative',
    // backgroundImage:
    //   '-o-linear-gradient(315deg, #ff4b2b ,#ff416c 50%, #0C1F2D 50% )',
    backgroundImage:
      'linear-gradient(135deg,#ff4b2b ,#ff416c 50%, #0C1F2D 50% )',
  };
  return (
    <div style={glassContent}>
      <GlassSignup />
    </div>
  );
};
