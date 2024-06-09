const express = require('express')
const app = express()
const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://yusufadeyinka55:Akanji%40222@cluster0.ueu7rrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl).then(()=>{
    console.log('Database connected');
}).catch((e)=>{
    console.log(e)
});

require('./UserDetails')
const User = mongoose.model('UserInfo')

app.listen(5001, ()=>{
    console.log('server started')
})

app.get('/', (req, res)=>{
    res.send("My first Server code")
} );

app.post('/Signup', async(req, res)=>{
    const {name, email, password } = req.body;

    const oldUser = await User.find({email:email})

    if(oldUser){
        return res.send({data: 'User already exist'})
    }

    try {
        await User.create({
            name: name,
            email: email,
            password,
    
        });
        res.send({status: 'ok', data: 'user created' });
        
    } catch (error) {
        res.send({status: 'error', data: error })
        
    }
    
})


