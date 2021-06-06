import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import "../../scss/main.scss"
import "../components/layout.scss"

const Layout = ({ heading, children, isHome }) => (
  <div className="container">
    <Header heading={heading} isHome={isHome} />
    <div className="content">{children}</div>
  </div>
)

Layout.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool
}

export default Layout
