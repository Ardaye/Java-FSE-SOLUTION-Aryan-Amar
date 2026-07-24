import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books, blogs, courses } from './data';

function App() {
    const [showExtra, setShowExtra] = useState(false);

    // Conditional rendering: if/else to toggle extra info
    let extraInfo = null;
    if (showExtra) {
        extraInfo = <p style={{ color: 'green' }}>✨ Extra info: All data is loaded!</p>;
    } else {
        extraInfo = <p style={{ color: 'gray' }}>Click button to see extra info.</p>;
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Blogger App</h1>

            {/* Conditional rendering example: toggle button */}
            <div style={{ textAlign: 'center', margin: '10px 0' }}>
                <button onClick={() => setShowExtra(!showExtra)}>
                    {showExtra ? 'Hide' : 'Show'} Extra Info
                </button>
                {extraInfo}
            </div>

            {/* Grid layout for three components */}
            <div className="container">
                <BookDetails books={books} />
                <BlogDetails blogs={blogs} />
                <CourseDetails courses={courses} />
            </div>

            {/* Another conditional rendering example: using && inside a component */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                {showExtra && <p>🔄 This message appears only when extra info is shown (logical &&).</p>}
            </div>
        </div>
    );
}

export default App;