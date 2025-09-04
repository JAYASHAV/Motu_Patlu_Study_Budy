import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content: { type: String, require: true },
    senderId: { type: String, require: true },
    roomId: { type: String, require: true },
    timeInt: { type: Number, require: true },
});

export default mongoose.models['Message'] || mongoose.model('Message', messageSchema);