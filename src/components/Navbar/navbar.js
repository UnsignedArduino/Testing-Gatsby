import * as React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./navbar.module.css";

const navbarLinks = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" }
];

const Navbar = () => {
  return (
    <ul className={navLinks}>
      {
        navbarLinks.map(({ path, title }) => (
          <li className={navLinkItem} key={path}>
            <Link to={path} className={navLinkText}>
              {title}
            </Link>
          </li>
          )
        )
      }
    </ul>
  );
};

export default Navbar;
