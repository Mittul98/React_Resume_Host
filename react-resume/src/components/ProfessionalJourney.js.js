import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Background Animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Full Page Layout
const ResumeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 10s ease infinite;
  padding: 3rem;
`;

// Card Layout
const Card = styled.div`
  width: 900px;
  border: 6px solid;
  border-image: linear-gradient(45deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF) 1;
  border-radius: 20px;
  background: #fff;
  color: #333;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  text-align: left;
  max-height: 90%;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #4D96FF #fff;
`;

// Title Styling
const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #4D96FF;
  text-align: center;
`;

// Section Titles
const SectionTitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: #374151;
  margin-bottom: 1rem;
`;

// List Styles
const List = styled(motion.ul)`
  padding-left: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ProfessionalJourney = () => {
  return (
    <ResumeContainer>
      <Card>
        {/* Title */}
        <Title
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Professional Journey
        </Title>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <SectionTitle>Education</SectionTitle>
          <List>
            <li>Internet of Things and Machine Intelligence - Sheridan College (2023)</li>
            <li>Mobile Applications Development - Centennial College (2022-2023)</li>
            <li>Bachelor of Computer Applications - Ganpat University (2017-2020)</li>
          </List>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <SectionTitle>Professional Experience</SectionTitle>
          <List>
            <li><strong>IT Support (Remote, Part-Time)</strong> - CIP Study Abroad (2024-Present)</li>
            <li><strong>Web Designer & Developer</strong> - CMExpertise, Gujarat, India (2020-2022)</li>
            <li><strong>Web Development Trainee</strong> - CMExpertise (2019-2020)</li>
          </List>
        </motion.div>
      </Card>
    </ResumeContainer>
  );
};

export default ProfessionalJourney;
