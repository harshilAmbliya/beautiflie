import React from 'react'

export default function About(props) {
    return (
        <>

            <div className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <div id="mySidenav" className="sidenav">
                            <a href="/" onClick={props.closeNav} className="closebtn" >&times;</a>
                            {/*  */}
                            <a href="index.html">Home</a>
                            <a href="products.html">Products</a>
                            <a href="about.html">About</a>
                            <a href="client.html">Client</a>
                            <a href="contact.html">Contact</a>
                        </div>
                        <span className="toggle_icon" onClick={props.closeNav}><img src="./source/images/toggle-icon.png" alt='' /></span>
                        {/*  */}
                        <a className="logo" href="index.html"><img src="./source/images/logo.png" alt='' /></a>
                        <form className="form-inline ">
                            <div className="login_text">
                                <ul>
                                    <li><a href="/"><img src="./source/images/user-icon.png" alt='' /></a></li>
                                    <li><a href="/"><img src="./source/images/bag-icon.png" alt='' /></a></li>
                                    <li><a href="/"><img src="./source/images/search-icon.png" alt='' /></a></li>
                                </ul>
                            </div>
                        </form>
                    </nav>
                </div>
            </div>
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="about_section_main">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about_taital_main">
                                    <h1 className="about_taital">About Our beauty sotore</h1>
                                    <p className="about_text">labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                    <div className="readmore_bt"><a href="/">Read More</a></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div><img alt='' src="images/about-img.png" className="image_3" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="footer_logo"><a href="index.html"><img alt='' src="images/footer-logo.png" /></a></div>
                    <div className="contact_section_2">
                        <div className="row">
                            <div className="col-sm-4">
                                <h3 className="address_text">Contact Us</h3>
                                <div className="address_bt">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left10">Address :
                                                    Loram Ipusm</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left10">Call : +01
                                                    1234567890</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left10">Email :
                                                    demo@gmail.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="footer_logo_1"><a href="index.html"><img alt='' src="images/footer-logo.png" /></a></div>
                                <p className="dummy_text">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="main">
                                    <h3 className="address_text">Best Products</h3>
                                    <p className="ipsum_text">dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social_icon">
                        <ul>
                            <li>
                                <a href="/">Facebook &nbsp;<i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="/">Twitter &nbsp;<i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="/">Linked in &nbsp;<i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="/">Instagram &nbsp;<i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="footer_logo"><a href="index.html"><img alt='' src="./source/images/footer-logo.png" /></a></div>
                    <div className="contact_section_2">
                        <div className="row">
                            <div className="col-sm-4">
                                <h3 className="address_text">Contact Us</h3>
                                <div className="address_bt">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left10">Address : Loram Ipusm</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left10">Call : +01 1234567890</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left10">Email : demo@gmail.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="footer_logo_1"><a href="index.html"><img alt='' src="./source/images/footer-logo.png" /></a></div>
                                <p className="dummy_text">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="main">
                                    <h3 className="address_text">Best Products</h3>
                                    <p className="ipsum_text">dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social_icon">
                        <ul>
                            <li>
                                <a href="/">Facebook &nbsp;<i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="/">Twitter &nbsp;<i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="/">Linked in &nbsp;<i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="/">Instagram &nbsp;<i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
                </div>
            </div>
        </>
    )
}
