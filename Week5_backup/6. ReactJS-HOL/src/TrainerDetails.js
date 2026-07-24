// src/TrainerDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './trainersMock';

const TrainerDetails = () => {
    const { id } = useParams();  // get the id parameter from the URL

    // Find the trainer with matching trainerId
    const trainer = trainersMock.find(t => t.trainerId === id);

    if (!trainer) {
        return <h2>Trainer not found</h2>;
    }

    return (
        <div>
            <h2>Trainers Details</h2>
            <h3>{trainer.name} ({trainer.technology})</h3>
            <p>{trainer.email}</p>
            <p>{trainer.phone}</p>
            <ul>
                {trainer.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default TrainerDetails;