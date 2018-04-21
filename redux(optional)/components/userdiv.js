import React from 'react';

export default class UserDiv extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="four columns">
        <div className="user_container">
          <div className="user_avatar">
                <img src="./public/image/66468562db3b343617b4912256cad666.png" />
          </div>
          <div className="user_details">
                <h2 className="user_name"><strong>Name : </strong>{ this.props.name}</h2>
                <h3><strong>Age : </strong>{ this.props.age}</h3>
                <h3><strong>Gender : </strong>{ this.props.gender}</h3>
                <p><strong> Location :</strong>{ this.props.location}</p>
                <p><strong>Jobs :</strong>{ this.props.job}</p>
          </div>

        </div>
      </div>
    )
  }
}
