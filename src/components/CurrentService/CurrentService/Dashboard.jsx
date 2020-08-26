import React from "react";
import ServiceInfo from "./ServiceInfo";
import NavbarDashboard from '../../auth/Navbars/NavbarDashboad';

const ServiceIndex = () => {
  return (
    <div>
      <NavbarDashboard />
      <ServiceInfo></ServiceInfo>

    </div>
  );
};

export default ServiceIndex;