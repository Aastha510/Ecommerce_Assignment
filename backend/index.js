require("dotenv").config();
const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const path=require("path");
const cors=require("cors");
const { log } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//DATABASE CONNECTION WITH MONGO DB
mongoose.connect("mongodb+srv://agrh510:Aastha0510@cluster0.wvfxnxu.mongodb.net/e-commerce")

//API CREATION

app.get("/",(req,res)=>{
    res.send("Express app is running")

})


const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    }
})

//creating endpoint for registring the user
app.post('/signup',async(req,res)=>{
    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same same email"})

    }

    let cart={};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }

    const user= new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    
    await user.save();

    const data={
        user:{
            id:user.id
        }
    }

    const token=jwt.sign(data,'secret_ecom');
    res.json({success:true,token})

})

//login

app.post('/login',async(req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password===user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token =jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }

        else{
            res.json({success:false,errors:"wrong password"});
        }
    }

    else{
        res.json({success:false,errors:"wrong mailid"})
    }
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port "+ port)
    }
    else{
        console.log("error : "+error);
        
    }
})

