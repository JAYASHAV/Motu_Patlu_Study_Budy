import React from 'react'

const Card = ({name,image,text,size}) => {
  return (<>
    <div className='
    border-[3px]
     h-[220px] w-[300px]
     rounded-[25px]
    border-[#000420]
     flex
     flex-col
     justify-between
     pb-[0]
     '>
    <h2 className='m-1.5 font-bold'>{name}</h2>
     <img src={image} alt="Error" className='m-auto' style={{height: size}}/>
     <div className='text-center'>
        <span className='text-[14px] font-bold m-auto'>{text}</span> 
        </div>
        <div className=' text-center rounded-b-[22px] bg-[#000420] text-white'>Buy Now</div>
     </div>

  </>
    
  )
}

export default Card
//https://www.pngarts.com/files/4/Saturn-Transparent-Image.png