import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePic from '../assets/Profile.jpg';

// Keyframes for animated gradient background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Full-page container with animated gradient background
const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 10s ease infinite;
`;

// Card with gradient border
const Card = styled.div`
  display: flex;
  border: 6px solid;
  border-image: linear-gradient(45deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF) 1;
  border-radius: 20px;
  width: 900px;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
`;

// Left side with profile picture
const LeftSide = styled.div`
  background-color: #4D96FF;
  color: #fff;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #fff;
    object-fit: cover;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

// Right side with contact details
const RightSide = styled.div`
  background-color: #fff;
  color: #333;
  width: 60%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1.5rem;

    a {
      color: #333;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #4D96FF;
        text-decoration: underline;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Card>
        {/* Left Side with Profile Picture */}
        <LeftSide>
          <img src={profilePic} alt="Mittul Trivedi" />
          <h2>Mittul Trivedi</h2>
        </LeftSide>

        {/* Right Side with Contact Info */}
        <RightSide>
          <div className="item">
            <FaEnvelope />
            <a href="mailto:mittultrivedi90@gmail.com">mittultrivedi90@gmail.com</a>
          </div>
          <div className="item">
            <FaPhone />
            <a href="tel:+16473253911">+1 647-325-3911</a>
          </div>
          <div className="item">
            <FaLinkedin />
            <a href="https://linkedin.com/in/mittul-t-b77414bb" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="item">
            <FaGithub />
            <a href="https://github.com/Mitul98" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </RightSide>
      </Card>
    </ContactContainer>
  );
};

export default Contact;
