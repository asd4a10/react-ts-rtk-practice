import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className={"help-layout"}>
      <h2>Website help</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
        distinctio?
      </p>

      <nav>
        <NavLink to={"faq"}>FAQ</NavLink>
        <NavLink to={"contact"}>CONTACT</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
