import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {type: String, require: true, unique: ture},
    cart: [{
        productId: { type: String, require: true },
        units: { type: Number, default: 1 },
    }],
});

export default mongoose.models['User'] || mongoose.model('User', userSchema);