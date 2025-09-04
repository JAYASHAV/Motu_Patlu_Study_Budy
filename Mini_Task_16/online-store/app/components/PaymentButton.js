"use client"
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '@clerk/nextjs'

const PaymentButton = () => {
    let [paymentOptions, setPaymentOptions] = useState(null)
    const { userId } = useAuth();

    useEffect(() => {
        if (paymentOptions) {
            const script = document.createElement('script')
            script.src = "https://checkout.razorpay.com/v1/checkout.js"
            script.async = true
            script.onload = () => {
                const rzp = new window.Razorpay(paymentOptions)
                rzp.open()
            }
            document.body.appendChild(script)
        }
    }, [paymentOptions])


    return (
        <button className='bg-[#0051ca]  text-sm font-semibold px-4 py-2 rounded-lg' onClick={async () => {
            const order_details = {
                amount: 50000,
                currency: "INR",
                items: [{ productId: 'j02d9zi302', units: 1 }],
                customerId: userId,
            }
            const response = await fetch('http://localhost:3000/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order_details)
            })
            const payment_options = await response.json()

            setPaymentOptions(payment_options)

        }}>Buy Now</button>
    )
}

export default PaymentButton