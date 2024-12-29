// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h2>Welcome to Mall Connect</h2>
      <p>Your one-stop shop for everything</p>
    </HeaderContainer>
  );
};

export default Header;
