import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCharacterId } from "../../../redux/characters/characters.actions";

import Styles from "./character.module.scss";
import CharacterInfo from "../character-information/CharacterInfo";

const Characters = ({ character }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const handleCharacter = (id) => {
    dispatch(fetchCharacterId(id)).then(() => {
      setCurrentPage(1);
    });
  };

  return (
    <div className={Styles.character}>
      {currentPage === 0 ? (
        <>
          <div className={Styles.character__imageContainer}>
            <img
              src={character.image}
              alt={character.name}
              className={Styles.character__image}
            />
          </div>
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
              <span>Status: </span>
              {character.status}
            </p>
          </div>
          <div>
            <button onClick={() => handleCharacter(character.id)}>
              View Character
            </button>
          </div>
        </>
      ) : (
        <CharacterInfo character={character} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default Characters;
