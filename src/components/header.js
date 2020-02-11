import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-inner">
      <Link to="/" className="logo">
        webstack<b>Top</b>
      </Link>
      <nav className="nav">
        <Link to="/html-css/basics/basics" className="nav-item html">
          HTML5/CSS3
        </Link>
        <Link
          to="/javascript/basics/basics"
          className="nav-item javascript"
        >
          JavaScript
        </Link>
        <Link to="/nodejs/basics/basics" className="nav-item nodejs">
          Node.js
        </Link>
        <Link to="/reactjs" className="nav-item reactjs">
          React.js
        </Link>
        <Link to="/git" className="nav-item git">
          Git
        </Link>
        <Link to="/blog" className="nav-item blog">
          Blog
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
