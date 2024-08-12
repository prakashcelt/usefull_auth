import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

import { setJwtToken } from "../jwt/setJwtToken.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";

// Signup Function
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate the input
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if the user already exists
    const prevUser = await User.findOne({ email });
    if (prevUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Generate a verification token
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Create and save the new user
    const user = new User({
      email,
      password: hashPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 1 day
    });
    await user.save();

    // Set JWT as a cookie in the response
    setJwtToken(user._id, res);



    // sending email

    await sendVerificationEmail(user.email,verificationToken)
    // Return a success response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined, // Don't return the password
      },
    });
    console.log(user)
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

