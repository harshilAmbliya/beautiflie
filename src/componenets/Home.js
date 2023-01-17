import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

   const openNav = () => {
      document.getElementById("mySidenav").style.width = "100%"
   }

   const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0"
   }

   return (
      <>

         <div className="header_section">
            <div className="container-fluid">
               <nav className="navbar navbar-light bg-light justify-content-between">
                  <div id="mySidenav" className="sidenav">
                     <a href="/" onClick={closeNav} className="closebtn" >&times;</a>
                     
                     <Link to="/">Home</Link>
                     <Link to="/products">Products</Link>
                     <Link to="/about">About</Link>
                     <Link to="/client">Client</Link>
                     <Link to="/contact">Contact</Link>
                  </div>
                  <span className="toggle_icon" onClick={openNav}><img src="./source/images/toggle-icon.png" alt='' /></span>
                  {/*  */}
                  <Link className="logo" to="/"><img src="./source/images/logo.png" alt='' /></Link>
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

         <div className="banner_section layout_padding">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="row">
                           <div className="col-sm-6">
                              <h1 className="banner_taital">Beauty <br />Kit</h1>
                              <p className="banner_text">Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              <div className="read_bt"><a href="/">Buy Now</a></div>
                           </div>
                           <div className="col-sm-6">
                              <div className="banner_img"><img alt='' src="./source/images/banner-img.png" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-sm-6">
                              <h1 className="banner_taital">Beauty <br />Kit</h1>
                              <p className="banner_text">Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              <div className="read_bt"><a href="/">Buy Now</a></div>
                           </div>
                           <div className="col-sm-6">
                              <div className="banner_img"><img alt='' src="./source/images/banner-img.png" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-sm-6">
                              <h1 className="banner_taital">Beauty <br />Kit</h1>
                              <p className="banner_text">Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              <div className="read_bt"><a href="/">Buy Now</a></div>
                           </div>
                           <div className="col-sm-6">
                              <div className="banner_img"><img alt='' src="./source/images/banner-img.png" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-sm-6">
                              <h1 className="banner_taital">Beauty <br />Kit</h1>
                              <p className="banner_text">Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                              <div className="read_bt"><a href="/">Buy Now</a></div>
                           </div>
                           <div className="col-sm-6">
                              <div className="banner_img"><img alt='' src="./source/images/banner-img.png" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="product_section layout_padding">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <h1 className="product_taital">Our Products</h1>
                     <p className="product_text">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                  </div>
               </div>
               <div className="product_section_2 layout_padding">
                  <div className="row">
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-1.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-2.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-3.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-4.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-5.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-6.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-7.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-8.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-9.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-10.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-11.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                           <h4 className="bursh_text">Beauty Bursh</h4>
                           <p className="lorem_text">incididunt ut labore et dolore magna aliqua. Ut enim </p>
                           <img alt='' src="./source/images/img-12.png" className="image_1" />
                           <div className="btn_main">
                              <div className="buy_bt">
                                 <ul>
                                    <li className="active"><a href="/">Buy Now</a></li>
                                    <li><a href="/">Buy Now</a></li>
                                 </ul>
                              </div>
                              <h3 className="price_text">Price $30</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="seemore_bt"><a href="/">See More</a></div>
               </div>
            </div>
         </div>

         <div className="about_section layout_padding">
            <div className="container">
               <div className="about_section_main">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="about_taital_main">
                           <h1 className="about_taital">About Our beauty sotore</h1>
                           <p className="about_text">labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                           <div className="readmore_bt"><a href="/">Read More</a></div>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div><img alt='' src="./source/images/about-img.png" className="image_3" /></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="customer_section layout_padding">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <h1 className="customer_taital">What says customers</h1>
                  </div>
               </div>
               <div id="main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="client_section_2">
                           <div className="client_main">
                              <div className="client_left">
                                 <div className="client_img"><img alt='' src="./source/images/client-img.png" /></div>
                              </div>
                              <div className="client_right">
                                 <h3 className="name_text">Jonyro</h3>
                                 <p className="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="client_section_2">
                           <div className="client_main">
                              <div className="client_left">
                                 <div className="client_img"><img alt='' src="./source/images/client-img.png" /></div>
                              </div>
                              <div className="client_right">
                                 <h3 className="name_text">Jonyro</h3>
                                 <p className="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="client_section_2">
                           <div className="client_main">
                              <div className="client_left">
                                 <div className="client_img"><img alt='' src="./source/images/client-img.png" /></div>
                              </div>
                              <div className="client_right">
                                 <h3 className="name_text">Jonyro</h3>
                                 <p className="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                     <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                     <i className="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>

         <div className="contact_section layout_padding">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="contact_taital">Get In Touch</h1>
                     <p className="contact_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                  </div>
                  <div className="col-md-6">
                     <div className="contact_main">
                        <div className="contact_bt"><a href="/">Contact Form</a></div>
                        <div className="newletter_bt"><a href="/">Newletter</a></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="map_main">
               <div className="map-responsive">

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
