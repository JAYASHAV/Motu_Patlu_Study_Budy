import express from 'express'
import cors from "cors"
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

let student=["MOTU","PATLU", "JHATKA", "GHASETARAM", "CHINGUM", "BOXER"]
let list = {
    name:student
}

app.get('/', (req, res) => {
  res.json(list.name)
})
app.post('/', (req, res) => {
    let new_student = req.body.name
    console.log(new_student)
    student.push(new_student)
    console.log(student)
  res.json(list.name)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

