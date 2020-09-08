import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../../redux/characters/characters.actions";
import Styles from "./container.module.scss";

import Sub from "../../navigation/sub-navigation/Sub";
import Characters from "../all-characters/Characters";

const CharacterContainer = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(fetchCharacters());
    console.log(characters);
  }, [dispatch]);

  return (
    <div className={Styles.container}>
      <Sub />
      <div className={Styles.container__character}>
        {characters.map((character) => (
          <Characters key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterContainer;
