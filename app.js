const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {moviemodel} = require("./models/movie")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Nevin:nevintensonk@cluster0.0rfrr.mongodb.net/mmoviedb?retryWrites=true&w=majority&appName=Cluster0')

app.post("/add",(req,res)=>{
    const input = req.body
    const movie = new moviemodel(input)
    movie.save()
    console.log(movie)
    res.json({status:"success"})
})

app.get("/view",(req,res)=>{
    moviemodel.find().then(

    
    (data)=>{
        res.json(data)
    }).catch(
        (error)=>{
            res.json(error)
        }
    )
}
)

app.listen(8006,()=>{
    console.log("server started")
})