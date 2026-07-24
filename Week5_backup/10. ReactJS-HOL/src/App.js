import React from 'react';

function App() {
    const mainOffice = { Name: "DBS", Rent: 50000, Address: "Chennai" };
    const offices = [
        { Name: "DBS", Rent: 50000, Address: "Chennai" },
        { Name: "TCS", Rent: 75000, Address: "Bangalore" },
        { Name: "Infosys", Rent: 62000, Address: "Hyderabad" },
        { Name: "Wipro", Rent: 48000, Address: "Pune" }
    ];

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Office Space, at Affordable Range</h1>
            <img src="/office.jpeg" width="25%" height="25%" alt="Office Space" />
            <hr />
            <h2>Featured Office</h2>
            <h3>Name: {mainOffice.Name}</h3>
            <h3>Rent: Rs. {mainOffice.Rent}</h3>
            <h3>Address: {mainOffice.Address}</h3>
            <hr />
            <h2>All Office Spaces</h2>
            <ul>
                {offices.map((office, index) => {
                    const rentColor = office.Rent <= 60000 ? 'red' : 'green';
                    return (
                        <li key={index} style={{ marginBottom: '8px' }}>
                            <strong>{office.Name}</strong> – 
                            <span style={{ color: rentColor, fontWeight: 'bold' }}>
                                Rs. {office.Rent}
                            </span> 
                            – {office.Address}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;