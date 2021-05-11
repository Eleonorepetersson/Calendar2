import express from "express";
import path from "path";
import EventController from "./controllers/event.js";
import cors from "cors";

const app = express();

// server settings
const PORT = 5000;
const PUBLICDIR = path.resolve("./public");

app.use(express.static(PUBLICDIR));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hej");
});

app.get("/events", (req, res) => {
    EventController.sendAllEvents(req, res);
});

app.post("/events", (req, res) => {
    console.log("Heeey uhh boss someones trying to post cringe");
    EventController.updateEventList(req, res);
})

app.listen(PORT, () => {
    console.log("Skjut mig!");
})