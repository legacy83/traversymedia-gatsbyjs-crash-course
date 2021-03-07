import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div
      className="menu"
      style={{
        background: "#f4f4f4",
        paddingTop: "16px",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyle: "none",
          margin: `0 auto 1.45rem`,
          maxWidth: 960,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
