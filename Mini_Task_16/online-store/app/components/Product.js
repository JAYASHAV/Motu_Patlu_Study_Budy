import PaymentButton from "./PaymentButton"

const Product = ({
    imgUrl,
    productName = "Product Name",
    description = "Short product description goes here.",
    price = 20
}) => {

    
    return (
        <div className='w-fit rounded-xl overflow-hidden border-2 self-center m-auto'>
            <div><img src={imgUrl} alt="" className='w-72 h-40 object-cover' /></div>
            <div className="flex flex-col gap-2 p-3">
                <h3 className='font-bold w-40 text-sm line-clamp-2'>{productName}</h3>
                <div className='text-gray-200 text-xs'>{description}</div>
                <div className="flex justify-between items-center">
                <div className="font-semibold"><sup className='relative -top-1'>$ </sup>{price}<sup className='relative -top-1'> 00</sup></div>
                <PaymentButton/>
                </div>
            </div>
        </div>
    )
}

export default Product