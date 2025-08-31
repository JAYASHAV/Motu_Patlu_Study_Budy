import express from "express"
import cors from "cors"

const app = express()
const port = 3000

let tasks = []

function handleGet(req, res) {
    res.json({ToDos: tasks})
}

function handlePost(req, res) {
    let newTask = req.body.task
    tasks.push(newTask)
    res.json({message: "new task is added successfully!!"})
}

function handleDelete(req, res) {
    let index = req.body.id
    tasks.splice(index, 1)
    res.json({message: "task is deleted successfully!!"})
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send("Hello world!!")
})

app.get('/task', handleGet)

app.post('/task', handlePost)

app.delete('/task', handleDelete)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})