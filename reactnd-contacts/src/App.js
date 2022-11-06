import React, { Component } from 'react';
import ListContact from './ListContact';

class App extends Component {
  state = {
    contacts : [
      {
        "id": "parth",
        "name": "Parth Sharma",
        "handle": "@mr_parthSharma",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "Kaushikh",
        "name": "Kaushikh Bhagwati",
        "handle": "@bhagwati123",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "sid",
        "name": "Sid Das",
        "handle": "@siddas",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
  }

  render() {
    return (
      <div>
        <ListContact 
        contacts = {this.state.contacts}
        onDeleteContact = {this.removeContact}/>
      </div>
    );
  }
}

export default App;
