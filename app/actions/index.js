"use server"

import { createUser, findUserByCredentials, getEventById, updateGoing, updateInterest } from "@/db/queries"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {Resend} from "resend"
import EmailTemplate from "@/components/payments/EmailTemplate"

export const registerUser=async(formData)=>{
  
    const user=Object.fromEntries(formData)

    const created=await createUser(user)
    redirect("/login")
   
}

export const loginUser=async(formData)=>{
    try {
            const email=formData.get("email")
    const password=formData.get("password")

    const credential={
        email,password
    }
    const found=await findUserByCredentials(credential)
    return found
        
    } catch (error) {
        throw error
    }

}


export async function addInterestedEvent(eventId,authId){
    try {
        await updateInterest(eventId,authId);
        
    } catch (error) {
        throw error
        
    }
            revalidatePath("/")


}

export async function addGoingEvent(eventId,user){
  try {
    await updateGoing(eventId,user?.id)
    await sendEmail(eventId,user)
    
  } catch (error) {
    throw error
  }
  revalidatePath("/")
  redirect("/")
}

export async function sendEmail(eventId,user){
    try {
           const event=await getEventById(eventId)
   const resend=new Resend(process.env.RESEND_API_KEY)
   const message=`Dear ${user?.name}, you have been successfully registered for the event, ${event?.name} . Please carry this email and your official id to the venue.We are excited to have you here`

   const sent=await resend.emails.send({
      from:"onboarding@resend.dev",
      to:user?.email,
      subject:"Successfully Registered for the event! ",
      react:<EmailTemplate message={message}/>
   })

        
    } catch (error) {
        throw error
        
    }
}

