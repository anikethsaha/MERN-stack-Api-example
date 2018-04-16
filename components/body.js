import React from 'react';

export default class Body extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return (

          <div className="container">
              <div className="center">
                  <div>
                    <h1>Search</h1>
                    <form >
                        <label htmlfor="">Seach BY name</label>
                        <input type="text" name="" className="u-full-width" onChange={this.props.ChangeName}  />
                        <button type="button" className="button button-primary"  name="button">Search</button>
                    </form>
                    <h3>Result for {this.props.s_key}</h3>
                  </div>
              </div>
          </div>

    )
  }
}
