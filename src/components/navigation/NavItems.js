import React, { useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import NavItem from "./NavItem";

const NavItems = () => {
  const [opened, setOpened] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => setScrollTop(e.target.documentElement.scrollTop);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <header className="main-header">
      <nav className={`w-full py-2 px-8 flex items-center justify-between main-nav ${scrollTop > 0 ? "sticky-nav" : ""}`}>
        <a href="https://www.core-rv.com/" className="main-logo">
          <img src={Logo} alt="logo" width={135} />
        </a>
        <ul className={`flex items-center justify-end ${opened ? "opened" : ""}`}>
          <NavItem link="https://www.core-rv.com/">CORE RV</NavItem>
          <NavItem link="https://www.core-rv.com/why-core/">Why CORE</NavItem>
          <NavItem link="https://www.core-rv.com/models/">Models</NavItem>
          <NavItem link="https://www.youtube.com/channel/UCNcYoh6OtBTk0X3EZFvGcfA">Videos</NavItem>
          <NavItem link="https://www.core-rv.com/contact/">Contact</NavItem>
        </ul>
        <button className="nav-btn" onClick={() => setOpened((prev) => !prev)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
};

export default NavItems;
