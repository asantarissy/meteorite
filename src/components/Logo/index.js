import React from 'react';
import meteoriteLogo from './logo-white.png';

export default function LoadingIcon ({ style, size, ...props }) {
  return (
    <div style={{
      background: `url(${meteoriteLogo}) center center no-repeat`,
      backgroundSize: 'contain',
      position: 'relative',
      height: size,
      width: size,
      ...style
    }} {...props} />
  );
}
