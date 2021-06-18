import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import React from "react";
const Navi = ({ setSearchTerm, searchTerm, setGenreId }) => {
  return (
    <Navbar bg="dark" className="px-0">
      <Navbar.Brand
        className=" px-3 mx-0 text-white font-weight-bolder"
        href="#">
        Wallet
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navi;
