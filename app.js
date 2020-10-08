const express = require("express");
const app = express();
const ejs = require("ejs");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "inventory"
})

connection.connect(()=>{
    console.log("Database connected");
})






app.listen(4000, () => {
    console.log('Listening on port 4000!');
});
