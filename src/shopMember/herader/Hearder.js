import { IconButton, } from '@material-ui/core'
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Modal, Badge } from 'antd';
import React, { useState } from 'react'
import './HeaderStyle.css'
import Login from '../login/Login';


function Hearder() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
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
                    <IconButton style={{ marginLeft: '1rem' }} onClick={() => showModal()}>
                        <UserOutlined className='userIcon' />
                    </IconButton>
                </div>
            </div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Login />
            </Modal>
        </div>
    )
}

export default Hearder