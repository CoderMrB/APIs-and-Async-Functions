import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabaseUrl = process.env.SUPABASE_URL;

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.get('/api/environment', (req, res) => {
  try {
    const environmentVars = {
      apiKey: supabaseKey,
      apiUrl: supabaseUrl,
    };
    res.json(environmentVars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'public')));

// Define routes for different pages
app.get('/leaderboard', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'leaderboard.html'));
});

app.get('/randomiser', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'randomiser.html'));
});

app.get('/record', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'record.html'));
});

// Start the server and listen on a specific port (e.g., 3000)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});