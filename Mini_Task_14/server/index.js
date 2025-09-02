import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from "./models.js"

const app = express()
const port = 3000

await mongoose.connect("mongodb://127.0.0.1:27017/auth_app")
    .then(()=>{console.log("MongoDB is connected!!")})

async function handleSignup(req, res) {
    let userData = req.body 
    let user = await UserModel.findOne({email: userData.email})
    if(user){
        return res.json({'message': "Email is already registered!!"})
    }
    await UserModel.create(userData)
    res.json({'message': "Signup successfully!!"})
}

async function handleLogin(req, res) {
    let userData = req.body 
    let user = await UserModel.findOne({email: userData.email})
    if(!user){
        return res.json({'message': "Email is not registered!!"})
    }
    if(user.password != userData.password){
        return res.json({'message': "Incorrect password!!"})
    }
    res.json({'message': "Login successfully!!"})
}


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send("Hello world!!")
})

app.post('/signup', handleSignup)

app.post('/login', handleLogin)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})