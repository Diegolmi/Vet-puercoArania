import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShippingFast } from "react-icons/fa";
import { MdDateRange, MdDashboard } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import logo from "../../assets/img/logo.png";

const SidebarAdmin = () => {
  return (
    <div className="sidebar-container">
      <div className="datos-sidebar">
        <Link to="/">
          <img src={logo} alt="Logo veterinaria" className="logo" />
        </Link>
      </div>
      <ul className="secciones-sidebar">
        <li className="listado-sidebar">
          <MdDashboard className="icon-sidebar-admin" />{" "}
          <Link to="/admin" className="link-sidebar">
            Inicio
          </Link>
        </li>
        <li className="listado-sidebar">
          <FaUser className="icon-sidebar-admin" />{" "}
          <Link to="/admin/user" className="link-sidebar">
            Usuarios
          </Link>
        </li>
        <li className="listado-sidebar">
          <FaShippingFast className="icon-sidebar-admin" />
          <Link to="/admin/producto" className="link-sidebar">
            Productos
          </Link>
        </li>
        <li className="listado-sidebar">
          <MdDateRange className="icon-sidebar-admin" />
          <Link to="/admin/turnos" className="link-sidebar">
            Turnos
          </Link>
        </li>
        <li className="listado-sidebar">
          <RiAdminLine className="icon-sidebar-admin" />
          <Link to="/admin/datosAdmin" className="link-sidebar">
            Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
