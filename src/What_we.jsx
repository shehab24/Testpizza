import React from 'react'
import About from "./About"
import What_we_card from "./What_we_card"
import img1 from "./img/offer1.png"
import img2 from "./img/offer2.png"
import img3 from "./img/offer3.png"
import Why from "./Why_people"
import Pricing_plan from "./Pricing_plan";

function What_we() {
    return (
        <>
        <About/>
        <div className="what_me">
          <div className="container">
          <div className="what_title">
                <h2>What we offer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt 
                <br/>
                rem delectus explicabo sequi consequatur ipsa ullam assumenda vero necessitatibus aperiam.</p>
                
            </div>
            <div className="row">
            <What_we_card img={img1} name="Breakfast" /> 
            <What_we_card img={img2} name="Lunch" /> 
            <What_we_card img={img3} name="Dinner" /> 
                
            </div>
          </div>
        </div>
            <Why/>
            <Pricing_plan/>
        </>
    )
}

export default What_we
