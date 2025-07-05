// real-time-editor/backend/server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow all origins for now. In production, specify your frontend URL.
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' directory (if you had any, not strictly needed for this setup)
// app.use(express.static('public'));

// Basic route for testing the server
app.get('/', (req, res) => {
  res.send('Real-time Document Editor Backend is running!');
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle document changes
  socket.on('document-change', (data) => {
    console.log('Document change received:', data);
    // Broadcast the change to all other connected clients
    socket.broadcast.emit('document-change', data);
  });

  // Handle user disconnecting
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
