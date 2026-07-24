// src/App.js

import React from 'react';
import { players } from './playersData';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import { OddPlayers, EvenPlayers, IndianTeam, IndianPlayers, ListofIndianPlayers } from './IndianTeam';

function App() {
    // Change this flag to true or false to see different outputs
    const flag = false;   // Try setting to true later

    if (flag === true) {
        return (
            <div>
                <h1>List of Players</h1>
                <ListofPlayers players={players} />
                <hr />
                <h1>List of Players having Scores Less than 70</h1>
                <Scorebelow70 players={players} />
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <h1>Indian Team</h1>
                    <h2>Odd Players</h2>
                    <OddPlayers IndianTeam={IndianTeam} />
                    <hr />
                    <h2>Even Players</h2>
                    <EvenPlayers IndianTeam={IndianTeam} />
                </div>
                <hr />
                <div>
                    <h1>List of Indian Players Merged:</h1>
                    <ListofIndianPlayers IndianPlayers={IndianPlayers} />
                </div>
            </div>
        );
    }
}

export default App;