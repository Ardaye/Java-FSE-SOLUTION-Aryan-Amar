import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,   // will store user object
      loading: true   // initially true until data arrives
    };
  }

  // Lifecycle method – called after the component mounts
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    try {
      const response = await fetch(url);
      const data = await response.json();
      // The API returns an array of results; we take the first one
      this.setState({ 
        person: data.results[0], 
        loading: false 
      });
      console.log(data.results[0]); // optional log
    } catch (error) {
      console.error('Error fetching user:', error);
      this.setState({ loading: false }); // stop loading even on error
    }
  }

  render() {
    const { person, loading } = this.state;

    if (loading) {
      return <div>Loading user data...</div>;
    }

    // If person is null (e.g., error), show a fallback
    if (!person) {
      return <div>Could not fetch user. Please try again.</div>;
    }

    // Destructure the needed fields from the person object
    const { name, picture } = person;
    // name has title, first, last; picture has large, medium, thumbnail
    const fullTitle = `${name.title} ${name.first}`;

    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Random User</h2>
        <div>
          <img 
            src={picture.large} 
            alt={`${fullTitle}`} 
            style={{ borderRadius: '50%' }}
          />
        </div>
        <h3>{fullTitle}</h3>
        {/* Optionally display more details */}
      </div>
    );
  }
}

export default Getuser;