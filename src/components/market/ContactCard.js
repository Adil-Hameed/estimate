
export default function ContactCard() {
    return (
        <div className="d-lg-flex align-items-center text-center text-lg-start py-lg-3 pb-3">
            <div className="">
                <img src="asset/Group 1000007262.png" alt="" className="img-fluid" />
            </div>
            <div>
                <h4 className="fw-bold mt-4 mt-lg-0">
                    Maria Alexandra Banoy
                </h4>
                <h5 className="fw-bold fs-22 light-blue-text">
                    Investor Relations Rep
                </h5>
                <p className="fs-17 fw-normal ">
                    <span>
                        <img src='asset/Vector.svg' className='img-fluid me-3' alt='' />
                    </span>
                    (345) 087 - 1239
                </p>
                <p className="fs-17 fw-normal ">
                    <span>
                        <img src='asset/Group 1000007015.svg' className='img-fluid me-3' alt='' />
                    </span>
                    john@brix.com
                </p>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start ">
                    <div className='pointer px-4 me-3 mb-2 py-2 mb-0 rounded  fs-17' style={{ backgroundColor: "#D9D9D9" }}>
                        <img src='asset/Frame.svg' className='img-fluid me-1' alt='' />
                        Share
                    </div>
                    <div className='pointer light-blue  px-4 me-3 mb-2 py-2 mb-0 rounded fs-17 '>
                        Make an inquiry for this property
                    </div>
                </div>
            </div>
        </div>
    )
}
