import React from 'react'
import './TrackPetShopStyle.css'
import { ShopTwoTone, MessageTwoTone, DashboardTwoTone } from '@ant-design/icons'
import { Link } from "react-router-dom"


function TrackPetShop() {
    return (
        <div className='trackContainer'>
            <div className='trackInnerContainer'>
                <div className='trackIcon'>
                    <div className='trackIconCircle'>
                        <DashboardTwoTone />
                    </div>
                    <div>Track Package</div>
                </div>
                <div className='trackIcon'>
                    <div className='trackIconCircle'>
                        <ShopTwoTone />
                    </div>
                    <div>75+ Store & Saps</div>
                </div>
                <Link to='contact-us'>
                    <div className='trackIcon'>
                        <div className='trackIconCircle'>
                            <MessageTwoTone />
                        </div>
                        <div>24/7 Support</div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default TrackPetShop