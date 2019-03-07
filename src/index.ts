const express = require( "express");
import { load } from "dotenv";
import { connect, connection } from "mongoose";
load();

/* // Connect to mongodb database
connect(
  process.env.MONGODB_CONNECTION || "MONGODB_CONNECTION",
  { useNewUrlParser: true }
);

// When connection is successful
connection.once("open", () => console.log("Connected to mongodb database"));

// When connection is failed
connection.once("error", error => console.log("Failed connecting to database. \nError:", error.errors[0].err.errmsg)); */

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hr_system"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();
const isdev = process.env.NODE_ENV === "development"; // Check if on development mode

// Get port on env
const PORT = process.env.PORT;

function listenPort() {
  console.log(`Listening for request on port ${PORT}`);
}

app.get("/task", (req,res) => {
    con.query("SELECT * FROM tasks", function (err, result) {
        if (err) throw err;
        console.log("Result: " + result.map(e => console.log(e)));
        return res.json(result); 
      });
});

app.post("/task", (req,res) => {
    res.json({message: "sucess"});
});

app.listen(PORT, listenPort);

export { app };