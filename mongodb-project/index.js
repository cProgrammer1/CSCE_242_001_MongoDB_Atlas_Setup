/* 
    Edited by Chrissy Dobrowolski 
    Assignment 16- Setting up MongoDB 
    CSCE 242- 001 
    Due: 4.2.2024 

*/


const mongoose = require("mongoose");

//testdb is name of database, it will automatically make it
mongoose
  .connect("mongodb+srv://cprogrammer1:H5TjR5cLI7IXIQtL@cluster0.alowucs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("could not connect to mongodb...", err));

const schema = new mongoose.Schema({
  name: String,
});

async function createMessage() {
  const result = await message.save();
  console.log(result);
}

//this creates a Message class in our app
const Message = mongoose.model("Message", schema);
const message = new Message({
  name: "Hello Chrissy",
});

createMessage();
