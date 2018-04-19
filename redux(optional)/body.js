import React from 'react';
import UserForm from './userform';
import UserDiv from './userdiv';

// import  myactions from '../actions/exampleActions';

export default class Body extends React.Component{
  constructor(props){

    super(props);
    this.handleAction = this.handleAction.bind(this);
    this.handleRemoveFakeUserPanel = this.handleRemoveFakeUserPanel.bind(this);
    this.state={user:[]};

      console.log(this.props.s_key);
      console.log("insied the body component" , this.props.store);

      this.store = this.props.store

  }
  handleAction(){

    this.store.dispatch({
      type:"EXAMPLE_ACTIONS",
      user:{
        name:"example"
      }
    });
    // console.log(this.store.getState());
  }
  componentWillMount() {
      fetch('/api/get/all').then((res)=>{
        return res.json();
      }).then(users =>{

          this.store.dispatch({
            type :"FETCH_ALL",
            data : users
          })
          this.setState({
            user: users
          })

          // console.log(this.state.user);


      });

      // console.log(this.state.eg);


  }

  handleRemoveFakeUserPanel(e){
    // console.log(e);
  $('.right_adduser_panel').toggleClass('open');
  }
  render(){
    return (

          <div className="container">
              <div className="center ">
                  <div>
                      <p onClick={this.handleAction}>click</p>
                    <form >
                        <label htmlfor="">Seach BY name</label>
                        <input type="text" name="" className="u-full-width" onChange={this.props.ChangeName}  />
                        <button type="button" className=" btn"  name="button">Search</button>
                    </form>
                    <h3>Result for  {this.props.s_key}</h3>
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
                  // <button className="btn" onClick={this.handleAction}>click </button >
                    {this.store.getState().user.map(u => {
                      return  <UserDiv name={u.name} age={u.age} location={u.location} gender={u.gender} job={u.job} />;
                    })}
                </div>
              </div>
          </div>

    )
  }
}
