// src/IndianTeam.js

import React from 'react';

// ---------- Odd/Even Players Components ----------
// They receive an array via prop and destructure specific positions.

export const OddPlayers = ({ IndianTeam }) => {
    const [first, , third, , fifth] = IndianTeam;   // skip 2nd and 4th
    return (
        <ul>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </ul>
    );
};

export const EvenPlayers = ({ IndianTeam }) => {
    const [, second, , fourth, , sixth] = IndianTeam; // skip 1st, 3rd, 5th
    return (
        <ul>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </ul>
    );
};

// ---------- Indian Team array (for odd/even) ----------
export const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

// ---------- T20 and Ranji Trophy arrays (for merging) ----------
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

// Merge them using spread operator
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

// ---------- Component to display the merged list ----------
export const ListofIndianPlayers = ({ IndianPlayers }) => {
    return (
        <ul>
            {IndianPlayers.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </ul>
    );
};