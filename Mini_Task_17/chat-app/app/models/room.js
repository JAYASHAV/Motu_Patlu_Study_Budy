import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    adminId: { type: String, require: true },
    activeUser: [{
        userId: { type: String }
    }],
    title: { type: String, require: true}
});

export default mongoose.models['Room'] || mongoose.model('Room', roomSchema);