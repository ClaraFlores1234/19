const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res)=> {
    //res.send("Soy Clara");
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8000, ()=>{
    console.log("tu servidor estará corriendo en puerto", 8000);
});