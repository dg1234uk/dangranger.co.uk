import React from 'react';
import getIcon from '../utils/get-icon';

const Copyright = () => {
  const iconSize = '1.2rem';
  const marginBottom = '-0.30rem';
  return (
    <div className="copyright">
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        style={{ color: '#b6b6b6', textDecoration: 'none' }}
      >
        <svg
          className="social__svg"
          style={{ height: iconSize, width: iconSize, marginBottom }}
          viewBox={getIcon('creativecommons').viewBox}
        >
          <path d={getIcon('creativecommons').path} />
        </svg>
        &nbsp;
        <svg
          className="social__svg"
          style={{ height: iconSize, width: iconSize, marginBottom }}
          viewBox={getIcon('creativecommonsby').viewBox}
        >
          <path d={getIcon('creativecommonsby').path} />
        </svg>
        <span> Creative Commons (CC BY 4.0).</span>
      </a>
    </div>
  );
};

export default Copyright;
