import React, { Component } from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      NumberHolder: 0
    };
  }

  // Update state for any input field
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Generate a reference number (e.g., random 4-digit number)
    const referenceId = Math.floor(Math.random() * 9000 + 1000); // 1000-9999
    this.setState({ NumberHolder: referenceId }, () => {
      const msg = `Thanks ${this.state.ename}\nYour Complaint was Submit ID is: ${this.state.NumberHolder}`;
      alert(msg);
    });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Register your complaints here!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input
              type="text"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Complaint:</label><br />
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              placeholder="Describe your issue"
              rows="4"
              cols="30"
              required
            />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;