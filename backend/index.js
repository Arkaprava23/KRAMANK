import express from "express";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
import cors from 'cors';

import dotenv from "dotenv";
import { User } from "./Schema/userSchema.js";
import connectDB from "./db.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());

connectDB();

const port = 5050;

app.post("/signup", async (req, res) => {
	try {
		const { username, email, password } = req.body;
		console.log(req.body);
		if (!username || !email || !password) {
			return res.status(201).json({ error: "All fields are required" });
		}
		const userExist = await User.findOne({ email });
		if (userExist) {
			return res.status(202).json({ error: "User already exists" });
		}
		var salt = bcryptjs.genSaltSync(10);

		const hashedPassword = await bcryptjs.hash(password, salt); // Await the result of bcryptjs.hash

		const newUser = new User({
			username,
			email,
			password: hashedPassword, // Save the hashed password
		});
		await newUser.save();

		res.status(200).json({ message: "User created successfully" });

	} catch (error) {
		console.error("Error in signup:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
		console.log(req.body);
        if (!email || !password) {
            return res.status(201).json({ error: "Email and password are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(202).json({ error: "User not found" });
        }
        const matchPassword = await bcryptjs.compare(password, user.password);
        if (!matchPassword) {
            return res.status(203).json({ error: "Invalid Password" });
        }
        const tokenData = {
            id: user._id,
            email,
        }
        const token = Jwt.sign(tokenData, `${process.env.TOKEN_SECRET}`, { expiresIn: "1d" });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});
