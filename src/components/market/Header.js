import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
    // const images = ["asset/Rectangle 17876.jpg", "asset/Rectangle 17877.jpg", "asset/Rectangle 17878.jpg", "asset/Rectangle 17879.jpg",
    //     "asset/Rectangle 17880.jpg"]
    return (
        <>
            <div className="container-fluid dark-blue">
                <div className="w-80 mx-auto d-lg-flex align-items-center text-center text-lg-start py-3">
                    <Link to='map-move'>
                        <div className="light-blue px-5 py-3 d-inline-block rounded-4 mb-3 mb-lg-0 pointer">
                            <img
                                src="asset/travel-map--navigation-map-maps-gps.svg"
                                className="img-fluid"
                                alt=""
                            />
                            <span className="ms-2">
                                Map
                            </span>
                        </div>
                    </Link>
                    <div className="d-flex align-items-center ms-3 justify-content-lg-start justify-content-center">
                        <img
                            src="asset/Group 1000007020.svg"
                            className="img-fluid flex-shrink-0"
                            alt=""
                        />
                        <p className="text-white mb-0 ms-2 fs-22">
                            8894 NW 199th street, Miami Fl 87513
                        </p>
                    </div>
                </div>
                <div className="w-80 row mx-auto d-lg-flex d-none">
                    <div className="col-6 px-0">
                        <div className="h-100 d-flex align-items-stretch">
                            <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                src="asset/Rectangle 17876.jpg"
                                className="img-fluid r-15 pointer "
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-3 px-0">
                        <div className="h-50 d-flex flex-column justify-content-between ">
                            <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                src="asset/Rectangle 17877.jpg"
                                className="img-fluid r-8   ms-3 mb-2 pointer"
                                alt=""
                            />
                            <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                src="asset/Rectangle 17878.jpg"
                                className="img-fluid r-8   ms-3 mt-2 pointer"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-3 px-0">
                        <div className="h-50 d-flex flex-column justify-content-between ">
                            <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                src="asset/Rectangle 17879.jpg"
                                className="img-fluid r-8   ms-3 mb-2 pointer"
                                alt=""
                            />
                            <div className=' px-0 r-8   ms-3 mt-2 position-relative' data-bs-toggle="modal" data-bs-target="#exampleModal">

                                <img
                                    src="asset/Rectangle 17880.jpg"
                                    className="img-fluid r-8"
                                    alt=""
                                />
                                <div className='position-absolute pointer  w-100 h-100 top-0 r-8 d-flex justify-content-center flex-column align-items-center' style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                                    <p className='mb-0'>
                                        + 10 Photos
                                    </p>
                                    <p className='light-blue mt-2 px-3 me-3 fw-bold py-2 mb-0 rounded d-inline-block pointer '>
                                        See All Photos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-0 mx-0 d-lg-none d-block'>
                    <img src="asset/Rectangle 17865.png" className="img-fluid w-100 mb-3 pointer" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                    <div className='w-80 row mx-auto'>
                        <div className='col-4'>
                            <img src="asset/Rectangle 17862.png" className="img-fluid w-100 pointer" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal" />

                        </div>
                        <div className='col-4'>
                            <img src="asset/Rectangle 17863.png" className="img-fluid w-100 pointer" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal" />

                        </div>
                        <div className='col-4'>
                            <div className='position-relative rounded pointer' data-bs-toggle="modal" data-bs-target="#exampleModal">

                                <img src="asset/Rectangle 17864.png" className="img-fluid w-100" alt="" />
                                <div className='position-absolute rounded w-100 h-100 top-0 r-8 d-flex justify-content-center flex-column align-items-center' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                                    <p className='mb-0 fs-7'>
                                        + 10 Photos
                                    </p>
                                    <p data-bs-toggle="modal" data-bs-target="#exampleModal" className='light-green mt-1 p-sm-3 p-2  fw-bold  mb-0 rounded d-inline-block pointer fs-7 '>
                                        See All Photos
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="w-80 mx-auto d-lg-flex align-items-center justify-content-between text-center text-lg-start py-3">
                    <div className="">
                        <p className='fs-40 light-green-text'>
                            S2R Off-Market Deal
                        </p>
                        <p className='fs-33'>
                            Offers due on: 7/15/23
                        </p>
                    </div>
                    <div className='text-lg-end'>

                        <p className='light-green mt-2 px-4  fw-bold py-2 mb-0 rounded d-inline-block pointer '>
                            Make an Offer
                        </p>
                    </div>
                </div>
            </div>

            {/* -----------modal--------- */}


            {/* <!-- Modal --> */}
            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable mx-auto" style={{ maxWidth: "70%", height: "100%", margin: "0" }}>
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">All Photos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row px-0'>
                            
                            <div className='col-lg-6' >

                                <img
                                    src="asset/Rectangle 17876.jpg"
                                    className="img-fluid r-15 w-100  mb-4"
                                    alt=""
                                />
                            </div>
                            <div className='col-lg-6' >

                                <img
                                    src="asset/Rectangle 17876.jpg"
                                    className="img-fluid r-15 w-100  mb-4"
                                    alt=""
                                />
                            </div> 
                            <div className='col-lg-6' >

                                <img
                                    src="asset/Rectangle 17876.jpg"
                                    className="img-fluid r-15 w-100  mb-4"
                                    alt=""
                                />
                            </div> <div className='col-lg-6' >

                                <img
                                    src="asset/Rectangle 17876.jpg"
                                    className="img-fluid r-15 w-100  mb-4"
                                    alt=""
                                />
                            </div>
                             <div className='col-lg-6' >

                                <img
                                    src="asset/Rectangle 17876.jpg"
                                    className="img-fluid r-15 w-100  mb-4"
                                    alt=""
                                />
                            </div> <div className='col-lg-6' >

                                <img
                                    src="asset/Rectangle 17876.jpg"
                                    className="img-fluid r-15 w-100  mb-4"
                                    alt=""
                                />
                            </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
