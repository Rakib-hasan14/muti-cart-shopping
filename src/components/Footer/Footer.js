import React from 'react';

const Footer = () => {
    return (
        <footer className="main-bg pt-5-5">
            <div>
                <div className='row py-3 text-white text-center pt-5'>
                    <div className='col-md-4'>
                        <h6 className='mb-3'>FIND IT FAST</h6>
                        <p>About Us</p>
                        <p>Top Searches</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Testimonials</p>
                    </div>

                    <div className='col-md-4'>
                        <h6 className='mb-3'>CUSTOMER SUPPORT</h6>
                        <p>My Account</p>
                        <p>Track Order</p>
                        <p>Shop</p>
                        <p>Whislist</p>
                        <p>Return / Exchange</p>
                    </div>

                    <div className='col-md-4'>
                        <h6 className='mb-3'>OTHER BUSINESS</h6>
                        <p>Partnarship Programs</p>
                        <p>Associate Program</p>
                        <p>Shop</p>
                        <p>Wholesale Shocs</p>
                        <p>Wholesale Funny Shocs</p>
                    </div>
                </div>
                <hr />
                <div className="text-center py-3">
                    <h5>&copy; ALL Rights Reserved By DevRak</h5>
                </div>
            </div>
        </footer>
    );
};

export default Footer;