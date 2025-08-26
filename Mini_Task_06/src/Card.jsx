import React from 'react'

const Card = ({name,email,image,bgcolor,textcolor,num}) => {
    return (
        <div style={{
            width: '530px',
            height: '240px',
            backgroundColor: bgcolor,
            borderRadius: '50px',
            color: textcolor,
            padding: '10px',
            margin:'40px'

        }}>
            <h2 style={{
                margin: 'auto',
                width: 'fit-content',
                color:'#00ffff'
            }}>MEMBER-{num}</h2>
            <div style={{display:'flex'}}>

                <div style={{ width: '300px' }}>

                    <h3>NAME : <span style={{ fontWeight: '500' }}>{name}</span></h3>
                    <h3>EMAIL : <span style={{ fontWeight: '500' }}>{email}</span></h3>
                    <h3>SEX  : <span style={{ fontWeight: '500' }}>MALE</span></h3>
                    <h3>CITY : <span style={{ fontWeight: '500' }}>FURFURI NAGAR</span></h3>
                </div>

                <div>
                    <img src={image} alt="PLEASE CHECK YOUR INTERNET" style={{ height: '200px' }} />
                </div>

            </div>

        </div>
    )
}

export default Card