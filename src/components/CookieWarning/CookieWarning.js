/* global gaOptout */
import React from 'react';
import getCookie from '../../utils/getCookie';
import Styles from './CookieWarning.module.css';

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

    const CookieRequest = () => (
      <div className={Styles.cookieWarning}>
        <span>
          This site uses cookies for{' '}
          <a
            href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics
          </a>
          . By continuing to browse this site, you agree to this use.
        </span>

        <div className={Styles.cookieWarning__btnContainer}>
          <button
            type="button"
            onClick={this.acceptCookies}
            className={Styles.cookieWarning__btns}
          >
            Accept
          </button>
          <button
            type="button"
            onClick={this.declineCookies}
            className={Styles.cookieWarning__btns}
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
