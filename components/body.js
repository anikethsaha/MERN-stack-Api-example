import React from 'react';
import UserForm from './userform';
import UserDiv from './userdiv';
export default class Body extends React.Component{
  constructor(props){
    super();
    this.handleRemoveFakeUserPanel = this.handleRemoveFakeUserPanel.bind(this);
    this.state={user:[]};
  }
  componentDidMount() {
      fetch('/api/get/all').then((res)=>{
        return res.json();
      }).then(users =>{


          this.setState({
            user: users
          })



      });


  }
  handleRemoveFakeUserPanel(e){
    console.log(e);
  $('.right_adduser_panel').toggleClass('open');
  }
  render(){
    return (

          <div className="container">
              <div className="center ">
                  <div>

                    <form >
                        <label htmlfor="">Seach BY name</label>
                        <input type="text" name="" className="u-full-width" onChange={this.props.ChangeName}  />
                        <button type="button" className=" btn"  name="button">Search</button>
                    </form>
                    <h3>Result for {this.props.p_status} {this.props.s_key}</h3>
                  </div>
              </div>
              <div className="right_adduser_panel">
                <span className="close-btn" onClick={this.handleRemoveFakeUserPanel}>&#10005;</span>
                <div className="right_panel_details">

                    <h3>Write Anything fake But valid <strong>&#9786;</strong></h3>
                </div>
                <UserForm />
              </div>
              <div>
                <div className="row">
                    {this.state.user.map( u => {
                      // body...
                      <UserDiv name={this.state.u.name} age={this.state.u.age} location={this.state.u.location} gender={this.state.u.gender} job={this.state.u.job} />
                    })}
                </div>
              </div>
          </div>

    )
  }
}
