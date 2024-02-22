import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date().getDay();

app.get("/", (req, res) => {
    res.render(__dirname+"/views/index.ejs", {day : weekday[today]})
})

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})