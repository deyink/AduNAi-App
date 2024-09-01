const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json());
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const PORT = 5001

const mongoUrl = 'mongodb+srv://yusufadeyinka55:Akanji222@cluster0.ebjle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const JWT_sec = '3fee1b0ee5a62a4e6cd6a39ff22e35b754330426addba31494695d8ca21990f8' ;

mongoose
.connect(mongoUrl)
.then(()=>{
    console.log('Database connected');
}).catch((e)=>{
    console.log(e)
});

require('../AduNai_backkend/UserDetails')
const User = mongoose.model('UserInfo')




app.post('/Signup', async(req, res)=>{
    const {name, email, password } = req.body;

    const oldUser = await User.findOne({email:email})

    if(oldUser){
        return res.send({data: 'User already exist'})
      
    };

    const passwordEncrypt = await bcrypt.hash( password, 10 )

    try {
        await User.create({
            name: name,
            email: email,
            password: passwordEncrypt 
    
        });
        res.send({status: 'ok', data: 'user created' });
        
    } catch (error) {
        res.send({status: 'error', data: error })
        
    }
    
});
// Login Endpoint
app.post('/Login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const oldUser = await User.findOne({ email: email });
  
      if (!oldUser) {
        return res.status(404).send({ status: 'error', message: "User doesn't exist!" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, oldUser.password);
      if (!isPasswordValid) {
        return res.status(401).send({ status: 'error', message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ email: oldUser.email }, JWT_sec, { expiresIn: '1h' });  // Token expires in 1 hour
  
      res.status(200).send({ status: 'ok', data: { token, user: oldUser } });  // Return token and user data
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send({ status: 'error', message: 'Internal server error' });
    }
  });
  
  // Get User Data Endpoint
  app.post('/userdata', async (req, res) => {
    const { token } = req.body;
  
    try {
      const decoded = jwt.verify(token, JWT_sec);
      const useremail = decoded.email;
  
      const user = await User.findOne({ email: useremail });
      if (!user) {
        return res.status(404).send({ status: 'error', message: 'User not found' });
      }
  
      res.status(200).send({ status: 'ok', data: user });
    } catch (error) {
      console.error("User data retrieval error:", error);
      res.status(401).send({ status: 'error', message: 'Invalid token or token expired' });
    }
  });
  
  // Start the Server
  app.listen(PORT, () => {
    console.log('Server started');
  });