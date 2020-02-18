import React, { Component } from 'react';
import './App.css';
import UserCard from './UserCard';
import FollowersCard from './FollowersCard';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/fnumilat')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({user: res})
    })
    .catch(err => console.log("No Data", err));
    console.log("componentDidMount");

    fetch('https://api.github.com/users/fnumilat/followers')
    .then(res => res.json())
    .then(followers => {
      console.log(followers);
      this.setState({followers: followers})
    })
    .catch(err => console.log("No Data", err));
  }



  render() {

    return(
      <div className="Main-Container">
        <UserCard user={this.state.user}/>
        <FollowersCard followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;