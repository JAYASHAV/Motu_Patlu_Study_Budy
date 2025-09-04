import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils"
import { NextResponse } from "next/server"
import { parseBody } from "@/app/utils/body-parser"
import Order from "@/app/models/order"

export const POST = async (req) => {
    try {
        console.log(req.headers.get('content-type'))
        const {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
        } = await parseBody(req)

        const order_id = req.nextUrl.searchParams.get('orderId')

        const isVerified = validatePaymentVerification(
            { order_id: order_id, payment_id: razorpay_payment_id },
            razorpay_signature,
            process.env.RAZORPAY_SECRET
        )

        let url = 'http://localhost:3000/'
        if (isVerified) {
            await Order.findOneAndUpdate(
                { orderId: order_id },
                {
                    $set: {
                        transactionDetails: {
                            razorpay_payment_id: razorpay_payment_id,
                            razorpay_order_id: razorpay_order_id,
                            razorpay_signature: razorpay_signature,
                        },
                        paymentStatus: 'PAID'
                    }
                })
        }
        return NextResponse.redirect(url)
    }
    catch (err) {
        console.log(err)
        return NextResponse.redirect('http://localhost:3000/')
    }
}