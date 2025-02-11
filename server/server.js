const express = require("express");
const cors = require("cors");
const fs = require("fs"); // Import fs module
const path = require("path"); // Import path module
const nodemailer = require("nodemailer"); // Import nodemailer for email sending
const dotenv = require("dotenv"); // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// API endpoint to serve product data dynamically
app.get("/api/product", (req, res) => {
  const filePath = path.join(__dirname, "productData.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).send("Error reading data");
    } else {
      try {
        const productData = JSON.parse(data);
        res.json(productData);
      } catch (parseError) {
        console.error("Error parsing JSON file:", parseError);
        res.status(500).send("Error parsing data");
      }
    }
  });
});

// Create a transporter using your email service (Gmail in this example)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Change to your email service (e.g., 'outlook', 'yahoo')
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// API endpoint to handle newsletter subscription
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;

  // Simple validation for email format
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: "Please enter a valid email." });
  }

  // Setup email data
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email address
    to: process.env.EMAIL_USER,   // Your email address where the sign-up notifications will be sent
    subject: 'Newsletter Sign Up',
    text: `New subscriber: ${email}`,
  };

  // Send email to the specified address
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Something went wrong. Please try again." });
    }

    res.status(200).json({ message: "Thank you for subscribing, we'll let you know when we have new products!" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
