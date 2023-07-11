import React from 'react'

export default function OfferCard() {
    return (
        <div className='bg-dark rounded text-center p-2 fixed-test'>
            <p className='light-green-text mb-2 fs-18 fw-semibold px-3'>
                8894 NW 199th street, Miami Fl 87513
            </p>
            <p className='fs-20 fw-bold text-white text-decoration-underline mb-0'>
                OFFERS DUE ON: 7/15/23
            </p>
            <p className='text-white my-2'>
                Contacting the seller without our authorization is prohibited.
            </p>
            <div className='light-green  fs-16 fw-bold px-4   py-2 mb-0 rounded  flex-shrink-0 pointer'>
                Make an Offer
            </div>
            <div className='light-green-text fs-16 fw-bold px-4 my-2   py-2 pointer  rounded  flex-shrink-0' style={{ border: "1px solid #40FF62" }}>
                <span>
                    <img src='asset/video.svg' alt='' className='me-2' />
                </span>
                Walkthrough Video
            </div>
            <div className="d-flex justify-content-center align-items-center position-relative">
                <img src="asset/Group 1000007030.svg" className="img-fluid pointer position-absolute top-50 start-50 translate-middle" alt="" />
                <img src="asset/Rectangle 17865.png" className="img-fluid w-100" alt="" />
            </div>
            <div>
                <div className='d-none d-lg-block text-start'>
            <div className='dark-blue  p-2 me-lg-2 mb-2 rounded d-flex '>
                <p className='flex-shrink-0 mb-0 me-2 '>
                    1.
                </p>
                <p className='mb-0 '>
                    Option 1 Option 1 Option 1 Option 1 Option 1 Option 1
                </p>

            </div>

            <div className='dark-blue  p-2 me-lg-2 mb-2 rounded d-flex'>
                <p className='flex-shrink-0 mb-0  me-2'>
                    2.
                </p>
                <p className='mb-0 '>
                    Option 2 Option 2 Option 2 Option 2 Option 2 Option 2
                </p>

            </div>

            <div className='dark-blue  p-2 me-lg-2 mb-2 rounded d-flex'>
                <p className='flex-shrink-0 mb-0  me-2'>
                    3.
                </p>
                <p className='mb-0 '>
                    Option 3 Option 3 Option 3 Option 3 Option 3 Option 3
                </p>

            </div>
            <div className='fs-18 border bg-white  p-1 rounded d-flex align-items-center justify-content-center'>
                            <input type='Email' className='rounded py-2 px-2  w-100 newsletter' placeholder='Email' />
                            <span className='pointer px-2 light-green  rounded d-flex align-items-center justify-content-center' style={{ width: "129px", height: "49px" }}>
                                Subscribe
                            </span>
                        </div>
                        <div className='py-4'>
                            <img src='asset/Path 16.svg' className='mx-md-3 mx-2' width="23" height="23" alt='' />
                            <img src='asset/instagram.svg' className='mx-md-3 mx-2' width="23" height="23" alt='' />
                            <img src='asset/linkedin (1).svg' className='mx-md-3 mx-2' width="23" height="23" alt='' />
                            <img src='asset/tik-tok.svg' className='mx-md-3 mx-2' width="23" height="23" alt='' />
                        </div>

                </div>
            </div>
        </div>
    )
}
