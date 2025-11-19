const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); 

const Contact = require('./models/ContactModel'); 
const Portfolio = require('./models/PortfolioModel'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- MongoDB Connection Setup ---
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    
    res.status(200).json({ success: true, message: 'Message received and saved successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error: Failed to save message.' });
  }
});

app.get('/api/portfolio', async (req, res) => {
  try {
    const projects = await Portfolio.find().sort({ projectDate: -1 });
    
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error: Failed to retrieve portfolio.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});