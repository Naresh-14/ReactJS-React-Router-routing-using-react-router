import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li id="nav-link1">
          <Link to="/">Home</Link>
        </li>
        <li id="nav-link2">
          <Link to="/about">About</Link>
        </li>
        <li id="nav-link3">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
