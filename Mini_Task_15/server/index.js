import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import UserModel from "./models.js"

const app = express()
const port = 3000

await mongoose.connect("mongodb://127.0.0.1:27017/auth_app")
    .then(()=>{console.log("MongoDB is connected!!")})

async function handleSignup(req, res) {
    let userData = req.body 
    let user = await UserModel.findOne({email: userData.email})
    if(user){
        return res.status(400).json({'message': "Email is already registered!!"})
    }
    await UserModel.create(userData)
    res.status(200).json({'message': "Signup successfully!!"})
}

async function handleLogin(req, res) {
    let userData = req.body 
    let user = await UserModel.findOne({email: userData.email})
    if(!user){
        return res.status(400).json({'message': "Email is not registered!!"})
    }
    if(user.password != userData.password){
        return res.status(400).json({'message': "Incorrect password!!"})
    }
    let token = jwt.sign(userData, "*(&&^%^%)")
    res.cookie('token', token, {httpOnly: true, maxAge: 1000*60*60*24})
    res.status(200).json({'message': "Login successfully!!"})
}

async function handleVerifyToken(req, res) {
    let token = req.cookies.token

    try{
        let userData = jwt.verify(token, "*(&&^%^%)")
        res.status(200).json({'message': 'user verifed successfully!!', "isVerified": true})
    } catch {
        res.status(400).json({'message': 'Invalid Token!!', "isVerified": false})
    }
}

async function handleSignout(req, res){
    res.cookie('token', '', {maxAge: 0})
    res.status(200).json({'message': 'Signout successfully !!'})
}

app.use(cors({
    credentials: true,
    origin: (origin, callback)=>{callback(null, true)},
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send("Hello world!!")
})

app.post('/signup', handleSignup)

app.post('/login', handleLogin)

app.post('/verifyToken', handleVerifyToken)

app.post('/signout', handleSignout)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})