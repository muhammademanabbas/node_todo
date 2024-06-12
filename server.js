let express = require("express");
let mongoose = require("mongoose");
let db  = require("./db");
let bodyParser = require("body-parser");
let TodoModule  =  require("./modules/todoListSchema");

let app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Todo | App");
});

app.post("/todo", async(req, res) => {
  try {
        let todo =  new TodoModule(req.body);
        let response  = await todo.save();
        console.log("Todo has been Saved!!" , response);
        res.status(200).json(response);
  } catch (error) {
        console.log(error);
        res.status(500).json({error: error.mesasge});    
  }
});
app.get("/todo", async(req, res) => {
  try {
    let todos =  await TodoModule.find()
        res.status(200).send(todos);
  } catch (error) {
        console.log(error);
        res.status(500).json({error: error.mesasge});    
  }
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});