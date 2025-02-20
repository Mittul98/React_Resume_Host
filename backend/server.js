const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// OAuth callback endpoint
app.get('/auth/github/callback', async (req, res) => {
  const code = req.query.code;

  try {
    // Exchange code for access token
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
      },
      { headers: { Accept: 'application/json' } }
    );

    const accessToken = response.data.access_token;

    // Fetch private repositories
    const reposResponse = await axios.get('https://api.github.com/user/repos', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    res.json(reposResponse.data);
  } catch (error) {
    console.error('Error fetching repos:', error);
    res.status(500).send('Failed to retrieve repositories.');
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    res.send('Backend is running! Use /auth/github/callback for authentication.');
  });
