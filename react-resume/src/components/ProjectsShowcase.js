import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Animated Gradient Background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(135deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 10s ease infinite;
  padding: 2rem;
`;

const Card = styled.div`
  width: 900px;
  border: 6px solid;
  border-image: linear-gradient(45deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF) 1;
  border-radius: 20px;
  background: #fff;
  color: #333;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  margin-bottom: 2rem;
  max-height: 60%;
  overflow-y: auto;
  text-align: left;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #4D96FF;
  text-align: center;
`;

const ProjectCard = styled.div`
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 10px;
  margin: 0.5rem 0;
  border-left: 5px solid #4D96FF;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

const FormContainer = styled.div`
  width: 500px;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    color: #4D96FF;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    margin-top: 1rem;
    background: #4D96FF;
    color: #fff;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #374151;
    }
  }
`;

const ProjectsShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  // Fetch GitHub Repositories
  const fetchGitHubRepos = async () => {
    try {
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
        params: {
          sort: 'created',
          direction: 'desc',
          per_page: 50,
        },
      });

      setProjects(response.data);
    } catch (error) {
      console.error("Failed to fetch GitHub repositories:", error);
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission and send email
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_tt23av9';
    const templateID = 'template_nufj4cf';
    const userID = 'WHqwl52lsGwmJ0NNF';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert('Request sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', contact: '' });
      })
      .catch((error) => {
        alert('Failed to send request. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <ProjectsContainer>
      <Card>
        <Title
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Public GitHub Repositories
        </Title>

        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description || 'No description available'}</p>
            </ProjectCard>
          ))
        ) : (
          <p>Loading repositories...</p>
        )}
      </Card>

      {/* Access Request Form */}
      <FormContainer>
        <h3>Request Access to Private Repositories</h3>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Your Contact Number"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Request Access</button>
        </form>
      </FormContainer>
    </ProjectsContainer>
  );
};

export default ProjectsShowcase;
