import React, { useEffect, useState } from "react";
import Group12 from "../assets/Group12.svg";
import Hamburger from "./Hamburger";

const Navbar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [showMobileNav, setShowMobileNav] = useState(false)

    const navBarStyle  = {
      display: "flex",
      flexDirection: "row",
      border: "none",
      position:"initial"
    }
    
    const burgerToggleStyle = {
      display: hamburgerOpen? "flex" : "none",
      height: "234px",
      width: "100%",
      marginTop: "50px",
      position: "absolute",
      backgroundColor: "#FFFFFF"
    }
    

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
 }

 useEffect(() => {
  if (window.innerWidth > 766) {
    setShowMobileNav(false);
  } else if (window.innerWidth < 767) {
    setShowMobileNav(true);
  }
}, []);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 766) {
      setShowMobileNav(false);
    } else if (window.innerWidth < 767) {
      setShowMobileNav(true);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

 return (
    <div className="navbarWrapper">
      <div>
        <img className="group12" src={Group12} alt="ratepunk logo" />
      </div>
      <ul style={showMobileNav? burgerToggleStyle : navBarStyle}>
        <li><a href="#">Chrome Extension</a></li>
        <li><a href="#">Price Comparison</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen}></Hamburger>
      </div>
    </div>
  );
};

export default Navbar;
