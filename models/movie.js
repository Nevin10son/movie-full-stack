const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
       "title":String,
       "director":String,
       "cast":String,
       "musicdirector":String,
       "description":String,
       "year":String,
       "rating":String,
       "urltoimage":String,
       


    }
)

let moviemodel = mongoose.model("movies",schema);
module.exports = {moviemodel}