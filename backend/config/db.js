import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://ecommerse:ecommerse@clusterecom.dsn9jfy.mongodb.net/food-del').then(()=> console.log('DB connected'))
}