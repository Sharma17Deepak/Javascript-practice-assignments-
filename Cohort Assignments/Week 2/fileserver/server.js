const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();

// Path to the directory containing files
const filesDir = path.join(__dirname,'./files/');

/**
 * 1. GET /files 
 * Returns a list of files present in the ./files/ directory
 */
app.get("/files", (req,res) => {
    fs.readdir(filesDir,(err,files) => {
        if(err){
            return res.status(500).json({error: "Failed to retrieve files"})
        }
        res.status(200).json(files);
    })
})

/**
 * 2. GET /file/:filename 
 * Returns content of given file by name
 */

app.get("/files/:filename", (req,res) => {
    const filepath = path.join(filesDir, req.params.filename);

    fs.readFile(filepath,"utf-8",(err,data) => {
        if(err){
            return res.status(404).json({error: "File not found"})
        }
        res.status(200).json(data);
    })
})

app.listen(3000);