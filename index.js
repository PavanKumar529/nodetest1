// impoting express
const express = require("express")

const path = require("path")

// app creation
const app = express()

//PORT, hostName
const PORT = 2000;
const hostName = "127.0.0.8"


// middlewares
app.use(express.static(path.join(__dirname,"Public")))



// API's
// GET
app.get("/", (req, res) => {
  // res.send("<h1>Hello, I'm Express sever<h1/> <h1>This Home Page<h1/>")
  res.sendFile(path.join(__dirname,"Public", "Home.html"))
})

app.post("/newuser",(req,res) => {
  console.log(req.body)
  res.status(201).send({msg: "data received"})
})

// app.get("/about", (req, res) => {
//   res.send("<h1>This is about Page<h1/>")
// })


// app listening
app.listen(PORT, hostName, ()=> {
  console.log(`server stated at http://${hostName}:${PORT}`);
})