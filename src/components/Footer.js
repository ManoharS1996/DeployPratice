// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Mall Connect</p>
      <p>Terms and Conditions</p>
      <p><span>₹</span> Indian Rupee</p>
    </FooterContainer>
  );
};

export default Footer;
