// src/App.js

import React, { useState } from 'react';

// ---------- Sub-components ----------

// Greeting components
function GuestGreeting() {
    return <h2>Please sign up.</h2>;
}

function UserGreeting() {
    return <h2>Welcome back</h2>;
}

// Login/Logout buttons (as per hint)
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

// Conditional greeting component (as per hint)
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// Flight list component (browse for guests, book for users)
function FlightList({ isLoggedIn }) {
    const flights = [
        { id: 1, from: 'New York', to: 'London', price: '$500' },
        { id: 2, from: 'Paris', to: 'Dubai', price: '$450' },
        { id: 3, from: 'Tokyo', to: 'Sydney', price: '$600' },
    ];

    const handleBook = (flightId) => {
        alert(`Booking flight ID ${flightId}... (user logged in)`);
    };

    return (
        <div>
            <h3>Available Flights</h3>
            <ul>
                {flights.map(flight => (
                    <li key={flight.id}>
                        {flight.from} → {flight.to} : {flight.price}
                        {isLoggedIn && (
                            <button onClick={() => handleBook(flight.id)} style={{ marginLeft: '10px' }}>
                                Book
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            {!isLoggedIn && <p><em>Login to book tickets.</em></p>}
        </div>
    );
}

// ---------- Main App Component ----------

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Ticket Booking App</h1>

            {/* Greeting */}
            <Greeting isLoggedIn={isLoggedIn} />

            {/* Login/Logout button */}
            {isLoggedIn ? (
                <LogoutButton onClick={handleLogout} />
            ) : (
                <LoginButton onClick={handleLogin} />
            )}

            <hr />

            {/* Flight list (browse/booking) */}
            <FlightList isLoggedIn={isLoggedIn} />
        </div>
    );
}

export default App;