import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShippingFast } from "react-icons/fa";
import { MdDateRange, MdQueryBuilder, MdDashboard } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import "./Admin.css";

const SidebarIcons = () => {
  return (
    <div className="sidebaricons-container">
      <div className="datos-sidebar-icons"></div>
      <ul className="secciones-sidebar">
        <li className="listado-sidebar">
          {" "}
          <Link to="/admin" className="link-sidebar">
            <MdDashboard className="icon-sidebar-admin" />
          </Link>
        </li>
        <li className="listado-sidebar">
          {" "}
          <Link to="/admin/user" className="link-sidebar">
            <FaUser className="icon-sidebar-admin" />
          </Link>
        </li>
        <li className="listado-sidebar">
          <Link to="/admin/producto" className="link-sidebar">
            <FaShippingFast className="icon-sidebar-admin" />
          </Link>
        </li>
        <li className="listado-sidebar">
          <Link to="/admin/turnos" className="link-sidebar">
            <MdDateRange className="icon-sidebar-admin" />
          </Link>
        </li>
        <li className="listado-sidebar">
          <Link to="/admin/datosAdmin" className="link-sidebar">
            <RiAdminLine className="icon-sidebar-admin" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarIcons;
