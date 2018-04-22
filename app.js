import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import Footer from './Components/Footer';
import Body from './Components/body';
 import { createStore }  from 'redux';
class Layout extends React.Component{
  constructor(props){
    super(props);
    this.actionChange = this.actionChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.state={inputkey:""};
    // console.log(this.props);
    this.store = this.props.store
    // console.log(this.store);
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
    console.log(res);
  return  res.json()
 }
 ).then(users => {
  //  console.log(users);
  this.store.dispatch({
    type :"FETCH_ALL",
    data : users
  })
   this.setState({
     user: users
   })
  //  console.log(this.state.user);
 })


   this.setState({
     inputkey:e.target.value
   })


}
actionChange(){
  // console.log("inside the change handle");
  this.store.dispatch({
    type:"ADD",
    data : 400
  })
}
  render(){
    return (
      <section>
          <Header />

          <Body ChangeName={this.handleChangeName} store = { this.store}  s_key={this.state.inputkey} />
          // <a onClick={this.actionChange}>change</a>
          <Footer />
      </section>
    )
  }
}

const initialState = () => {
  return ({
    user : []
  })
}
const myReducer = (state = initialState(),action) => {
  // console.log("inside reducer" , action , state);
  switch (action.type) {
    case "ADD":
      // console.log("add");
      return state.data + 1;
      break;
      case "FETCH_ALL":
        // console.log("fetching all here all the best");
        return Object.assign({},state,{
          user: action.data
        });
        break;

    default:
      return state;
  }
}
const myAction = {
  type : "ADD",
  data : 200
}
let store = createStore(myReducer);
store.subscribe(() => {
  // console.log("store changed",store.getState());
  renderAll();
})
// store.dispatch(myAction);
const renderAll = () => {
ReactDOM.render(
  <Layout store={store}/>,
  document.getElementById('root')
);
}
renderAll();
