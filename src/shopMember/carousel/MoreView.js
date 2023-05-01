import { Typography } from 'antd'
import React from 'react'

export default function MoreView() {
    return (
        <div>
            <div className='morecontainer'>
                <Typography.Title level={4}>Explore More Categories</Typography.Title>
                <div id='moreDirection'>
                    <img alt='' src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/bedding_01.png?v=1681119808' id='moreImage' />
                    <img alt='' src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/toys_03_162347e0-9662-4e90-98dd-ffd45b872934.png?v=1681119999' id='moreImage' />
                    <img alt='' id='moreImage' src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/wellness_02.png?v=1681119962' />
                    <img alt='' id='moreImage' src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/accessories_04.png?v=1681120054' />
                    <img alt='' id='moreImage' src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/wellness_02.png?v=1681119962' />
                </div>
                <div id='moreCover'>
                    <img alt='' style={{ height: '8rem' }} src='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/web_banner_ticks_90360eab-932c-4a05-9fab-a4304a753ad6.jpg?v=1681120240' />
                </div>
            </div>
        </div>
    )
}






