import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function lengthClac(fName, lName){
  return fName.length + lName.length;
}

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  let len = lengthClac(req.body["fName"], req.body["lName"])
  res.render("index.ejs", {msg: `Your name in ${len} letters long`})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
