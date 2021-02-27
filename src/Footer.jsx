import React from 'react'

function Footer() {
    return (
        <>
        <footer>

         <div className="footer_div">
         <div className="container">
                <div className="row">
                    <div className="col-lg-4 my-4">
                        <div className="footer_content">
                        <h2  className="brand_footer">Pizza <i className="fas fa-pizza-slice"></i></h2>
                        <p className="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid officiis quas totam error quia quidem? Delectus molestias doloribus accusamus minus.</p>
                        </div>
                        <div className="footer_icon">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 my-4">
                        <div className="footer_content">
                        <h2  className="brand_footer">Subscribe us</h2>
                        <p className="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="footer_sub">
                        <input type="text" name="" id="" placeholder="Enter your email"/>
                        <br/>
                        <button className="btn btn-danger textbold text-light">Subscribe us</button>
                      
                        </div>
                    </div>
                    <div className="col-lg-4 my-4">
                        <div className="footer_content">
                        <h2  className="brand_footer">Information</h2>             
                         </div>
                        <div className="footer_inf">
                        <div className="inf_box mb-2">
                        <h4><i className="fas fa-phone-alt"></i> Phone</h4>
                        <span className="ml-4">+03784347455</span>
                        </div>
                        <div className="inf_box mb-2">
                        <h4><i className="far fa-envelope"></i> Email</h4>
                        <span className="ml-4">mdshehab204@gmail.com</span>
                        </div>
                        <div className="inf_box mb-2">
                        <h4><i className="fas fa-map-marker-alt"></i> Address</h4>
                        <span className="ml-4">Dhaka,Barisal</span>
                        </div>

                      
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <div className="footer_copy_div py-3 text-center">
         Copyright © 2021 Vizo. All Rights Reserved by <span>Shehab mahamud</span>
         </div>
        </footer>
            
        </>
    )
}

export default Footer
