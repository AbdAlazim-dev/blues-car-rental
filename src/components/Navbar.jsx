import { useState } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import Logo from "../images/logo/blues.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbarClick = () => {
    setIsOpen(!isOpen);
  };
  //close the mobile navbar when the user click on the link
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    // mobile navbar
    <header>
      <nav className={`mobile-navbar ${isOpen && "navbar-active"}`}>
        <ul className="mobile-navbar__links">
          <FaXmark
            className="mobile-navbar__close"
            onClick={handleNavbarClick}
          />
          <li>
            <Link onClick={closeNavbar} to="/">
              الصفحة الرئيسية
            </Link>
          </li>

          <li>
            <Link onClick={closeNavbar} to="/testimonials">
              شهادة العملاء
            </Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/models">
              الإسطول
            </Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/contact">
              تواصل معنا
            </Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/about">
              من نحن
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {/* disktop navbar */}
        <nav className="navbar">
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={Logo} alt="brand logo" className="logo" />
          </NavLink>

          <ul className="navbar__links">
            <li>
              <NavLink to="/">الصفحة الرئيسية</NavLink>
            </li>

            <li>
              <NavLink to="/testimonials">شهادة العملاء</NavLink>
            </li>
            <li>
              <NavLink to="/models">الإسطول</NavLink>
            </li>
            <li>
              <NavLink to="/contact">تواصل معنا</NavLink>
            </li>
            <li>
              <NavLink to="/about">من نحن</NavLink>
            </li>
          </ul>
          <FaBars className="mobile-device-icon" onClick={handleNavbarClick} />
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
