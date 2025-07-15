// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User model
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    verificationCode: String,
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', UserSchema);

// Email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Generate random verification code
function generateVerificationCode() {
    return crypto.randomBytes(3).toString('hex').toUpperCase();
}

// Registration endpoint
app.post('/register', async (req, res) => {
    try {
        const { email } = req.body;
        
        // Validate email
        if (!email || !email.includes('@gmail.com')) {
            return res.status(400).json({ error: 'Please provide a valid Gmail address' });
        }
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        
        // Generate verification code
        const verificationCode = generateVerificationCode();
        
        // Save user to database
        const newUser = new User({
            email,
            verificationCode
        });
        await newUser.save();
        
        // Send verification email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Verification Code',
            text: `Your verification code is: ${verificationCode}`
        };
        
        await transporter.sendMail(mailOptions);
        
        res.status(200).json({ message: 'Verification code sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Verification endpoint
app.post('/verify', async (req, res) => {
    try {
        const { email, code } = req.body;
        
        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        // Check verification code
        if (user.verificationCode !== code) {
            return res.status(400).json({ error: 'Invalid verification code' });
        }
        
        // Mark as verified
        user.isVerified = true;
        await user.save();
        
        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});