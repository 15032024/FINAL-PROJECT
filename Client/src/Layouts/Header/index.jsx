import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
const Header = () => {
  return (
  <header>
<div className="container">

    <div className="header">
        <div className="header-logo"><h2>EATWELL</h2></div>
        <div className="header-nav">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"> Home</NavLink>
                    </li>
                    <li>
                        <NavLink > About</NavLink>
                    </li>
                    <li>
                        <NavLink> Offer</NavLink>
                    </li>
                    <li>
                        <NavLink> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink> News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite-page"> Favorite</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-page"> AddPage</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>

  </header>
  )
}

export default Header