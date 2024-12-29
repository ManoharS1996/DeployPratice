// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaBeer, FaFacebook, FaHome, FaInstagram, FaTwitter, FaTwitterSquare } from 'react-icons/fa';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1>Mall Connect</h1>
      </Link>
      <NavLinks>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
      </NavLinks>
      <SocialIcons>
        <a href="https://facebook.com"><FaFacebook color="white" /></a>
        <a href="https://instagram.com"><FaInstagram color="white" /></a>
        <a href="https://twitter.com"><FaTwitterSquare color="white" /></a>
      </SocialIcons>
    </NavbarContainer>
  );
};

export default Navbar;
