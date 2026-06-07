import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={menuOpen ? "nav on" : "nav"}>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)}><span></span></button>
        <div className="menu_list">
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/board">Board</NavLink></li>
            </ul>
        </div>
    </div>
  );
}

export default NavBar;