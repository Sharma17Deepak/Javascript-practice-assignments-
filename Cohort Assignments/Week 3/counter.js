//Make a counter which counts requests come on server using Middleware.
const express = require("express");
const app = express();

let numberOfRequets = 0; 

app.use(function calcrequests(req,res,next){
    numberOfRequets++;
    next();
})

app.get("/",(req,res)=>{
    res.send(numberOfRequets);
})

app.listen(3000);