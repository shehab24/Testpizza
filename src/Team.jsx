import React from 'react'


function Team(props) {
    return (
        <>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-sm-3 my-4">
           <div className="team_box">
               <img src={props.pic} alt="" className="image-fluid"/>
               
           </div>
           <div className="team_content">
         <div className="tem_item">
         <h3>{props.name}</h3>
           <h4>{props.title}</h4>
           
               <a href=""><i className="fab fa-facebook-f"></i></a>
               <a href=""><i className="fab fa-twitter"></i></a>
               <a href=""><i className="fab fa-instagram"></i></a>
               <a href=""><i className="fab fa-linkedin-in"></i></a>
          
         </div>
                   
               </div>
        </div>
    
            
        </>
    )
}

export default Team
