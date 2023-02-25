import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '200px',
    textAlign: 'center',
    margin: '10px',
    width: '98%'

};

function ImageCarousel() {
    return (
        <Carousel autoplay arrows>
            <div>
                <img style={contentStyle} src='https://www.shutterstock.com/image-photo/dog-lies-comfortably-on-yellow-260nw-1761267053.jpg' />
            </div>
            <div>
                <img style={contentStyle} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWnPIjqElSvSc27fr2fV6S490IB7exUd36w&usqp=CAU' />
            </div>
            <div>
                <img style={contentStyle} src='https://static.vecteezy.com/system/resources/thumbnails/007/301/665/small/pet-shop-banner-design-template-cartoon-illustration-of-cats-dogs-house-food-vector.jpg' />
            </div>

        </Carousel>
    )
}

export default ImageCarousel