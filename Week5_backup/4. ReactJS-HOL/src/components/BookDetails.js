// src/components/BookDetails.js

import React from 'react';

const BookDetails = ({ books }) => {
    return (
        <div className="st2">   {/* from screenshot */}
            <h1>Book Details</h1>
            {books.map(book => (
                <div key={book.id}>
                    <h3>{book.bname}</h3>
                    <p>Price: {book.price}</p>
                </div>
            ))}
        </div>
    );
};

export default BookDetails;