import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    imgUrl: {type: String, require: true},
});

export default mongoose.models['Product'] || mongoose.model('Product', productSchema);