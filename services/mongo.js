// import mongoose from "mongoose";

// export async function dbConnect(){
//     try {

//         const connect= await mongoose.connect(process.env.MONGO_URI)
//          console.log("connected")
//         return connect
        
//     } catch (error) {
//         console.log(error)
//     }
// }


import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI
const cached = {}
async function dbConnect() {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    )
  }
  if (cached.connection) {
    return cached.connection
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI)
  }
  try {
    cached.connection = await cached.promise
  } catch (e) {
    cached.promise = undefined
    throw e
  }
  return cached.connection
}
export default dbConnect

