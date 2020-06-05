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

  const filterCharacters = (
    searchStr: string,
    charatersList: Character[]
  ): void => {
    const filteredCharacters = charatersList.filter((character) =>
      character.name.toLowerCase().includes(searchStr.toLowerCase())
    );

    setShowedCharacters(filteredCharacters);
  };

  return (
    <div className="characterList">
      <div className="characterList__header">
        <input
          placeholder="search for a character"
          type="text"
          onChange={(e) => filterCharacters(e.target.value, characters)}
        />
      </div>
      <div className="characterList__grid">
        {showedCharacters.map((character) => (
          <Card
            key={character.id}
            imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            text={character.name}
          />
        ))}
      </div>
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
