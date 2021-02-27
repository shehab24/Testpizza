import React from 'react'
import pic from "./img/chef.png"

function About() {
    return (
        <>
        <section className="about_us">
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-6 order-lg-1 order-2">
                   <div className="about_content_main">
                   <div className="about_content">
                        <h3>Wanna know About us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio architecto labore aut veritatis dicta aspernatur? Rem optio ex, temporibus fuga ipsam dolore commodi obcaecati laudantium nesciunt officia minus, perferendis odit ullam, voluptatum blanditiis nihil tempore officiis quaerat id et reiciendis.</p>
                      <a href="" className="btn btn-outline-dark">Get started</a>
                        </div>
                   </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                    <div className="about_image_main">
                        <div className="about_image">
                        <img src={pic} alt="" className="image-fluid"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About
