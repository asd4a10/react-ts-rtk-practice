import React from "react";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div>
      <h3>Careers Page</h3>
      <br />
      <Outlet />
    </div>
  );
};

export default CareersLayout;
