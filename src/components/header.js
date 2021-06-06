import React, { useContext } from "react"
import "./header.scss"
import PropTypes from "prop-types"
import AppContext from "../context/app-context"
import { Link } from "gatsby"

const Header = ({ isHome }) => {
  const { handleSearch } = isHome && useContext(AppContext)

  return (
    <header className="header">
      <Link to="/">
        <h3 className="heading">Rick And Morty</h3>
      </Link>
      {isHome ? (
        <input
          type="search"
          placeholder="Search characters by name"
          className="search-box"
          onChange={handleSearch}
        />
      ) : (
        <Link to="/">
          <span className="back-btn">Back To Home</span>
        </Link>
      )}
    </header>
  )
}

Header.propTypes = {
  isHome: PropTypes.bool,
}

export default Header
