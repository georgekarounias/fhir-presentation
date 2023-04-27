import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes, ImagesUrl } from "../../helpers/AppConstants";

//import * as _ from "lodash";
import "./navbar.css";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [menuClasses, setMenuClasses] = useState("c_nav-menu c_nav-nav-menu ");

  const toggleMobileMenu = () => {
    if(window.innerWidth > 768){
      return;
    }
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    let classes = "c_nav-menu c_nav-nav-menu ";
    if (showMenu) {
      classes = classes + "c_nav-nav-menu-show";
    }
    setMenuClasses(classes);
  }, [showMenu]);

  return (
    <>
      <nav className="c_nav-navbar">
        <div className="c_nav-logo">
          <span>
            <a href="https://www.hl7.org/fhir/"><img src={ImagesUrl + "/fhir_logo.svg"} alt="NA" style={{ "height": "10%", "width": "70%"}}></img> </a> 
          </span>
        </div>
        <div className="c_nav-push-left">
          <button
            id="menu-toggler"
            data-class={"c_nav-menu-active"}
            className="c_nav-hamburger"
            onClick={() => {
              toggleMobileMenu();
            }}
          >
            <span className="c_nav-hamburger-line c_nav-hamburger-line-top"></span>
            <span className="c_nav-hamburger-line c_nav-hamburger-line-middle"></span>
            <span className="c_nav-hamburger-line c_nav-hamburger-line-bottom"></span>
          </button>

          <ul id="primary-menu" className={menuClasses}>
            <li className="c_nav-menu-item c_nav-current-menu-item">
              <Link
                to={AppRoutes.Home}
                className="c_nav-nav__link"
                onClick={() => toggleMobileMenu()}
              >
                Αρχική
              </Link>
            </li>
            <li className="c_nav-menu-item c_nav-current-menu-item">
              <Link
                to={AppRoutes.Users}
                className="c_nav-nav__link"
                onClick={() => toggleMobileMenu()}
              >
                Χρήστες
              </Link>
            </li>
           
            <li className="c_nav-menu-item c_nav-dropdown">
              <Link to={{}} className="c_nav-nav__link">
                Μετρήσεις
              </Link>
              <ul className="c_nav-sub-nav">
              <li>
                  <Link
                    to={AppRoutes.HrMeassurments}
                    className="c_nav-sub-nav__link"
                    onClick={() => toggleMobileMenu()}
                  >
                    Καρδιακός ρυθμός
                  </Link>
                </li>
                <li>
                  <Link
                    to={AppRoutes.O2Meassurments}
                    className="c_nav-sub-nav__link"
                    onClick={() => toggleMobileMenu()}
                  >
                    Οξυγόνο
                  </Link>
                </li>
                <li>
                  <Link
                    to={AppRoutes.BpMeassurments}
                    className="c_nav-sub-nav__link"
                    onClick={() => toggleMobileMenu()}
                  >
                    Πίεση αίματος
                  </Link>
                </li>
                <li>
                  <Link
                    to={AppRoutes.BgMeassurments}
                    className="c_nav-sub-nav__link"
                    onClick={() => toggleMobileMenu()}
                  >
                    Γλυκόζη αίματος
                  </Link>
                </li>
              </ul>
            </li>
            <li className="c_nav-menu-item c_nav-current-menu-item">
              <Link
                to={AppRoutes.Devices}
                className="c_nav-nav__link"
                onClick={() => toggleMobileMenu()}
              >
                Συσκευές
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
