import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/navigation/main-navigation/Main";
import CharacterContainer from "./components/characters/character-container/CharacterContainer";
import CharacterInfo from "./components/characters/character-information/CharacterInfo";

function App() {
  return (
    <div>
      <Main />
      <CharacterContainer />
      <Switch>
        <Route path="/character" component={CharacterInfo} />
      </Switch>
    </div>
  );
}

export default App;
