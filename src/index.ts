import express from "express";
import { load } from "dotenv";
import  TaskRoutes  from "./task";
load();

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hr_system"
});

con.connect((err:any) =>{
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

app.use("/task",TaskRoutes);

app.listen(PORT, listenPort);

export { app, con };