import React from 'react'
import ContactCard from './ContactCard'

export default function GoogleMap() {
    return (
        <div className='container-fluid py-5 dark-blue' id='map-move'>
            <div className='row w-80 mx-auto'>
                <div className='col-lg-8 col-xl-9 px-0 text-center'>
                    <img src='asset/image 323.png' alt='' className='img-fluid w-100' />
                    <ContactCard />
                    <p className='pointer light-green mt-2 px-4 me-3 fw-bold py-2 mb-0 rounded d-inline-block mt-5'>
                        Make an Offer
                    </p>
                </div>
            </div>

        </div>
    )
}
