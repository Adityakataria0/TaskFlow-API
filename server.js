// --------------------
// Load environment variables first
// --------------------
require('dotenv').config();

// --------------------
// Import libraries
// --------------------
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/taskModel'); // Mongoose model

// --------------------
// Initialize the app
// --------------------
const app = express();
app.use(express.json()); // Parse JSON bodies

// --------------------
// MongoDB connection
// --------------------
console.log('DEBUG -> MONGO_URI value:', process.env.MONGO_URI ? 'Exists ✅' : 'Missing ❌');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// --------------------
// Routes
// --------------------

// Root route
app.get('/', (req, res) => {
  res.send('Hello from TaskFlow API connected to MongoDB!');
});

// CREATE: Add a new task
app.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task({ title: req.body.title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ: Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.json(allTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE: Update a task by ID
app.patch('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Delete a task by ID
app.delete('/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// --------------------
// Start the server
// --------------------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
