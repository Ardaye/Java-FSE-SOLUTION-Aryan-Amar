import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: ''
      }
    };
  }

  // Validate a single field based on its name and value
  validateField = (name, value) => {
    let errors = { ...this.state.errors };

    switch (name) {
      case 'fullName':
        errors.fullName = value.length < 5
          ? 'Full Name must be at least 5 characters long!'
          : '';
        break;

      case 'email': {
        // Regex as given in the hint (copy exactly)
        const validEmailRegex = RegExp(
          '^(([^<>()\\r\\n,.;:&$()\"]*[^<>()\\r\\n,.;:&$()\"]*)+([^<>()\\r\\n,.;:&$()\"]*)+([^<>(),;:&$()\"]*)+[^<>(),;:&$()\"]*)$i'
        );
        errors.email = validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
        break;
      }

      case 'password':
        errors.password = value.length < 8
          ? 'Password must be at least 8 characters long!'
          : '';
        break;

      default:
        break;
    }

    this.setState({ errors });
  };

  // Update state for the input and validate on each change
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();

    // Check if all error messages are empty
    const { errors } = this.state;
    if (errors.fullName === '' && errors.email === '' && errors.password === '') {
      alert('Valid Form');
    } else {
      // Alert each error that exists
      if (errors.fullName !== '') alert(errors.fullName);
      if (errors.email !== '') alert(errors.email);
      if (errors.password !== '') alert(errors.password);
    }
  };

  render() {
    const { fullName, email, password } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h2>Register Here!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter a strong password"
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

export default Register;