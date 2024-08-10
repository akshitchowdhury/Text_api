const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://raikamiryu:BtBxn461IwTY0ftK@cluster0.arqu8ue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Mongo DB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;