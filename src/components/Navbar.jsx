import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLocalLibrary } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, sethamburger] = useState(false);
  const [darkmode, setdarkmode] = useState(false);

  document.body.classList = darkmode ? "dark" : "";

  const HandleHamburger = () => {
    sethamburger(!hamburger);
  };
  return (
    <div className="navbar">
      <ul className="main">
        <span className="logo">
          <img src="/Myblog.png" alt="myblog" />
        </span>

        <div className="links">
          <li>
            <Link to="/">
              <GoHomeFill /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaRegQuestionCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/create">
              <IoCreate /> Create
            </Link>
          </li>
          <li>
            <Link to="/help">
              <MdLocalLibrary /> Help-And-Support
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setdarkmode(!darkmode);
              }}
              className="dark-mode"
            >
              {darkmode ? <MdSunny /> : <IoMdMoon />}
            </button>
          </li>
        </div>
      </ul>

      {/* For Mobile Users */}
      <div className="mobileContainer">
        <div className={`Default ${hamburger ? "SliderContainer" : ""}`}>
          <span className="exit" onClick={HandleHamburger}>
            <RxCross2 />
          </span>

          <ul className="main-mobile">
            <li>
              <Link to="/">
                <GoHomeFill /> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaRegQuestionCircle /> About
              </Link>
            </li>
            <li>
              <Link to="/create">
                <IoCreate /> Create
              </Link>
            </li>
            <li>
              <Link to="/help">
                <MdLocalLibrary /> Help-And-Support
              </Link>
            </li>
            <li style={{textAlign:"center"}}>
              <button
                onClick={() => {
                  setdarkmode(!darkmode);
                }}
                className="dark-mode" style={{ color:"grey"}}
              >
                {darkmode ? <MdSunny /> : <IoMdMoon />}
              </button>
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="hamburger" onClick={HandleHamburger}>
            <RxHamburgerMenu />
          </span>
          <span className="logo">
            <img src="/Myblog.png" alt="myblog" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
