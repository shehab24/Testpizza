import React from 'react'

function Pricing_card(props) {
    return (
        <>
         <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-4">
             <div className="pricing_content">
                 <div className="pp_ti">
                 <h3>{props.name}</h3>
                 <h2>{props.price}</h2>
                 <p>Per-Package</p>
                 </div>
                 
                     <div className="tik_mark">
                     <span><i className="fas fa-check"></i>{props.title1}</span>
                     <span><i className="fas fa-check"></i>{props.title2}</span>
                     <span><i className="fas fa-check"></i>{props.title3}</span>
                     <span><i className="fas fa-check"></i>{props.title4}</span>
                     <span><i className="fas fa-check"></i>{props.title5}</span>
                     <span><i className="fas fa-check"></i>{props.title6}</span>
                     </div>

                 
                 <div className="pp_btn_box">
                 <button className="btn btn-danger px-3">Choose plan</button>
                 </div>
                 
             </div>
         </div>   
        </>
    )
}

export default Pricing_card
