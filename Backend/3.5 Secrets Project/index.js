//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import path from 'path';


const app = express();
const port = 3000;
const PASS = "ILoveFrogs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function passwordCheck(input){
    if(input == PASS){
        return true;
    }
    return false;
}


app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, (req, res) => {
    console.log("Server running on port 3000");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if(passwordCheck(req.body["password"])){
        console.log("Correct password");
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        console.log("Incorrect password");
    }
})