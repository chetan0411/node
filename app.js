const express = require('express');
const app = express();


app.listen(3001, ()=>{
    console.log("App running")
});

app.get("/", (req, res)=>{
    res.send("<h1>Testing working </h1>")
})