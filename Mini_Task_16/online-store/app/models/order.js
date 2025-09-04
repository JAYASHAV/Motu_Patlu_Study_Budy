import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: { type: String, require: true, unique: true },
    customerId: { type: String, require: true },
    items: [{
        productId: { type: String, require: true },
        units: { type: Number, default: 1 },
    }],
    amount: { type: Number, require: true },
    currency: { type: String, default: "INR" },
    paymentStatus: { type: String, enum: ['PAID', 'UNPAID'], default: 'UNPAID' },
    transactionDetails: {
        razorpay_payment_id: { type: String },
        razorpay_order_id: { type: String },
        razorpay_signature: { type: String },
    }
}, { timestamps: true });

export default mongoose.models["Order"] || mongoose.model('Order', orderSchema);