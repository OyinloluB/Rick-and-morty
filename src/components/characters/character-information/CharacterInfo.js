import React from "react";

const CharacterInfo = ({ character, setCurrentPage }) => {
  return (
    <div>
      <p>
        <span>Name: </span>
        {character.name}
      </p>
      <p>
        <span>Gender: </span>
        {character.gender}
      </p>
      <p>
        <span>Location: </span>
        {character.location.name}
      </p>
      <p>
        <span>Species: </span>
        {character.species}
      </p>
      <p>
        <span>Status: </span>
        {character.status}
      </p>
      <button style={{ marginTop: "20px" }} onClick={() => setCurrentPage(0)}>
        Go back
      </button>
    </div>
  );
};

export default CharacterInfo;
