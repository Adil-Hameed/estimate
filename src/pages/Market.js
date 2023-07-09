import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Header from '../components/market/Header'
import CardParent from '../components/market/CardParent'
import GoogleMap from '../components/market/GoogleMap'

export default function Market() {
    
    return (
        <>
            <PreNavbar />
            <Navbar />
            <Header />
            <CardParent />
            <GoogleMap />
            <Footer />
        </>
    )
}
