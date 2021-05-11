import path from "path";
import EventModel from "../models/event.js";

function sendAllEvents(req, res) {
    const eventList = EventModel.getAllEvents();
    res.json(eventList);
}

function updateEventList(req, res) {
    // hitta något sätt att parsa reqeust body och få json-datan därifrån(body parser??)
    const data = JSON.stringify(req.body);

    EventModel.updateEventList(data);
    res.json({message: "Post was received!"});
}

export default {sendAllEvents, updateEventList};