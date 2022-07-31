import * as React from "react";
import { Link } from "gatsby";
import { container, navLinks, navLinkItem, navLinkText, heading } from "../components/layout.module.css"

const navbarLinks = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" }
];

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
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
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
