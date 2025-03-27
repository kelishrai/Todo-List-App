import "./Home.modules.css";

import { IoIosSearch } from "react-icons/io";
import { BiConversation } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import { Outlet, Link } from "react-router-dom";
import ProgramizPRO from "../../assets/ProgramizPRO.svg";

const Home = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav__items--left">
            <li className="header__nav__item">
              <Link to="/" className="header__nav__item__link">
                <img src={ProgramizPRO} />
              </Link>
            </li>
            <li className="header__nav__item">
              <Link to="/todolist" className="header__nav__item__link">
                TodoList
              </Link>
            </li>
            <li className="header__nav__item">
              <Link to="/compete" className="header__nav__item__link">
                Compete
              </Link>
            </li>
          </ul>
          <ul className="header__nav__items--right">
            <li className="header__nav__item">
              <IoIosSearch className="header__nav__item__link" />
            </li>
            <li className="header__nav__item">
              <BiConversation className="header__nav__item__link" />
            </li>
            <li className="header__nav__item">
              <IoMdNotificationsOutline className="header__nav__item__link" />
            </li>
            <li className="header__nav__item">
              <CgProfile className="header__nav__item__link" />
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">Footer</footer>
    </>
  );
};

export default Home;
