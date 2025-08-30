const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req, res) => {
    const{ name, email, password } = req.body;

    try {
        const user = await User.findOne({name});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        //Save user:
        await newUser.save();

        const UserResponse = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }

        res.status(200).json({message:"User registered Successfully", user:UserResponse})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.loginUser = async(req, res) => {
    try {
        const{ email, password } = req.body;

        //Check for required fields:-
        if(!email || !password){
            return res.status(400).json({message:"Please provide email and password"})
        }

        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid Credentials"});
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const generateToken = jwt.sign(
            {name: user.name, password: user.password},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )
        res.json({message: "Login successful", generateToken});

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};