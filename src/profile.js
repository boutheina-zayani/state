 
import React from "react";

class Profile extends React.Component {
    state = {
        Person :{ fullName:"zayani boutheina",bio:"i am web devolper full stack js ",imgSrc:"./logo192.png",profession:"veb developer"},
        show: false
      };
      
    
    render() {
        
        return (
               <div >
                 <h1>{this.state.Person.fullName}</h1>
                <p>{this.state.Person.bio}</p>
                <h2>{this.state.Person.profession}</h2>
                <img src={this.state.Person.imgSrc} alt="BZ"/>
             </div>)
    }
  }
  
  export default Profile;
  