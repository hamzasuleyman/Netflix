import React, { useEffect, useState } from "react";
import "./navbar.css";
import netflix from "../../images/logo.svg";
import avatar from "../../images/avatar.png";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflix} alt="Netflix Logo" />
      {/* <div className="netflix__narbar__container__button">
        <div className="sign-up"><p>Log in</p></div>
        <div className="sign-up"><button>Sign Up</button></div>
      </div> */}

      <img className="nav__avatar" src={avatar} alt="Avatar logo" />
    </div>
  );
}

export default Navbar;
