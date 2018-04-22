import React from 'react';
import Paper from 'material-ui/Paper';
import Header from './header';
import BottomNavigationExampleSimple from './bottomNavigation';
export default class LoginComponent extends React.Component{
  constructor(props){
    super(props);
    console.log("inside LoginComponent");
  }
  render(){


      return (
        <div>
          <Header />
            <div className="container">
              <div className="login-bar">
                <div className="container">
                  <div className="row">
                      <div className="seven columns login-details">
                        <h1>Login Here </h1>
                        <p> Login to add fake user and contribute to the project</p>
                      </div>
                      <div className="five columns login-div">
                          <form  >
                                <input type="text" className="first-field" name="name"placeholder="Write the name" />
                                <input type="password" className="first-field" name="location" placeholder="Write the password"/>
                                <button type="submit" name="button" className="btn">Submit</button>
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
