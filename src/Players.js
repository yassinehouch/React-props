// src/players.js
import messi from './assets/messi.jpg';
import cr from './assets/cr.jpg';
import n from './assets/n.jpg';

// Rest of the player data remains the same
const players = [
  {
    imgSrc:messi , // Corrected from "img src:{messi}"
    name: "Lionel Messi",
    team: "Paris Saint-Germain",
    nationality: "Argentina",
    jerseyNumber: 30,
    age: 34,
  },
  {
    imgSrc: cr, // Corrected from "img src={cr}"
    name: "Cristiano Ronaldo",
    team: "Manchester United",
    nationality: "Portugal",
    jerseyNumber: 7,
    age: 36,
  },
  {
    imgSrc: n, // Corrected from "Img src={n}"
    name: "Neymar",
    team: "Al Hilal",
    nationality: "Brazil",
    jerseyNumber: 10,
    age: 30,
  }
  // Add more players here
];

export default players;

  