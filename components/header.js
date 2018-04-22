import React from 'react';
import { NavLink  } from 'react-router-dom'

export default class Header extends React.Component{
  constructor(props){
    super(props);

    this.handleAddFakeUserPanel = this.handleAddFakeUserPanel.bind(this);
    this.state = {isPanelBtnClicked : false};
  }
  handleAddFakeUserPanel(e){
    // console.log(e);
  $('.right_adduser_panel').toggleClass('open');
  }

  render(){
    return (
      <header className="header">
          <div className="container">
                  <div className="row">
                    <div className="three columns">
                            <div className=" columns">
                                <h1>FakeUser</h1>
                            </div>
                    </div>
                      <div className="header-left nine columns">
                        <div className="row ">
                            <div className="nav-links">
                                <NavLink  className="" to="/auth/login" >Login </NavLink >

                                <NavLink  className="" to="/home" >Home </NavLink >

                                <a className="" onClick={this.handleAddFakeUserPanel} >Add Fake User </a>
                            </div>
                        </div>
                      </div>

                  </div >
            </div>
      </header>
    );
  }
}
