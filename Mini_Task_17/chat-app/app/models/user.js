import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: { type: String, require: true },
    activeRooms: [{
        roomId: { type: String, require: true },
        lastMsgId: { type: String },
        title: { type: String, require: true }
    }]
});

export default mongoose.models['User'] || mongoose.model('User', userSchema);