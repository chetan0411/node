const express = require('express');
const app = express();


app.listen(3000, ()=>{
    console.log("App running")
});

app.get("/", (req, res)=>{
    res.send("<h1>TEst working </h1>")
})