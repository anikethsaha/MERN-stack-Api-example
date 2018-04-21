import React from 'react';
import UserForm from './userform';
import UserDiv from './userdiv';
import { connect} from  'react-redux';


 class Body extends React.Component{
  constructor(props){

    super(props);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleRemoveFakeUserPanel = this.handleRemoveFakeUserPanel.bind(this);
    this.state={user:[]};
  }
  componentWillMount(){
      fetch('/api/get/all',{
        headers : {
        'content-Type': 'application/json',

       }
      }).then((res)=>{

        return res.json();
      }).then(users =>{
        this.props.onFetchPArticular(users);


      });


  }
  handleChangeName(e){
    const data ={
      name : e.target.value
    }
    fetch('/api/get',
    {
           body:JSON.stringify(data),
           method : "POST",
           headers :{
             'content-type' : 'application/json'
           }
    }
  ).then(res => {
   return  res.json()
  }
  ).then(users => {
  
      this.props.onFetchPArticular(users);

  });


    this.setState({
      inputkey:e.target.value
    })


 }



  handleRemoveFakeUserPanel(e){

  $('.right_adduser_panel').toggleClass('open');
  }
  render(){
    return (

          <div className="container">
              <div className="center ">
                  <div>

                    <form >
                        <label htmlfor="">Seach BY name</label>
                        <input type="text" name="" className="u-full-width" onChange={this.handleChangeName}  />
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

                    {this.props.users.map(u => {
                      return  <UserDiv name={u.name} age={u.age} location={u.location} gender={u.gender} job={u.job} />;
                    })}
                </div>
              </div>
          </div>

    )
  }
}
//
const mapStateToProps = state => {
  return {
    users : state.user
  }
}
const mapDispatchToProps = dispatch => {
      return {
        onFetchPArticular: users => {
          dispatch({
            type :"FETCH_ALL",
            data : users
          })
        }

    }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)
