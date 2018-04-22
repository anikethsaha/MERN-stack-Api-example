import React from 'react';
import {Provider} from 'react-redux';
import Header from './header';
import Footer from './Footer';
import Body from './body';
import BottomNavigationExampleSimple from './bottomNavigation';
export default  class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state={inputkey:""};
    console.log(this.props.store);
    this.storeval = this.props.store
  }
  isAuth(){
    if(this.state.inputkey == 'a'){
      return true;
    }
    return false;
  }
  render(){

    return (
      <Provider store = {this.storeval}>
        <section>
            <Header />

            <Body  s_key={this.state.inputkey}  />

            <BottomNavigationExampleSimple /> />
        </section>
      </Provider>

    )
  }
}
