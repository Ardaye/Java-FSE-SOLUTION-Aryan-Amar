// src/App.js

import React, { useState } from 'react';

function App() {
    // Counter state
    const [counter, setCounter] = useState(0);

    // Converter state
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('EUR');
    const [convertedResult, setConvertedResult] = useState(null);

    // Counter functions
    const incrementCounter = () => {
        setCounter(counter + 1);
        sayHello();
    };

    const sayHello = () => {
        alert('Hello! Counter incremented.');
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };

    // Say Welcome function
    const sayWelcome = (message) => {
        alert(message);
    };

    // Button click handler
    const handleClick = () => {
        alert('I was clicked');
    };

    // Currency conversion handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Define exchange rates (1 unit of currency = X INR)
        const rates = {
            EUR: 90,
            USD: 83,
            GBP: 105,
        };
        const inr = parseFloat(amount);
        if (isNaN(inr) || inr <= 0) {
            alert('Please enter a valid amount');
            return;
        }
        const rate = rates[currency];
        const result = inr / rate;
        setConvertedResult(result.toFixed(2));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Event Examples App</h1>

            {/* Counter Section */}
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                <h2>Counter: {counter}</h2>
                <button onClick={incrementCounter}>Increment</button>
                <button onClick={decrementCounter}>Decrement</button>
            </div>

            {/* Say Welcome Section */}
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                <button onClick={() => sayWelcome('Welcome')}>Say Welcome</button>
            </div>

            {/* Synthetic Event Button */}
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                <button onClick={handleClick}>Click Me (OnPress)</button>
            </div>

            {/* Currency Converter Section */}
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                <h1>Currency Converter!!!</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Amount (INR): </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount in INR"
                            required
                        />
                    </div>
                    <div>
                        <label>Currency: </label>
                        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                            <option value="EUR">Euro (EUR)</option>
                            <option value="USD">US Dollar (USD)</option>
                            <option value="GBP">British Pound (GBP)</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {convertedResult !== null && (
                    <div>
                        <h3>Converted Amount: {convertedResult} {currency}</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;