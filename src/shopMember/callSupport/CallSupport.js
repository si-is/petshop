import React from 'react'
import Hearder from '../herader/Hearder'
import './CallStyle.css'
import { Button, Input, Typography } from 'antd'

const { TextArea } = Input;

function CallSupport() {
    return (
        <div>
            <Hearder />
            <div className='clContainer'>
                <h2>Contact us</h2>
            </div>
            <div className='csection'>
                <div className='cinfo'>
                    <h3>Info</h3>
                    <div>
                        <p className='ctext'>Take a minute to see the FAQ section below, we hope it will answer some of your common queries.
                            In case you still haven't found your answer, here's how you can contact us:</p>
                    </div>
                    <h4>Call us at:</h4>
                </div>
                <div className='cContact'>
                    <div className='contantform'>
                        <Typography.Title level={4} id='contactMargin'>Name</Typography.Title>
                        <Input />
                        <Typography.Title level={4} id='contactMargin'>Email</Typography.Title>
                        <Input />
                        <Typography.Title level={4} id='contactMargin'>Message</Typography.Title>
                        <TextArea rows={4} />
                        <div id='btnContact'>
                            <Button type='primary'>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallSupport