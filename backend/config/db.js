import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('Your mongodb address link').then(()=> console.log('DB connected'))
}
