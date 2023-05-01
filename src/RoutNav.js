import React from 'react'
import { Route, Routes } from "react-router-dom"
import CallSupport from './shopMember/callSupport/CallSupport'
import LandingPage from './shopMember/home/LandingPage'
import ProductPage from './shopMember/home/ProductPage'
import SingleProduct from './shopMember/home/SingleProduct'

function RoutNav() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact-us" element={<CallSupport />} />
            <Route path='/result' element={<ProductPage />} />
            <Route path='/result/:id' element={<SingleProduct />} />

        </Routes>
    )
}

export default RoutNav