const { eventModel } = require("@/models/event-models");

export async function getAllEvents(){
    const allEvents=await eventModel.find()
    return allEvents
}