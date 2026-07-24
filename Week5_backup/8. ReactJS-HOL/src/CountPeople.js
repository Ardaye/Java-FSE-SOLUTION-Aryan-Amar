import React, { Component } from 'react';

class CountPeople extends Component {
  // Constructor to initialize state
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  // Method to increment entry count
  updateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  // Method to increment exit count
  updateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    const { entrycount, exitcount } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>People Counter</h1>
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => this.updateEntry()} style={{ margin: '10px', padding: '10px 20px' }}>
            Login
          </button>
          <button onClick={() => this.updateExit()} style={{ margin: '10px', padding: '10px 20px' }}>
            Exit
          </button>
        </div>
        <h2>
          Login {entrycount} People Entered!!!&nbsp;&nbsp;&nbsp;
          Exit {exitcount} People Left!!!
        </h2>
      </div>
    );
  }
}

export default CountPeople;