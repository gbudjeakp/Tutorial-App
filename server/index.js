const express = require("express");
const cors = require("cors")
const port = 5000
const app = express()
const userRoutes = require("./Routes/User")


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/users', userRoutes)



//Database setup done here


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
