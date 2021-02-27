import React from 'react'
import Shop_card from "./Shop_card"
import image1 from "./img/shop1.jpg"
import image2 from "./img/shop2.jpg"
import image3 from "./img/shop3.jpg"
import image4 from "./img/shop4.jpg"
import image5 from "./img/shop5.jpg"
import image6 from "./img/shop6.jpg"
import image7 from "./img/shop7.jpg"
import image8 from "./img/shop8.jpg"

function Shop() {
    return (
        <>
        <div className="shop">
            <div className="container-fluid">
            <div className="Shop_title">
            <h2>Popular dishes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate porro officia voluptas 
            <br/>
            exercitationem quasi, minus numquam eaque iste quibusdam voluptatibus dolorem similique provident culpa.</p>

            </div>
                <div className="row py-4">
                <Shop_card image={image5} name="Top Siren Snacks" title="Breakfast"/>
                <Shop_card image={image2} name="Strap Snacks" title="Lunch"/>
                <Shop_card image={image7} name="Mexican Mix Rice" title="Dinner"/>
                <Shop_card image={image4} name="Cheese & Chicken" title="Dinner"/>
                <Shop_card image={image1} name="Deluxe Veggie" title="Lunch"/>
                <Shop_card image={image6} name="Peppy Paneer" title="Breakfast"/>
                <Shop_card image={image3} name="Capricciosa" title="Breakfast"/>
                <Shop_card image={image8} name="Top Siren Snacks" title="Lunch"/>

                </div>
           

            </div>
        </div>
            
        </>
    )
}

export default Shop
