import mongoose, { Connection } from "mongoose";

let isConnedcted:Connection | boolean = false;

const connectDatabase = async () => {
    if (isConnedcted) {
        console.log("MongoDB alreday connected")
        return isConnedcted;
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_URL!);
        console.log("Database connected");
        isConnedcted = res.connection;
        return isConnedcted;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export default connectDatabase;