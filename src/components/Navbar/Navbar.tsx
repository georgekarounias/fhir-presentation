import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes, ImagesUrl, locales } from "../../helpers/AppConstants";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import i18n from "../../translation/i18n";

const Navbar = () => {

  const { t } = useTranslation();
  
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
                {t('menu.home')}
              </Link>
            </li>
            <li className="c_nav-menu-item c_nav-current-menu-item">
              <Link
                to={AppRoutes.Users}
                className="c_nav-nav__link"
                onClick={() => toggleMobileMenu()}
              >
                {t('menu.users')}
              </Link>
            </li>
           
            <li className="c_nav-menu-item c_nav-dropdown">
              <Link to={{}} className="c_nav-nav__link">
              {t('menu.meassurements')}
              </Link>
              <ul className="c_nav-sub-nav">
              <li>
                  <Link
                    to={AppRoutes.HrMeassurments}
                    className="c_nav-sub-nav__link"
                    onClick={() => toggleMobileMenu()}
                  >
                    {t('menu.heartRate')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={AppRoutes.O2Meassurments}
                    className="c_nav-sub-nav__link"
                    onClick={() => toggleMobileMenu()}
                  >
                    {t('menu.oxygenSaturation')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={AppRoutes.BpMeassurments}
                    className="c_nav-sub-nav__link"
                    onClick={() => toggleMobileMenu()}
                  >
                    {t('menu.bloodPressure')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={AppRoutes.BgMeassurments}
                    className="c_nav-sub-nav__link"
                    onClick={() => toggleMobileMenu()}
                  >
                    {t('menu.bloodGluccose')}
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
                {t('menu.devices')}
              </Link>
            </li>
            {/* <li className="c_nav-menu-item c_nav-current-menu-item">
              <Link
                to={AppRoutes.Search}
                className="c_nav-nav__link"
                onClick={() => toggleMobileMenu()}
              >
                <span><FontAwesomeIcon icon={faSearch}/></span>
              </Link>
            </li> */}
            <li className="c_nav-menu-item c_nav-dropdown">
              <Link to={{}} className="c_nav-nav__link">
              {t('menu.language')}
              </Link>
              <ul className="c_nav-sub-nav c_nav-sub-nav2">
                {Object.keys(locales).map(locale =>(
                  <li key={locale}>
                    <a style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} onClick={() => i18n.changeLanguage(locale)}>
                      {(locales as {[key: string]: {title: string}})[locale].title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
