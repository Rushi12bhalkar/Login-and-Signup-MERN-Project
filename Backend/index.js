const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Login&RegisterDB")

const express = require('express')
const app = express()
const cors = require('cors')   //  Cors-->information
const User = require('./User');

const bodyparser = require('body-parser');
app.use(bodyparser.json())


app.use(express.json())

app.use(cors())



// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)

//Routes

app.post("/register",async(req,res,next)=>
   {
      const { name, email, password } = req.body;
      try
      {
         let user = await User.findOne({ email});
         if (user)
          {
            res.send({ message: "User Already Exists"})
           }
           else{
              user = new User({
                       name,
                       email,
                      password
               });


       await user.save();
       res.status(201).json({ message: 'User registered successfully' });
            }
      }
      catch (error) {
         next(error);
       }
     });

   
   app.post('/login', async (req, res, next) => {
      const { email, password } = req.body;
    
      try {
        // Check if user exists
        const user = await User.findOne({ email });
        if(user){
         if(password === user.password ) 
            {
             res.send({message: "Login Successfull", user: user})
         } 
         else 
         {
             res.send({ message: "Password didn't match"})
         }
      } 
     else 
     {
         res.send({message: "User not registered"})
     }
    
      } 
      catch (error)
       {
        next(error);
      }
    });


    app.get('/list',async(req,res)=>
      {
         try
         {
            const info = await  User.find();
            res.send(info)
         }
         catch
         {
           console.log(err)
         }
      })

app.listen(9002,() => {
    console.log("BE started at port 9002")
})