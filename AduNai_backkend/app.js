const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json());
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const mongoUrl = "mongodb+srv://yusufadeyinka55:Akanji%40222@cluster0.ueu7rrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ;

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

app.get('/', (req, res)=>{
    res.send("My first Server code")
} );



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

app.post('/Login', async (req, res) => {
    const { email, password } = req.body;

    const oldUser = await User.findOne({ email: email }) ;

    if (!oldUser){
        return res.send({data: " User doesn't exist!! " })
    }
    if ( await bcrypt.compare( password, oldUser.password ) ){
        const token = jwt.sign({email: oldUser.email }, JWT_sec ) ;

        if (res.status(200)) {
                 
            res.send({status: 'ok', data: token }) ;
          
        
           
        } 
         else {
        
             res.send({ error: 'error' })
            
         }
    } 
    
     
});

app.listen(5001, ()=>{
    console.log('server started')  
});



