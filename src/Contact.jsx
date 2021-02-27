import React from 'react'
import Form from "./Form"

function Contact() {
    return (
        <>
<div className="contact_sec">
    <div className="container">
        <div className="row py-5">
        <div className="col-lg-4 col-md-4 col-12 my-4">
             <div className="pricing_content contact_box">
                  <div className="icon_box ">
                  <div className="inc_back">
                  <i className="far fa-envelope"></i> 
                        </div>
                        <h3>Email here</h3>
                        <span>hello@vizo.com</span>
                        <span>support@vizo.com</span>
                  </div>
                 
             </div>
         </div>
        <div className="col-lg-4 col-md-4 col-12 my-4">
             <div className="pricing_content contact_box">
                  <div className="icon_box ">
                  <div className="inc_back">
                  <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Location Here</h3>
                        <span>Dhaka ,Bangladesh</span>
                        <span>Barishal,Bangladesh</span>
                  </div>
                 
             </div>
         </div>
        <div className="col-lg-4 col-md-4 col-12 my-2">
             <div className="pricing_content contact_box">
                  <div className="icon_box ">
                  <div className="inc_back">
                        <i className="fas fa-phone-alt"></i> 
                        </div>
                        <h3>Call here</h3>
                        <span>+123 456 7890</span>
                        <span>+123 456 7890</span>
                  </div>
                 
             </div>
         </div>
        </div>
    </div>
</div>
<Form/>
            
        </>
    )
}

export default Contact
