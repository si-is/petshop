import { AppBar, IconButton, Typography } from '@material-ui/core'
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Input, Badge } from 'antd';
import React from 'react'
import './HeaderStyle.css'


function Hearder() {


    const onSearch = (value) => {
        console.log(value)
    }

    return (
        // <AppBar position="static" >
        //     <div className='header'>
        //         <div style={{ color: '#000' }}>company logo</div>
        //         <div className='serachContainer'>
        //             <Input placeholder="Search..." className='searchInput' />
        //             <Button className='btnSearch'><SearchOutlined /></Button>
        //         </div>
        //         <div style={{ display: 'flex', alignItems: 'center' }}>
        //             <Badge count={5} style={{ cursor: 'pointer' }}>
        //                 <ShoppingCartOutlined className='userIcon' style={{ cursor: 'pointer' }} />
        //             </Badge>
        //             <IconButton style={{ marginLeft: '1rem' }}>
        //                 <UserOutlined className='userIcon' />
        //             </IconButton>
        //         </div>
        //     </div>

        // </AppBar>
        <div className='headerContainer'>
            <div className='header'>
                <div>Company Logo</div>
                <div className='searchContainer'>
                    <input className='searchInput' />
                    <button className='btnSearch'>
                        <SearchOutlined style={{ fontSize: '1rem' }} />
                    </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Badge count={5} style={{ cursor: 'pointer' }}>
                        <ShoppingCartOutlined className='userIcon' style={{ cursor: 'pointer' }} />
                    </Badge>
                    <IconButton style={{ marginLeft: '1rem' }}>
                        <UserOutlined className='userIcon' />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Hearder