const express = require("express")
const port = process.env.PORT || 5000
const app = express()

app.get("/",(req,res)=>{
    //res.send("Hello world")
    res.json({
        "status":"status-test",
        "id":"id-test"
    })
})

users = require("./routes/users")
app.use("/users",users)

app.listen(port,()=>{
    console.log("serveur est en ligne")
})