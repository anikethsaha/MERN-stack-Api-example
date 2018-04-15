import React from 'react';
import ReactDOM from 'react-dom';

class Hello  extends React.Components{
  render(){
    return (
      <h1>
          hello  world;
      </h1>
    )
  }
}
ReactDOM.render(
  <Hello />,
  document.getElementById('root')

)
