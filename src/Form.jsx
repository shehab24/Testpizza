import React from 'react'

function Form() {
    return (
        <>
        <div className="form">

            <div className="container">
                <div className="form_title">
                    <h2>Message For Any Query</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio rem doloremque
                    <br/>
                     iste voluptatibus beatae a blanditiis odit nesciunt recusandae.</p>
                </div>
                <form action="" className="">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="" id="name" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="form-group">
                            <label htmlFor="name">Last Name</label>
                            <input type="text" name="" id="name" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name="" id="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="phone">Your Phone</label>
                            <input type="text" name="" id="phone" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="subject">Your Subject</label>
                            <input type="text" name="" id="subject" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="message">Your message</label>
                            <textarea name="" id="message" cols="20" rows="6" className="form-control text_area"></textarea>
                        </div>
                    </div>
                </div>
                <button className="btn btn-danger">Send message</button>
                </form>
            </div>
            
        </div>
       
            
        </>
    )
}

export default Form
