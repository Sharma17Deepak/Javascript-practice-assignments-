const express = require("express");

const app = express();

function sum(n){
    let a = 0
    for(let i=1;i<=n;i++){
        a = a + i;
    }
    return a;
}

app.get("/",(req,res) => {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Your answer is  "+ans);
})

app.listen(3000);