import React from 'react'
import Team from "./Team"
import team1 from "./img/team1.jpg"
import team2 from "./img/team2.jpg"
import team3 from "./img/team3.jpg"

function Chef() {
    return (
        <>
        <div className="chef">
           <div className="chef_content">
           <div className="container-fluid">
            <div className="chef_title">
                <h2>Our Chefs</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, veniam eos voluptatum accusantium </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, veniam eos  </p>
            </div>
                <div className="row">
                <div className="col-xl-9 mx-auto">
                <div className="row">
                     <Team pic={team1} name="Shehab"  title="Head of Chef" />
                     <Team pic={team2} name="Tanvir" title="Founder" />
                     <Team pic={team3} name="Sabbir"  title="Owner" />
                </div>
  
                </div>
                     
                </div>
            </div>
           </div>
        </div>
            
        </>
    )
}

export default Chef
