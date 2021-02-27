import React from 'react'
import Pricing_card from "./Pricing_card"

function Pricing_plan() {
    return (
        <>
            <div className="pricing">
                <div className="container">
                    <div className="pricing_title">
                        <h2>Pricing plan</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui sunt quod nobis eum odio dicta quae adipisci dolores labore?</p>
                    </div>
                    <div className="pricing_card_box">
                        <div className="row">
                            <Pricing_card name="Breakfast Set" price="$100.99" title1="Tomato Poha" title2="Curd Upma" title3="Jowar Pyaz Ki Roti" title4="Muesli" title5=" Bread Upma" title6=" Curd Upma"/>
                            <Pricing_card name="Lunch Set" price="$200.99" title1="Tomato Poha" title2="Curd Upma" title3="Jowar Pyaz Ki Roti" title4="Muesli" title5=" Bread Upma" title6=" Curd Upma"/>
                            <Pricing_card name="Dinner Set" price="$300.99" title1="Tomato Poha" title2="Curd Upma" title3="Jowar Pyaz Ki Roti" title4="Muesli" title5=" Bread Upma" title6=" Curd Upma"/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pricing_plan
