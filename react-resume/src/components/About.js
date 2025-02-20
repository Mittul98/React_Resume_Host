import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Animated Gradient Background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Full-page container with animated background
const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 10s ease infinite;
  text-align: center;
  padding: 3rem;
`;

// Card layout for the content
const Card = styled.div`
  border: 6px solid;
  border-image: linear-gradient(45deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF) 1;
  border-radius: 20px;
  width: 2000px;
  max-height: 100%;
  overflow-y: auto;
  background: #fff;
  color: #333;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  text-align: left;
  padding: 4rem;
  scrollbar-width: thin;
  scrollbar-color: #4D96FF #fff;
`;

// Title styling with motion animation
const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #4D96FF;
  text-align: center;
`;

// Paragraphs styling with motion
const Paragraph = styled(motion.p)`
  margin: 1rem 0;
  line-height: 1.7;
  font-size: 1.1rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <Card>
        {/* Animated Title */}
        <Title
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </Title>

        {/* Animated Paragraphs */}
        <Paragraph
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I embarked on my programming journey with C as the foundational stepping stone, developing core problem-solving skills and an understanding of low-level programming. Progressing to C++ allowed me to apply object-oriented principles, while C# during my bachelor's degree introduced me to robust application development. My academic experience with Java further honed my grasp of structured programming and memory management.
        </Paragraph>

        <Paragraph
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          My professional journey began with a two-year tenure at CMExpertise, where I gained hands-on experience in JavaScript, React.js, Node.js, Python, and Django for backend development. I worked extensively with database technologies, including MongoDB, Firebase, PostgreSQL, MySQL, Oracle, and SQL Server, ensuring efficient data management and secure application architecture.
          </Paragraph>

        <Paragraph
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          For approximately a year, I volunteered my time, providing around 20 hours of free technical support each week to a CIP Study Aboard. Without any financial compensation or certification in return, I assisted whenever they encountered technical difficulties, ensuring system stability and smooth operations. This experience taught me the value of proactive communication, selfless contribution, and the impact of technology in supporting meaningful causes.
          </Paragraph>

        <Paragraph
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          At Centennial College, I expanded my skill set with mobile application development across multiple platforms, mastering iOS development using SwiftUI, Android applications with Kotlin and Java, and cross-platform solutions using Flutter and React Native. These experiences gave me a deep understanding of user-centric design and backend integration.
        </Paragraph>

        <Paragraph
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          My academic pursuit of IoT and Machine Intelligence introduced me to fundamental concepts in industrial electronics, embedded systems, and cybersecurity. I gained hands-on experience with Arduino, ESP32, Raspberry Pi, and PLC systems, applying sensor-actuator mechanisms to build smart, data-driven applications, including an automated car-parking management system.
        </Paragraph>

        <Paragraph
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Passionate about continuous growth, I am currently pursuing Microsoft Technology Associate (MTA) certification. My dedication to learning and innovation, combined with strong technical acumen, enables me to design and implement effective, future-ready solutions.
        </Paragraph>
      </Card>
    </AboutContainer>
  );
};

export default About;
