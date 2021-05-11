import fs from 'fs';
import path from "path";

var events = JSON.parse(fs.readFileSync(path.normalize("./data/eventdata.json")));

function getAllEvents() {
    return events;
}

function getEventById(id) {
    return events.find(obj => obj.id === id);
}

function updateEventList(data) {
    events = data;
    fs.writeFileSync(path.normalize("./data/eventdata.json"), events);

}

function updateEvent(id, newBody) {
    // Hitta ett event med det id du söker
    // Ta emot ny information i "newBody"
    // Ta bort det gamla eventet med array.filter
    //  => (kolla Henrys kod)

    // Lägg till det uppdaterade eventet med events.push()
    // save event list
}

function addEvent(body) {
    // Ta emot event-informatio via "body"
    // Lägg till eventet med events.push()
    // save
}

function saveEventList() {
    const newList = events;
    fs.writeFileSync(path.normalize("./data/events.json"), JSON.stringify(newList));
}

export default {getAllEvents, getEventById, updateEventList};