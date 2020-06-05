import React from "react";
import { connect } from "react-redux";

import { Character } from "../../store/ducks/characters/types";
import { ApplicationState } from "../../store";

import "./index.css";
import Button from "../../components/button/button";
import { Serie } from "../../store/ducks/series/types";

interface StateProps {
  character?: Character;
  series: Serie[];
}

const CharacterScreen: React.SFC<StateProps> = ({ character, series }) => {
  return character ? (
    <div className="showCharacter">
      <div className="showCharacter__header">
        <div className="showCharacter__actions">
          <Button value="voltar" />
          <Button value="editar" variant="secondary" />
        </div>
        <div
          className="showCharacter__image"
          style={{
            backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
          }}
        />
        <div className="showCharacter__name">
          (#{character.id}) {character.name}
        </div>
      </div>
      <div className="showCharacter__series">
        {series.map((serie) => (
          <div key={serie.id}>{serie.title}</div>
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
