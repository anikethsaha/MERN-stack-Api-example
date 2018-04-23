import React from 'react';
import { connect} from  'react-redux';
 class UserForm extends React.Component{
  constructor(){
    super();
    this.submitFakeUserInsert = this.submitFakeUserInsert.bind(this);
    this.name = React.createRef();
    this.location = React.createRef();
    this.age = React.createRef();
    this.gender = React.createRef();
    this.job = React.createRef();
    this.state = {
      error : []
    }

  }
  componentWillMount() {
    // console.log(this.state.eg);
  }
  submitFakeUserInsert(e){
    e.preventDefault();
    const fakeUserData = {
      name : this.name.current.value,
      location : this.location.current.value ,
      age : this.age.current.value,
      gender : this.gender.current.value,
      job : this.job.current.value

    }
    if(localStorage.getItem('token') !== null && localStorage.hasOwnProperty('token')){
          fetch("/api/user/insert",{
            body:JSON.stringify(fakeUserData),
            method : "POST",
            headers :{
              'content-type' : 'application/json',
              'authorization' : localStorage.getItem('token')
            }

          }).then(res => res.json()).then((res) => {
              console.log(res);
          })
    }else{
      this.setState({
        error : "Please Login First"
      })

    }

  }

  render(){
    const style = {
      color : "red"
    }
    return (
      <form className="userform" onSubmit={this.submitFakeUserInsert}>
          <label style={style}>{this.state.error}</label>
          <input type="text" name="name"  placeholder="Write the name" ref={this.name} />
          <input type="text" name="location" placeholder="Write the Location"  ref = {this.location}  />
          <input type="number" name="age" placeholder="Age" ref = {this.age} />
          <input type="text" name="gender" placeholder="Gender" ref = {this.gender} />
          <input type="text" name="job" placeholder="Job" ref = {this.job} />
          <button type="submit" onClick={this.submitFakeUserInsert} name="button" className="btn">Submit</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {
    users : state.user,
    signInUser : state.signInUser
  }
}
const mapDispatchToProps = dispatch => {
      return {


    }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)
