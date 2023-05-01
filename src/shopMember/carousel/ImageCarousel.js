import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '200px',
    color: '#fff',
    lineHeight: '200px',
    textAlign: 'center',
    margin: '10px',
    width: '98%',
    borderRadius: '6px'

};

function ImageCarousel() {
    return (
        <Carousel autoplay arrows >
            <div>
                <img alt='' style={contentStyle} src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Dash-Dog-_Web_1500x.jpg?v=1681323589' />
            </div>
            <div>
                <img alt='' style={contentStyle} src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/pet_food_web_93d72538-03e0-430f-ac3c-dd7309cc9e2f_1500x.jpg?v=1681279036' />
            </div>
            <div>
                <img alt='' style={contentStyle} src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/YIMT_web_b2c91449-22c8-4dfd-8ef8-2ebced98faf1_1500x.jpg?v=1681222742' />
            </div>

        </Carousel>
    )
}

export default ImageCarousel