import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import "../app.css";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand href="/home">Maura Fortino</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink
          className="nav-link"
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "#fffd74" : "white",
          })}
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          to="/resume"
          style={({ isActive }) => ({
            color: isActive ? "#fffd74" : "white",
          })}
        >
          Resume
        </NavLink>
        <NavLink
          className="nav-link"
          to="/projects"
          style={({ isActive }) => ({
            color: isActive ? "#fffd74" : "white",
          })}
        >
          Projects
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export { NavBar };
