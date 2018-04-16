import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import Footer from './Components/Footer';
import Body from './Components/body';
class Layout extends React.Component{
  constructor(){
    super();
    this.handleChangeName = this.handleChangeName.bind(this);
    this.state={inputkey:""};
  }
 handleChangeName(e){

   this.setState({
     inputkey:e.target.value
   })
   

  }
  render(){
    return (
      <section>
          <Header />
          <Body ChangeName={this.handleChangeName} s_key={this.state.inputkey} />
          <Footer />
      </section>
    )
  }
}



ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);
