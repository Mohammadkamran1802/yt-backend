import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `MongoDB Connected DB: ${connection.connection.name}`
    );
  } catch (error) {
    console.error("MongoDB connection failed ", error.message);
    process.exit(1);
  }
};

export default connectDB;
