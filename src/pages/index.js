import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/dg1234uk.png';

const IndexPage = () => (
  <div className="index-container">
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>
      <h1 className="header__title">
        <Link to="/" className="header__link">
          Dan Granger
        </Link>
      </h1>
      <p className="header__intro">
        Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed
        arcu.
      </p>
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <Link to="/" className="nav__link nav__link--active">
              Articles
            </Link>
          </li>
          <li className="nav__li">
            <Link to="about" className="nav__link">
              About me
            </Link>
          </li>
          <li className="nav__li">
            <Link to="contact" className="nav__link">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
      <div className="social">
        <ul className="social__ul">
          <li className="social__li">
            <a href="https://twitter.com" className="social__link">
              <svg viewBox="0 0 26 28" className="social__svg">
                <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z" />
              </svg>
            </a>
          </li>
          <li className="social__li">
            <a href="telegram:#" className="social__link">
              <svg viewBox="0 0 28 28" className="social__svg">
                <path d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z" />
              </svg>
            </a>
          </li>
          <li className="social__li">
            <a href="https://github.com/" className="social__link">
              <svg viewBox="0 0 26 28" className="social__svg">
                <path d="M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z" />
              </svg>
            </a>
          </li>
          <li className="social__li">
            <a href="mailto:test@test.com" className="social__link">
              <svg viewBox="0 0 28 28" className="social__svg">
                <path d="M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z" />
              </svg>
            </a>
          </li>
          <li className="social__li">
            <a
              href="https://en.wikipedia.org/wiki/RSS"
              className="social__link"
            >
              <svg viewBox="0 0 22 28" className="social__svg">
                <path d="M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z" />
              </svg>
            </a>
          </li>
          <li className="social__li">
            <a href="https://codepen.io/" className="social__link">
              <svg viewBox="0 0 31 28" className="social__svg">
                <path d="M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <span>&copy; All rights reserved.</span>
      </div>
    </header>
    <main className="post-list">
      <article className="post">
        <header className="post__info">
          <time className="post__date">August 2017</time>
          <Link className="post__tags post__link">Typography</Link>
        </header>
        <h2 className="post__title">
          <Link className="post__link">
            Humane Typography in the Digital Age
          </Link>
        </h2>
        <p className="post__excerpt">
          An Essay on Typography by Eric Gill takes the reader back to the year
          1930. The year when a conflict between two worlds came to its term.
          The machines of the industrial world finally took over the
          handicrafts.
        </p>
        <Link className="post__link">Read</Link>
      </article>
    </main>
  </div>
);

export default IndexPage;