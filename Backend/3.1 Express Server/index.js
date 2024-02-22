import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile("Hey, :DDDDD")
})

app.get("/about", (req, res) => {
    res.send("<h1>About me:</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>contact</h1>")
})

app.post("/register", (req, res) => {
    res.sendStatus(201); //Created
})


app.listen(port, () => {
    console.log(`Serven running on port ${port}`)
});
