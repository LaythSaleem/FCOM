// Minimal server test to isolate path-to-regexp issue
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

console.log('Starting minimal server test...');

// Basic middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working', timestamp: new Date().toISOString() });
});

// Static files
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all for React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

console.log('Routes registered successfully');

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Minimal server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('❌ Server error:', err);
  process.exit(1);
});

module.exports = app;
