// src/PlayersList.js
import React from "react";
import Player from "./player.js";
import playersData from "./Players.js";

const PlayersList = () => {
  return (
    <div>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
