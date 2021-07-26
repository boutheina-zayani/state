import React from "react";
import "./style.css";
class App extends React.Component {
    state = {
        Person :{ fullName:"zayani boutheina",bio:"i am web devolper full stack js ",imgSrc:"./logo192.png",profession:"web developer"},
        show: false,
        count: 0
      };
      componentDidMount() {
        setInterval(()=>this.setState({
            count: this.state.count + 1
          }),1000);
      }

      toggle =()=> {
        this.setState({
          show:!this.state.show
        })
      }

    render() {
        const {fullName,bio,imgSrc,profession}=this.state.Person;
        return (
              <body>
                  <button onClick={this.toggle}>Show The Profile</button>
               
                {this.state.show && 
                 <div className="container">
                <div  Person={this.state.person}>
                  <div class="avatar-flip"> <img src={imgSrc} alt="BZ" className="img"  height="150" width="150"/></div>
                 <h1>{fullName}</h1>
                <p>{bio}</p>
                <h2>{profession}</h2>
                <h4>Time passed since the component was mounted is: {this.state.count} seconds.</h4>
                 </div>
                 </div>
                }
                 
             </body>)
    }
  }
  export default App;
