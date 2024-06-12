let express = require("express");
let db  = require("./db");
let bodyParser = require("body-parser");
require('dotenv').config();
let PersonRouter =  require('./Routers/PersonRouters');


let app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Todo | App");
});

app.use('/todo',PersonRouter)



let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});