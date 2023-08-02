import React, { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout: FC = () => {
  return (
    <div className={"root-layout"}>
      <header>
        <nav>
          <h1>COMPANY</h1>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/users"}>Users</NavLink>
          <NavLink to={"/todos"}>Todos</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/help"}>Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
