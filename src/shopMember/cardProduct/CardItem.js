import React, { useState } from 'react'
import { Card } from 'antd';
import './CardItemStyle.css'
const { Meta } = Card;

function CardItem() {
    const [loopData, setLoopData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    return (
        <div className='cardStyle'>
            <div className='cards'>
                {
                    loopData.map((element, index) => {
                        return (
                            <div key={index} className='cards'>
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CardItem