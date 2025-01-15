const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const PORT =  4010
const app = express()
const storeRoute = require("./routes/store.route")
const bookRoute =  require("./routes/book.route")
// use middlewares 

app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// init first request 

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api/v1/",storeRoute)
app.use("/api/v1/",bookRoute)
// listen server

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
