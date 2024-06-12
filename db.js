// database connection file
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let connection = mongoose.connection;

connection.on("error", () => {
    console.log("Error while Connecting to database");
});
connection.on("connected", () => {
    console.log("Connected to database");
});
connection.on("disconnected", () => {
    console.log("Disconnected to database");
});

module.exports = connection;