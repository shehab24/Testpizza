import React from 'react'


function Shop_card(props) {
    return (
        <>
        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div className="shop_image">
        <img src={props.image} alt="" className="image-fluid"/>
        <div className="shop_card_title">
            <div className="shop_button">
            <h2>{props.name}</h2>
            <h4>{props.title}</h4>
            <button className="btn btn-danger buy">Buy here</button>
            </div>
        </div>


        </div>

        </div>
            
        </>
    )
}

export default Shop_card
