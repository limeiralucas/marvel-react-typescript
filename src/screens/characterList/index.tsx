import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Character } from "../../store/ducks/characters/types";
import Card from "../../components/card/card";
import { ApplicationState } from "../../store";

import "./index.css";
import Button from "../../components/button/button";
import TextInput from "../../components/textInput/textInput";

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
    <div className="character-list">
      <div className="character-list__header">
        <div className="character-list__title">Marvel's Characters</div>
        <div className="character-list__search-container">
          <TextInput
            placeholder="Search character"
            onChange={(e) => filterCharacters(e.target.value, characters)}
          />
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="character-list__grid">
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
