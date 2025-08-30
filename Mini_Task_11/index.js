import express from 'express'
const app = express()
const port = 3000
let studentdata = []

app.use(express.json())

function handleget(req,res){
res.json({student:studentdata})
}
function handlepost(req,res){
let recivedata = req.body 
studentdata.push(recivedata.student)
res.json({posta:"scuccess"})
}
function handleput(req,res){
let recivedata=req.body
studentdata[recivedata.id] = recivedata.student
res.json({put:"success"})
}
function handledelete(req,res){
  let recivedata=req.body
  studentdata.splice(recivedata.id, 1) 
  res.json({delete:"success"})
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/student',handleget)
app.post('/student',handlepost)
app.put('/student',handleput)
app.delete('/student',handledelete)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
