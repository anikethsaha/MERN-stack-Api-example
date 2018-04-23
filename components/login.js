import React from 'react';
import Paper from 'material-ui/Paper';
import Header from './header';
import BottomNavigationExampleSimple from './bottomNavigation';
import { withRouter } from "react-router-dom";
 class LoginComponent extends React.Component{

  constructor(props){
    super(props);
    this.isAuthenticated = this.isAuthenticated.bind(this);

    this.handlLogin = this.handlLogin.bind(this);
    this.store = this.props.store;
    this.password = React.createRef();
    this.email = React.createRef();
  }
  handlLogin(e){
    e.preventDefault();
    const data = {
      email : this.email.current.value,
      password : this.password.current.value
    }

      fetch('/w/login',
      {
             body:JSON.stringify(data),
             method : "POST",
             headers :{
               'content-type' : 'application/json'
             }
      }).then(res => {
          return  res.json()
        }).then(res => {
          if(res && res.status == "success"){
            // this.store.dispatch({
            //   type:"LOGIN_USER",
            //   data : res
            // })
            const bearer = res.token.split(' ');  //spiltting by space
            const jwtToken = bearer[1];
            localStorage.setItem("token",jwtToken);
            this.props.history.push("/home");
          }else{
            console.log("failed");
          }


      });

  }
  isAuthenticated(){
    if(localStorage.getItem("token") === undefined && !localStorage.hasOwnProperty('token')){
      console.log("token not present");
      return false;
    }else {
      console.log("token present");
      return true;
    }
  }
  render(){
    // const islogged = this.isAuthenticated;
    // console.log("calling from render" );

      return (
        <div>
          // <Header />
            <div className="container">
              <div className="login-bar">
                <div className="container">
                  <div className="row">
                      <div className="seven columns login-details">
                        <h1>Login Here </h1>
                        <p> Login to add fake user and contribute to the project</p>
                      </div>
                      <div className="five columns login-div">
                          <form  onSubmit={this.handlLogin} >
                                <input type="text" className="first-field"  ref={this.email} name="email" placeholder="Write the name" />
                                <input type="password" className="first-field" name="password" ref={this.password} placeholder="Write the password"/>
                                <button type="submit" name="button" onClick={this.handlLogin} className="btn">Submit</button>
                          </form>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <BottomNavigationExampleSimple />
        </div>
      );
  }
}
export default withRouter(LoginComponent);
