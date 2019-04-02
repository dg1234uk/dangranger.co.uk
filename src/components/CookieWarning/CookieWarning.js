/* global gaOptout */
import React from 'react';
import getCookie from '../../utils/getCookie';

class CookieWarning extends React.Component {
  constructor(props) {
    super(props);
    const cookie = getCookie('acceptCookies');
    if (cookie === 'true' || cookie === 'false') {
      this.state = { requestPermission: false };
    } else {
      this.state = { requestPermission: true };
    }
  }

  setCookie = cookie => {
    // Build the expiration date string:
    const expirationDate = new Date();
    let cookieString = '';
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    // Build the set-cookie string:
    cookieString = `${cookie}; path=/; expires= + ${expirationDate.toUTCString()}`;
    // Create or update the cookie:
    document.cookie = cookieString;
  };

  acceptCookies = event => {
    event.preventDefault();
    this.setCookie('acceptCookies=true');
    this.setState({
      requestPermission: false,
    });
  };

  declineCookies = event => {
    event.preventDefault();
    this.setCookie('acceptCookies=false');
    gaOptout();
    this.setState({
      requestPermission: false,
    });
  };

  render() {
    const { requestPermission } = this.state;

    const divStyle = {
      position: 'fixed',
      width: '100%',
      left: '0',
      bottom: '0',
      padding: '0 1.25rem',
      background: '#FFDE59',
      // borderTop: '1px solid #888',
      boxShadow: '2px 0 3px 1px rgba(0, 0, 0, 0.2)',
    };

    const buttonDivStyle = {
      width: '100px',
      display: 'flex',
    };

    const buttonStyle = {
      cursor: 'pointer',
      margin: '5px',
      background: '#fff',
      fontSize: '1rem',
    };

    const CookieRequest = () => (
      <div style={divStyle} className="cookie-warn">
        <span>
          I use{' '}
          <a
            href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics
          </a>{' '}
          on this site which uses cookies. It helps me see how people, like
          yourself, use my site. If you decline, Google Analytics will be
          disabled.
        </span>

        <div style={buttonDivStyle}>
          <button
            type="button"
            onClick={this.acceptCookies}
            style={buttonStyle}
            className="link-button"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={this.declineCookies}
            style={buttonStyle}
            className="link-button"
          >
            Decline
          </button>
        </div>
      </div>
    );
    return requestPermission ? <CookieRequest /> : null;
  }
}

export default CookieWarning;
