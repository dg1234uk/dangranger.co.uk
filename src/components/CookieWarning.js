/* global gaOptout */
import React, { Fragment } from 'react';
import getCookie from '../utils/getCookie';

const CookieWarning = () => {
  // console.log(getCookie('dg1234uk'));

  const cookie = getCookie('acceptCookies');

  let requestPermission = true;
  if (cookie === 'true' || cookie === 'false') {
    requestPermission = false;
  }

  function acceptCookies(e) {
    e.preventDefault();
    document.cookie = 'acceptCookies=true';
    requestPermission = false;
  }

  function declineCookies(e) {
    e.preventDefault();
    document.cookie = 'acceptCookies=false';
    gaOptout();
    requestPermission = false;
  }

  const divStyle = {
    position: 'fixed',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '5px',
    background: '#EEE',
    borderTop: '1px solid #888',
  };

  const buttonDivStyle = {
    width: '100px',
    display: 'flex',
  };

  const buttonStyle = {
    margin: '5px',
  };

  const CookieRequest = () => (
    <div style={divStyle} className="cookie-warn">
      <span>
        I use Google Analytics on this site to help me see how people use my
        site. To help remember you it sets cookies.{' '}
      </span>

      <div style={buttonDivStyle}>
        <a
          href="#"
          onClick={acceptCookies}
          style={buttonStyle}
          className="link-button"
        >
          Accept Cookies
        </a>
        <a
          href="#"
          onClick={declineCookies}
          style={buttonStyle}
          className="link-button"
        >
          Decline Cookies
        </a>
      </div>
    </div>
  );

  return requestPermission ? <CookieRequest /> : null;
};

export default CookieWarning;
