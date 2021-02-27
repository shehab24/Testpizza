import React from 'react'


function What_we_card(props) {
    return (
        <>
        <div className="col-lg-4">
            <div className="what_we_content">
               <div className="what_img">
               <img src={props.img} alt="" className="image-fluid"/>
                <h2>{props.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste commodi soluta enim eveniet ab.</p>
               </div>
            </div>
        </div>
            
        </>
    )
}

export default What_we_card
