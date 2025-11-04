import { eventModel } from "@/models/event-models"

export async function getAllEvents(){
    const allEvents=await eventModel.find()
    return allEvents
}