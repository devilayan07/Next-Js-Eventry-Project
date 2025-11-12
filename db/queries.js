import { eventModel } from "@/models/event-models"
import User from "@/models/user-models";
import dbConnect from "@/services/mongo";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util"
import mongoose from "mongoose";

export async function getAllEvents(){
    await dbConnect()
    const allEvents=await eventModel.find().lean()
    return replaceMongoIdInArray(allEvents);
}

export async function getEventById(eventId){
        await dbConnect()

    const event=await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event)

}

export async function createUser(user){
        await dbConnect()

    return await User.create(user)
}

export async function findUserByCredentials(credentials){
        await dbConnect()

    const user=await User.findOne(credentials).lean();
    if(user){
        return replaceMongoIdInObject(user)
    }
    return null
}

export async function updateInterest(eventId,authId){
        await dbConnect()

    const event=await eventModel.findById(eventId)

    if(event){
        const foundUsers=event.interested_ids.find((id)=>id.toString()===authId)
        if(foundUsers){
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
        }else{
            event.interested_ids.push(new mongoose.Types.ObjectId(authId));

        }
       await event.save()
    }


}

export async function updateGoing(eventId,authId){
     await dbConnect()

     const event= await eventModel.findById(eventId)
     event.going_ids.push(new mongoose.Types.ObjectId(authId))
     event.save();

}