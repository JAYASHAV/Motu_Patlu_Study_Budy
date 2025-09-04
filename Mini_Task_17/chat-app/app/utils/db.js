import mongoose from "mongoose";


let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null };
}

const connectDB = async () => {
    console.log(process.env.MONGO_URL)
    if(cached.conn) return cached.conn;

    cached.conn = await mongoose.connect(process.env.MONGO_URL);
    console.log('DB is connected !!');

    return cached.conn;
}

export default connectDB;



