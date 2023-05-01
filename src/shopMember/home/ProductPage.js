import React from 'react'
import Hearder from '../herader/Hearder'
import '../css/productPage.css'
import CardItem from '../cardProduct/CardItem'
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Card, Menu, Typography } from 'antd';

function ProductPage() {
    const onClick = () => {
        console.log()
    }
    return (
        <div>
            <Hearder />
            <div className='productContainer'>
                <div>
                    <Card className='productFilterContainer'>
                        <Typography.Title level={4} style={{ margin: '0px' }}>FILTER</Typography.Title>
                        <Menu mode="inline" style={{
                            width: 256,
                        }}>
                            <Menu.Item>item 1</Menu.Item>
                            <Menu.Item>item 2</Menu.Item>
                            <Menu.SubMenu title="sub menu">
                                <Menu.Item>item 3</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Card>

                </div>
                <div className='productViewContainer'>
                    <CardItem />
                </div>
            </div>
        </div>
    )
}

export default ProductPage