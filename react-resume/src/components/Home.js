import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import profilePic from '../assets/Profile.jpg';

// Animated Gradient Background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Full-Page Container
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 10s ease infinite;
`;

// Card Container
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

// Left Section
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

  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;

// Right Section
const RightSide = styled.div`
  background-color: #fff;
  color: #333;
  width: 60%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 300;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Card>
        {/* Left Side with Profile Picture */}
        <LeftSide>
          <motion.img
            src={profilePic}
            alt="Mittul Trivedi"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Mittul Trivedi
          </motion.h1>
        </LeftSide>

        {/* Right Side with Title */}
        <RightSide>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            IT Support Professional | Full Stack Developer | IoT Specialist
          </motion.p>
        </RightSide>
      </Card>
    </HomeContainer>
  );
};

export default Home;
