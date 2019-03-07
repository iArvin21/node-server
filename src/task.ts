import {con  } from "./index";
const express = require('express');
const app = express.Router();

app.get("/", (req:any,res:any) => {
    con.query("SELECT * FROM tasks", function (err:any, result:any) {
        if (err) throw err;
        console.log("Result: " + result.map((e:any) => console.log(e)));
        return res.json(result); 
      });
});

app.get("/query", (req:any,res:any) => {
    console.log("ID:",req.query.id);
    
    con.query(`SELECT * FROM tasks where id_task=${req.query.id}`, function (err:any, result:any) {
        if (err) throw err;
        console.log("Result: " + result.map((e:any) => console.log(e)));
        return res.json(result); 
      });
});

app.get("/:id", (req:any,res:any) => {
    con.query(`SELECT * FROM tasks where id_task=${req.params.id}`, function (err:any, result:any) {
        if (err) throw err;
        console.log("Result: " + result.map((e:any) => console.log(e)));
        return res.json(result); 
      });
});

app.post("/", (req:any,res:any) => {
    res.json({message: "sucess"});
});

//export this router to use in our index.js
export default app;