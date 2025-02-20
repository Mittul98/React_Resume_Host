import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #00bfff;
  }
`;

const NavigationBar = () => {
  return (
    <Navbar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/ProfessionalJourney">Professional Journey</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Navbar>
  );
};

export default NavigationBar;
