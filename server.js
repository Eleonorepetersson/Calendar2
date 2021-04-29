import express from "express";
import path from "path";

const app = express();

// server settings
const PORT = 5000;
const PUBLICDIR = path.resolve("./public");

app.use(express.static(PUBLICDIR));

app.get("/", (req, res) => {
    res.send("hej");
})

app.listen(PORT, () => {
    console.log("Skjut mig!");
})