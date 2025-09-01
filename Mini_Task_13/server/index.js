import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import NoteModel from "./models.js"

const app = express()
const port = 3000

await mongoose.connect("mongodb://127.0.0.1:27017/notes_app")
    .then(()=> console.log("MongoDB is connected!!"))

async function handleGet(req, res) {
    let notesData = await NoteModel.find({})
    res.json({notes: notesData})
}

async function handlePost(req, res) {
    let data = req.body
    console.log(data)
    let newNote = await NoteModel.create(data)
    res.json({message: "new note is added successfully!!"})
}

async function handleDelete(req, res) {
    let id = req.body.id 
    let deletedNote = await NoteModel.findByIdAndDelete(id)
    res.json({message: "note is deleted successfully!!"})
}

async function handlePut(req, res) {
    let id = req.body.id
    let updatedNote = req.body.note
    await NoteModel.findByIdAndUpdate(id, updatedNote)
    res.json({message: "note is updated successfully!!"})
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send("Hello world!!")
})

app.get('/note', handleGet)

app.post('/note', handlePost)

app.delete('/note', handleDelete)

app.put('/note', handlePut)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})