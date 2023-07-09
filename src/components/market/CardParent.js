import React from 'react'
import ContactCard from './ContactCard'
import OfferCard from './OfferCard'
import Details from './Details'

export default function CardParent() {

    return (
        <div className='container-fluid py-5'>
            <div className='row w-80 mx-auto'>
                <div className='col-lg-8 col-xl-9  px-0'>
                    <ContactCard />
                    <div className='d-block d-lg-none px-0 '>
                        <OfferCard />
                    </div>

                    <Details />
                </div>
                <div className='col-lg-4 col-xl-3  ps-lg-4  d-lg-block d-none ps-0 pe-0'>
                    <OfferCard />
                </div>
            </div>

        </div>
    )
}
