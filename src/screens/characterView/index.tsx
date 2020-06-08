import React from "react";
import { connect } from "react-redux";

import { Character } from "../../store/ducks/characters/types";
import { ApplicationState } from "../../store";

import "./index.css";
import { Serie } from "../../store/ducks/series/types";
import Card from "../../components/card/card";
import Button from "../../components/button/button";

interface StateProps {
  character?: Character;
  series: Serie[];
}

const CharacterScreen: React.SFC<StateProps> = ({ character, series }) => {
  return character ? (
    <div className="character-view">
      <div className="character-view__header">
        <Button value="Back" leftIcon={<i className="fa fa-caret-left"></i>} />
      </div>
      <div className="character-view__image">
        <Card
          imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
        {character.name}
      </div>
      <div className="character-view__serie-grid">
        {series.map((serie) => (
          <Card
            key={serie.id}
            imageUrl={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            text={serie.title}
          />
        ))}
      </div>
    </div>
  ) : (
    <div>Character not found</div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  character: state.characters.characterSelected,
  series: state.series.data,
});

export default connect(mapStateToProps)(CharacterScreen);
