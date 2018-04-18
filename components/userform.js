import React from 'react';

export default class UserForm extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <form className="userform" action="/api/user/insert" method="post">
          <input type="text" name="name"placeholder="Write the name" />
          <input type="text" name="location" placeholder="Write the Location"/>
          <input type="number" name="age" placeholder="Age"/>
          <input type="text" name="gender" placeholder="Gender"/>
          <input type="text" name="job" placeholder="Job"/>
          <button type="submit" name="button" className="btn">Submit</button>
      </form>
    )
  }
}
