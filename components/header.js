import React from 'react';

export default class Header extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <header className="header">
          <div>
              <h1>FakeUser</h1>
          </div>
      </header>
    )
  }
}
