import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>your band name is:</h1> <h2>${req.body.street}${req.body.pet}s</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
