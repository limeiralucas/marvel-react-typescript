import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Character } from "../../store/ducks/characters/types";
import Card from "../../components/card/card";
import { ApplicationState } from "../../store";

import "./index.css";

interface StateProps {
  characters: Character[];
}

// interface DispatchProps {
//     getAllRequest(): void;
// }

type Props = StateProps;

const CharacterListScreen: React.SFC<Props> = ({ characters }) => {
  const [showedCharacters, setShowedCharacters] = useState([] as Character[]);

  useEffect(() => {
    setShowedCharacters(characters);
  }, [characters]);

  return (
    <div className="characterList">
      {characters.map((character) => (
        <Card
          imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          text={character.name}
        />
      ))}
    </div>
  );
};

CharacterListScreen.defaultProps = {
  characters: [],
};

const mapStateToProps = (state: ApplicationState) => ({
  characters: state.characters.data,
});

export default connect(mapStateToProps)(CharacterListScreen);
