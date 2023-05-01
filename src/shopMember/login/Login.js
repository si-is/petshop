import React, { useState } from 'react'
import './login.css'
import { Tabs, Typography, Button, notification, Input } from 'antd'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { ArrowRightOutlined } from '@ant-design/icons'
import OTPInput from "otp-input-react";

export default function Login() {
    const [phone, setPhone] = useState()
    const [otpPage, setOtpPage] = useState(false)
    const [OTP, setOTP] = useState("");

    const [emailId, setEmailId] = useState('')
    const [emailOtp, setEmailOtp] = useState('')
    const [emailOtpPage, setEmailOtpPage] = useState(false)



    const openNotification = (type, dataType) => {
        notification[type]({
            message: 'Successful!',
            description:
                `Your ${dataType}  has been successfully verified`,
            duration: 3,
        });
    };
    const phoneOtp = () => {
        setOtpPage(true)
    }

    const emailsOtp = () => {
        setEmailOtpPage(true)
    }

    const otpVerify = () => {
        openNotification('success', 'mobile number')
        setOtpPage(false)
        setPhone('')
        setOTP('')
    }

    const emailotpVerify = () => {
        openNotification('success', 'email id')
        setEmailOtpPage(false)
        setEmailId('')
        setEmailOtp('')
    }

    return (
        <div className='loginContainer'>
            <div className='loginText'>
                <Typography.Title level={3}>Login with OTP</Typography.Title>
                <Typography.Title level={5}>Enter your log in Credentials</Typography.Title>
                <div id='loginCard'>
                    <Tabs centered hideAdd={true} type='card' size='large'>
                        <Tabs.TabPane tab="Mobile No." key="item-1">
                            {
                                otpPage ? <div id='loginOtpContainer' >
                                    <div>verification code is sent to +{phone}</div>
                                    <br />
                                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure={false} />
                                    <br />
                                    <Button type='primary' id='loginBtn' onClick={() => otpVerify()}>Verify <ArrowRightOutlined /></Button>
                                </div> : <div>
                                    <PhoneInput
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                        }}
                                        country={'in'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
                                    />
                                    <br />
                                    <Button type='primary' id='loginBtn' onClick={() => phoneOtp()} >Continue <ArrowRightOutlined /></Button>
                                </div>
                            }

                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Email Id" key="item-2">
                            {
                                emailOtpPage ? <div id='loginOtpContainer'>
                                    <div>verification code is sent to {emailId}</div>
                                    <br />
                                    <OTPInput value={emailOtp} onChange={setEmailOtp} autoFocus OTPLength={4} otpType="number" disabled={false} secure={false} />
                                    <br />
                                    <Button type='primary' id='loginBtn' onClick={() => emailotpVerify()}>Verify <ArrowRightOutlined /></Button>
                                </div> : <div>
                                    <Input placeholder='Enter email id' style={{ width: '19rem' }} value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                    <br />
                                    <br />
                                    <Button type='primary' id='loginBtn' onClick={() => emailsOtp()} >Continue <ArrowRightOutlined /></Button>
                                </div>
                            }
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
