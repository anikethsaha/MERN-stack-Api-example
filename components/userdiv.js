import React from 'react';

export default class UserDiv extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="three columns">
        <div className="user_container">
          <h2><strong>Name : </strong>{ this.props.name}</h2>
          <h3><strong>Age : </strong>{ this.props.age}</h3>
          <h3><strong>Gender : </strong>{ this.props.gender}</h3>
          <p><strong> Location :</strong>{ this.props.location}</p>
          <p><strong>Jobs :</strong>{ this.props.job}</p>
        </div>
      </div>
    )
  }
}
