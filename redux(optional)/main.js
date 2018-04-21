import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Layout from './components/layout';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import UserForm from './components/userform';
// import {Provider} from 'react-redux';

class Home extends React.Component{
  render(){
    return (
      <div>
          <h1 > this is home </h1>
      </div>
    );
  }
}
//
class Example extends React.Component{
  render(){
    return (
      <h2> inside exampler  </h2>
    )
  }
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.layout = this.layout.bind(this);


  }
layout(){
  return (
    <Layout store={this.props.store} />
  );

}


render(){
  return (

    <BrowserRouter>
        <div>
            <Route path={"/layout"} component={Home} />
            <Route path={"/form"} component={UserForm} />
            <Route exact  path={"/"} component={this.layout}   />
        </div>
    </BrowserRouter>


  );
}

}


store.subscribe(() => {

  renderAll();
})




// redering the main component
const renderAll = () => {
  console.log("inside render all" ,store);
ReactDOM.render(

   <App store={store}/>,
  document.getElementById('root')
);
}
renderAll();
