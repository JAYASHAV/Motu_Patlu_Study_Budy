import { NextResponse } from "next/server";
import { instance } from "@/app/utils/razorpay";
import Order from "@/app/models/order";
import { clerkClient } from "@/app/utils/clerk";
import connectDB from "@/app/utils/db";


export const POST = async (req) => {
    await connectDB()
    const order_detail = await req.json()

    const orderEntity = await instance.orders.create({
        amount: 5000,
        currency: "INR",
    })

    const customerDetails = await clerkClient.users.getUser(order_detail.customerId)
    console.log(customerDetails.fullName, customerDetails.emailAddresses[0].emailAddress)

    await Order.create({...order_detail, orderId: orderEntity.id})

    const payment_options = {
        key: process.env.RAZORPAY_ID,
        amount: order_detail.amount,
        currency: order_detail.currency,
        name: 'Online Store',
        description: 'Test Transaction',
        order_id: orderEntity.id,
        callback_url: `http://localhost:3000/api/transaction?orderId=${orderEntity.id}`,
        prefill: {
            name: customerDetails.fullName,
            email: customerDetails.emailAddresses[0].emailAddress,
            contact: '9999999999'
        },
        theme: {
            color: '#F37254'
        },
    };
    return NextResponse.json(payment_options)
}