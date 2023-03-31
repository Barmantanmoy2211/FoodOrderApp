import mongoose from "mongoose";


mongoose.set('strictQuery', false);
export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URL);

  console.log(`Database is connect with ${connection.host}`);
};