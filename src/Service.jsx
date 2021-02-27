import React from 'react'
import Shop from "./Shop"

function Service() {
    return (
        <>
        <div className="mouth_waltering">
           <div className="mouth_title">
           <h1>Mouth-Watering Pizza</h1>
            <h2>$2.00</h2>
            <button className="btn btn-danger buy_now px-3">Buy Now</button>
           </div>
        </div>
              <div className="why_people">
            <div className="container">
                <div className="why_title">
                    <h2>What we can do for you</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quia aliquam laborum eum dolorem 
                    <br/>
                    inventore velit in sapiente recusandae nam nostrum dolore quis mollitia voluptatibus.</p>

                </div>
                <div className="row py-5">
                    <div className="col-lg-4 col-md-4 col-12 my-4">
                        <div className="choose_box">
                            <div className="why_icon">
                            <i className="fas fa-apple-alt"></i>
                            </div>
                            <h2>Breakfast</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim cum atque ratione odit cumque. Nostrum cum 
                             .</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 my-4">
                        <div className="choose_box">
                            <div className="why_icon">
                            <i className="fas fa-drumstick-bite"></i>
                            </div>
                            <h2> Lunch</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim cum atque ratione odit cumque. Nostrum cum 
                             .</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12  my-4">
                        <div className="choose_box">
                            <div className="why_icon">
                            <i className="fas fa-fish"></i>
                            </div>
                            <h2>Dinner</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim cum atque ratione odit cumque. Nostrum cum 
                             .</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 my-4">
                        <div className="choose_box">
                            <div className="why_icon">
                            <i className="fas fa-coffee"></i>
                            </div>
                            <h2>Coffee</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim cum atque ratione odit cumque. Nostrum cum 
                             .</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 my-4">
                        <div className="choose_box">
                            <div className="why_icon">
                            <i className="fas fa-pizza-slice"></i>
                            </div>
                            <h2>Snucks</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim cum atque ratione odit cumque. Nostrum cum 
                             .</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 my-2">
                        <div className="choose_box">
                            <div className="why_icon">
                            <i className="fas fa-truck-moving"></i>
                            </div>
                            <h2>Food Delivery</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim cum atque ratione odit cumque. Nostrum cum 
                             .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Shop/>
        </>
    )
}

export default Service
