import React from 'react';
import axios from 'axios';

import PeopleList from './components/PeopleList';
import User from './components/User';

import './App.css';

import { token } from './assets/auth.js';

class App extends React.Component {
  state = {
    user: [],
    userName: '',
    people: []
  };

  componentDidMount() {
    let options = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .get('https://api.github.com/users/c0derbr1t', options)
      .then(response => {
        console.log("my card", response.data);
        this.setState({
          user: response.data,
          userName: response.data.login
        })
      })
      .catch(error => console.log(error));

    axios
      .get('https://api.github.com/users/c0derbr1t/followers', options)
      .then(res => {
        // console.log('people.data', res.data);
        this.setState({
          people: res.data
        })
      })
      .catch(err => console.log(err));
  }

  // componentDidUpdate() {
  //   if

  // }

  // handleChanges = e => {
  //   this.setState({
  //     userName: e.target.value
  //   });
  // }

  // fetchPeople = e => {
  //   e.preventDefault();
  //   axios
  //     .get(`https://api.github.com/users/${this.state.userName}`)
  //     .then(response => {
  //       this.setState({
  //         user: [response.data]
  //       })
  //     })
  //     .catch(error => console.log(error));

  //   axios
  //     .get(`https://api.github.com/users/${this.state.userName}/followers`)
  //     .then(res => {
  //       this.setState({
  //         people: [res.data]
  //       })
  //     })
  //     .catch(err => console.log(err));
  // };


  render() {
    // console.log('people', this.state.people);
    return (
      <div className='App'>
        <h1>Hello {this.state.userName}!</h1>
        {/* <div>
          <input
            type='text'
            value={this.state.userName}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchPeople}>Go!</button>
        </div> */}
        <div>
          <User user={this.state.user} />
        </div>
        <div>
        <h2>Followers:</h2>
          <PeopleList people={this.state.people} />
        </div>
      </div>
    )
  }
}

export default App;
