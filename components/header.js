import React from 'react';

export default class Header extends React.Component{
  constructor(){
    super();
    this.handleAddFakeUserPanel = this.handleAddFakeUserPanel.bind(this);
    this.state = {isPanelBtnClicked : false};
  }
  handleAddFakeUserPanel(e){
    console.log(e);
  $('.right_adduser_panel').toggleClass('open');
  }

  render(){
    return (
      <header className="header">
          <div className="container">
                  <div className="row">
                      <div className="seven columns">
                          <h1>FakeUser</h1>
                      </div>

                      <div className="five columns adduser_lnk_btn">
                          <a className="btn" onClick={this.handleAddFakeUserPanel} >Add Fake User </a>
                      </div>
                  </div >
            </div>
      </header>
    );
  }
}
