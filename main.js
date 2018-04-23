import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Layout from './components/layout';
import { BrowserRouter , HashRouter ,Redirect , Route, Link } from 'react-router-dom';

import LoginComponent from './components/login';
import Header from './components/header';

class App extends React.Component{
  constructor(props){
    super(props);
    this.layout = this.layout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.logincomponent = this.logincomponent.bind(this);


  }
layout(){
  return (
    <Layout store={this.props.store} />
  );

}
logincomponent(){
  return (
    <LoginComponent store={this.props.store} />
  );

}
layout(){
  return (
    <Layout store={this.props.store} />
  );

}
isAuthenticated(){
  if(localStorage.getItem("token") == null && !localStorage.hasOwnProperty('token')){
    console.log("token not present");
    return false;
  }else {
    console.log("token present");
    return true;
  }
}



render(){
  console.log(this.isAuthenticated);
  return (


    <HashRouter >
        <div>
            <Route path = "/" component={Header} />
            <Route path={"/home"} component={this.layout}   />
            <Route path={"/auth/login"} component = {this.logincomponent} />
          



        </div>
    </HashRouter >


  );
}

}


store.subscribe(() => {

  renderAll();
})




// redering the main component
const renderAll = () => {

ReactDOM.render(
   <App store={store}/>,
  document.getElementById('root')
);
}
renderAll();
